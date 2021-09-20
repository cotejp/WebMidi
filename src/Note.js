import {WebMidi} from "./WebMidi.js";
import {Utilities} from "./Utilities.js";

/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * Note that a `Note` object does not have a MIDI number per se. The MIDI note number is determined
 * when the note is played. This is because, the `octaveOffset` property of various objects
 * (`WebMidi`, `InputChannel`, `Output`, etc.) can be used to offset the note number to match
 * external devices where middle C is not equal to C4.
 *
 * The octave of the note has no intrinsic limit. You can specify a note to be "F27" or "G#-16".
 * However, to play such notes on a MIDI channel, the channel will need to be offset accordingly.
 *
 * `Note` objects can be played back on a single channel by calling
 * [OutputChannel.playNote()]{@link OutputChannel#playNote}. A note can also be played back on the
 * multiple channels of an output by using [Output.playNote()]{@link Output#playNote}.
 *
 * The note has attack and release velocities set at 0.5 by default. These can be changed by passing
 * in the appropriate option. It is also possible to set a system-wide default for attack and
 * release velocities by using the `WebMidi.defaults` property.
 *
 * The note may have a duration. If it does, playback will be stopped when the duration has elapsed
 * by automatically sending a **noteoff** event. By default, the duration is set to `Infinity`. In
 * this case, it will never stop playing unless explicitly stopped by calling a method such as
 * [OutputChannel.stopNote()]{@link OutputChannel#stopNote},
 * [Output.stopNote()]{@link Output#stopNote} or similar.
 *
 * @param value {string|number} The value used to create the note. If an identifier string is used,
 * it must be the note name (with optional accidental) followed by the octave (`"C3"`, `"G#4"`,
 * `"F-1"`, `"Db7"`, etc.). If a number is used, it must be an integer between 0 and 127. The number
 * will be converted to a note name. In this case, middle C is considered to be C4 (note number 60)
 * but that can be offset with the `octaveOffset`property.
 *
 * @param {Object} [options={}]
 *
 * @param {number} [options.duration=Infinity] The number of milliseconds before the note should be
 * explicitly stopped.
 *
 * @param {number} [options.attack=0.5] The note's attack velocity as a float between 0 and 1. If
 * you wish to use an integer between 0 and 127, use the `rawAttack` option instead. If both
 * `attack` and `rawAttack` are specified, the latter has precedence.
 *
 * @param {number} [options.release=0.5] The note's release velocity as a float between 0 and 1. If
 * you wish to use an integer between 0 and 127, use the `rawRelease` option instead. If both
 * `release` and `rawRelease` are specified, the latter has precedence.
 *
 * @param {number} [options.rawAttack=64] The note's attack velocity as an integer between 0 and
 * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
 * `attack` and `rawAttack` are specified, the latter has precedence.
 *
 * @param {number} [options.rawRelease=64] The note's release velocity as an integer between 0 and
 * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
 * `release` and `rawRelease` are specified, the latter has precedence.
 *
 * @param {number} [options.octaveOffset=0] An integer to offset the octave value. **This is only
 * used when the note is specified using a MIDI note number.**
 *
 * @throws {Error} Invalid note identifier
 * @throws {RangeError} Invalid name value
 * @throws {RangeError} Invalid accidental value
 * @throws {RangeError} Invalid octave value
 * @throws {RangeError} Invalid duration value
 * @throws {RangeError} Invalid attack value
 * @throws {RangeError} Invalid release value
 * @throws {RangeError} Invalid 'octaveOffset' value
 *
 * @since 3.0.0
 */
export class Note {

  constructor(value, options = {}) {

    // Assign property defaults
    this.duration = WebMidi.defaults.note.duration;
    this.attack = WebMidi.defaults.note.attack;
    this.release = WebMidi.defaults.note.release;

    // Assign property values from options (validation occurs in setter)
    if (options.duration != undefined) this.duration = options.duration;
    if (options.attack != undefined) this.attack = options.attack;
    if (options.rawAttack != undefined) this.attack = Utilities.toNormalized(options.rawAttack);
    if (options.release != undefined) this.release = options.release;
    if (options.rawRelease != undefined) this.release = Utilities.toNormalized(options.rawRelease);

    // Validate and assign octaveOffset value
    options.octaveOffset = options.octaveOffset == undefined ? 0 :parseInt(options.octaveOffset);
    if (isNaN(options.octaveOffset)) throw new RangeError("Invalid 'octaveOffset' value");

    // Assign note depending on the way it was specified (name or number)
    if (Number.isInteger(value)) {
      this.identifier = Utilities.toNoteIdentifier(value, options.octaveOffset);
    } else {
      this.identifier = value;
    }

  }

  /**
   * The name, optional accidental and octave of the note, as a string.
   * @type {string}
   * @since 3.0.0
   */
  get identifier() {
    return this._name + (this._accidental || "") + this._octave;
  }
  set identifier(value) {

    const fragments = Utilities.getFragments(value);

    if (WebMidi.validation) {
      if (!value) throw new Error("Invalid note identifier");
    }

    this._name = fragments.name;
    this._accidental = fragments.accidental;
    this._octave = fragments.octave;

  }

  /**
   * The name (letter) of the note
   * @type {string}
   * @since 3.0.0
   */
  get name() {
    return this._name;
  }
  set name(value) {

    if (WebMidi.validation) {
      value = value.toUpperCase();
      if (!["C", "D", "E", "F", "G", "A", "B"].includes(value)) {
        throw new Error("Invalid name value");
      }
    }

    this._name = value;

  }

  /**
   * The accidental (#, ##, b or bb) of the note
   * @type {string}
   * @since 3.0.0
   */
  get accidental() {
    return this._accidental;
  }
  set accidental(value) {

    if (WebMidi.validation) {
      value = value.toLowerCase();
      if (!["#", "##", "b", "bb"].includes(value)) throw new Error("Invalid accidental value");
    }

    this._accidental = value;

  }

  /**
   * The octave of the note
   * @type {number}
   * @since 3.0.0
   */
  get octave() {
    return this._octave;
  }
  set octave(value) {

    if (WebMidi.validation) {
      value = parseInt(value);
      if (isNaN(value)) throw new Error("Invalid octave value");
    }

    this._octave = value;

  }

  /**
   * The duration of the note as a positive decimal number representing the number of milliseconds
   * that the note should play for.
   *
   * @type {number}
   * @since 3.0.0
   */
  get duration() {
    return this._duration;
  }
  set duration(value) {

    if (WebMidi.validation) {
      value = parseFloat(value);
      if (isNaN(value) || value === null || value < 0) {
        throw new RangeError("Invalid duration value.");
      }
    }

    this._duration = value;

  }

  /**
   * The attack velocity of the note as an integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get attack() {
    return this._attack;
  }
  set attack(value) {
    if (WebMidi.validation) {
      value = parseFloat(value);
      if (isNaN(value) || !(value >= 0 && value <= 1)) {
        throw new RangeError("Invalid attack value.");
      }
    }

    this._attack = value;

  }

  /**
   * The release velocity of the note as an integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get release() {
    return this._release;
  }
  set release(value) {

    if (WebMidi.validation) {
      value = parseFloat(value);
      if (isNaN(value) || !(value >= 0 && value <= 1)) {
        throw new RangeError("Invalid release value.");
      }
    }

    this._release = value;

  }

  /**
   * The attack velocity of the note as a positive integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get rawAttack() {
    return Utilities.to7Bit(this._attack);
  }

  /**
   * The release velocity of the note as a positive integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get rawRelease() {
    return Utilities.to7Bit(this._release);
  }

}
