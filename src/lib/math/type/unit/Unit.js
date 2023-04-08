import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { isComplex, isUnit, typeOf } from '../../utils/is.js';
import { factory } from '../../utils/factory.js';
import { memoize } from '../../utils/function.js';
import { endsWith } from '../../utils/string.js';
import { clone, hasOwnProperty } from '../../utils/object.js';
import { createBigNumberPi as createPi } from '../../utils/bignumber/constants.js';
import {BASE_UNITS_RAW,PREFIXES_RAW,UNITS_RAW,ALIASES_RAW, UNIT_SYSTEMS_RAW} from './Data'
var name = 'Unit';
var dependencies = ['?on', 'config', 'addScalar', 'subtract', 'multiplyScalar', 'divideScalar', 'pow', 'abs', 'fix', 'round', 'equal', 'isNumeric', 'format', 'number', 'Complex', 'BigNumber', 'Fraction'];

export var createUnitClass = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    on,
    config,
    addScalar,
    subtract,
    multiplyScalar,
    divideScalar,
    pow,
    abs,
    fix,
    round,
    equal,
    isNumeric,
    format,
    number,
    Complex,
    BigNumber: _BigNumber,
    Fraction: _Fraction
  } = _ref;
  var toNumber = number;
  /**
   * A unit can be constructed in the following ways:
   *
   *     const a = new Unit(value, valuelessUnit)
   *     const b = new Unit(null, valuelessUnit)
   *     const c = Unit.parse(str)
   *
   * Example usage:
   *
   *     const a = new Unit(5, 'cm')               // 50 mm
   *     const b = Unit.parse('23 kg')             // 23 kg
   *     const c = math.in(a, new Unit(null, 'm')  // 0.05 m
   *     const d = new Unit(9.81, "m/s^2")         // 9.81 m/s^2
   *
   * @class Unit
   * @constructor Unit
   * @param {number | BigNumber | Fraction | Complex | boolean} [value]  A value like 5.2
   * @param {string | Unit} valuelessUnit   A unit without value. Can have prefix, like "cm"
   */
  function Unit(value, valuelessUnit) {
    if (!(this instanceof Unit)) {
      throw new Error('Constructor must be called with the new operator');
    }
    if (!(value === null || value === undefined || isNumeric(value) || isComplex(value))) {
      throw new TypeError('First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined');
    }
    this.fixPrefix = false; // if true, function format will not search for the
    // best prefix but leave it as initially provided.
    // fixPrefix is set true by the method Unit.to

    // The justification behind this is that if the constructor is explicitly called,
    // the caller wishes the units to be returned exactly as supplied.
    this.skipAutomaticSimplification = true;
    if (valuelessUnit === undefined) {
      this.units = [];
      this.dimensions = BASE_DIMENSIONS.map(x => 0);
    } else if (typeof valuelessUnit === 'string') {
      var u = Unit.parse(valuelessUnit);
      this.units = u.units;
      this.dimensions = u.dimensions;
    } else if (isUnit(valuelessUnit) && valuelessUnit.value === null) {
      // clone from valuelessUnit
      this.fixPrefix = valuelessUnit.fixPrefix;
      this.skipAutomaticSimplification = valuelessUnit.skipAutomaticSimplification;
      this.dimensions = valuelessUnit.dimensions.slice(0);
      this.units = valuelessUnit.units.map(u => _extends({}, u));
    } else {
      throw new TypeError('Second parameter in Unit constructor must be a string or valueless Unit');
    }
    this.value = this._normalize(value);
  }

  /**
   * Attach type information
   */
  Object.defineProperty(Unit, 'name', {
    value: 'Unit'
  });
  Unit.prototype.constructor = Unit;
  Unit.prototype.type = 'Unit';
  Unit.prototype.isUnit = true;

  // private variables and functions for the Unit parser
  var text, index, c;
  function skipWhitespace() {
    while (c === ' ' || c === '\t') {
      next();
    }
  }
  function isDigitDot(c) {
    return c >= '0' && c <= '9' || c === '.';
  }
  function isDigit(c) {
    return c >= '0' && c <= '9';
  }
  function next() {
    index++;
    c = text.charAt(index);
  }
  function revert(oldIndex) {
    index = oldIndex;
    c = text.charAt(index);
  }
  function parseNumber() {
    var number = '';
    var oldIndex = index;
    if (c === '+') {
      next();
    } else if (c === '-') {
      number += c;
      next();
    }
    if (!isDigitDot(c)) {
      // a + or - must be followed by a digit
      revert(oldIndex);
      return null;
    }

    // get number, can have a single dot
    if (c === '.') {
      number += c;
      next();
      if (!isDigit(c)) {
        // this is no legal number, it is just a dot
        revert(oldIndex);
        return null;
      }
    } else {
      while (isDigit(c)) {
        number += c;
        next();
      }
      if (c === '.') {
        number += c;
        next();
      }
    }
    while (isDigit(c)) {
      number += c;
      next();
    }

    // check for exponential notation like "2.3e-4" or "1.23e50"
    if (c === 'E' || c === 'e') {
      // The grammar branches here. This could either be part of an exponent or the start of a unit that begins with the letter e, such as "4exabytes"

      var tentativeNumber = '';
      var tentativeIndex = index;
      tentativeNumber += c;
      next();
      if (c === '+' || c === '-') {
        tentativeNumber += c;
        next();
      }

      // Scientific notation MUST be followed by an exponent (otherwise we assume it is not scientific notation)
      if (!isDigit(c)) {
        // The e or E must belong to something else, so return the number without the e or E.
        revert(tentativeIndex);
        return number;
      }

      // We can now safely say that this is scientific notation.
      number = number + tentativeNumber;
      while (isDigit(c)) {
        number += c;
        next();
      }
    }
    return number;
  }
  function parseUnit() {
    var unitName = '';

    // Alphanumeric characters only; matches [a-zA-Z0-9]
    while (isDigit(c) || Unit.isValidAlpha(c)) {
      unitName += c;
      next();
    }

    // Must begin with [a-zA-Z]
    var firstC = unitName.charAt(0);
    if (Unit.isValidAlpha(firstC)) {
      return unitName;
    } else {
      return null;
    }
  }
  function parseCharacter(toFind) {
    if (c === toFind) {
      next();
      return toFind;
    } else {
      return null;
    }
  }

  /**
   * Parse a string into a unit. The value of the unit is parsed as number,
   * BigNumber, or Fraction depending on the math.js config setting `number`.
   *
   * Throws an exception if the provided string does not contain a valid unit or
   * cannot be parsed.
   * @memberof Unit
   * @param {string} str        A string like "5.2 inch", "4e2 cm/s^2"
   * @return {Unit} unit
   */
  Unit.parse = function (str, options) {
    options = options || {};
    text = str;
    index = -1;
    c = '';
    if (typeof text !== 'string') {
      throw new TypeError('Invalid argument in Unit.parse, string expected');
    }
    var unit = new Unit();
    unit.units = [];
    var powerMultiplierCurrent = 1;
    var expectingUnit = false;

    // A unit should follow this pattern:
    // [number] ...[ [*/] unit[^number] ]
    // unit[^number] ... [ [*/] unit[^number] ]

    // Rules:
    // number is any floating point number.
    // unit is any alphanumeric string beginning with an alpha. Units with names like e3 should be avoided because they look like the exponent of a floating point number!
    // The string may optionally begin with a number.
    // Each unit may optionally be followed by ^number.
    // Whitespace or a forward slash is recommended between consecutive units, although the following technically is parseable:
    //   2m^2kg/s^2
    // it is not good form. If a unit starts with e, then it could be confused as a floating point number:
    //   4erg

    next();
    skipWhitespace();

    // Optional number at the start of the string
    var valueStr = parseNumber();

    var value = null;
    if (valueStr) {
      if (config.number === 'BigNumber') {
        value = new _BigNumber(valueStr);
      } else if (config.number === 'Fraction') {
        try {
          // not all numbers can be turned in Fractions, for example very small numbers not
          value = new _Fraction(valueStr);
        } catch (err) {
          value = parseFloat(valueStr);
        }
      } else {
        // number
        value = parseFloat(valueStr);
      }
      skipWhitespace(); // Whitespace is not required here

      // handle multiplication or division right after the value, like '1/s'
      if (parseCharacter('*')) {
        powerMultiplierCurrent = 1;
        expectingUnit = true;
      } else if (parseCharacter('/')) {
        powerMultiplierCurrent = -1;
        expectingUnit = true;
      }
    }

    // Stack to keep track of powerMultipliers applied to each parentheses group
    var powerMultiplierStack = [];

    // Running product of all elements in powerMultiplierStack
    var powerMultiplierStackProduct = 1;
    while (true) {
      skipWhitespace();

      // Check for and consume opening parentheses, pushing powerMultiplierCurrent to the stack
      // A '(' will always appear directly before a unit.
      while (c === '(') {
        powerMultiplierStack.push(powerMultiplierCurrent);
        powerMultiplierStackProduct *= powerMultiplierCurrent;
        powerMultiplierCurrent = 1;
        next();
        skipWhitespace();
      }

      // Is there something here?
      var uStr = void 0;
      if (c) {
        var oldC = c;
        uStr = parseUnit();
        if (uStr === null) {
          throw new SyntaxError('Unexpected "' + oldC + '" in "' + text + '" at index ' + index.toString());
        }
      } else {
        // End of input.
        break;
      }

      // Verify the unit exists and get the prefix (if any)
      var res = _findUnit(uStr);
      if (res === null) {
        // Unit not found.
        throw new SyntaxError('Unit "' + uStr + '" not found.');
      }
      var power = powerMultiplierCurrent * powerMultiplierStackProduct;
      // Is there a "^ number"?
      skipWhitespace();
      if (parseCharacter('^')) {
        skipWhitespace();
        var p = parseNumber();
        if (p === null) {
          // No valid number found for the power!
          throw new SyntaxError('In "' + str + '", "^" must be followed by a floating-point number');
        }
        power *= p;
      }

      // Add the unit to the list
      unit.units.push({
        unit: res.unit,
        prefix: res.prefix,
        power
      });
      for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
        unit.dimensions[i] += (res.unit.dimensions[i] || 0) * power;
      }

      // Check for and consume closing parentheses, popping from the stack.
      // A ')' will always follow a unit.
      skipWhitespace();
      while (c === ')') {
        if (powerMultiplierStack.length === 0) {
          throw new SyntaxError('Unmatched ")" in "' + text + '" at index ' + index.toString());
        }
        powerMultiplierStackProduct /= powerMultiplierStack.pop();
        next();
        skipWhitespace();
      }

      // "*" and "/" should mean we are expecting something to come next.
      // Is there a forward slash? If so, negate powerMultiplierCurrent. The next unit or paren group is in the denominator.
      expectingUnit = false;
      if (parseCharacter('*')) {
        // explicit multiplication
        powerMultiplierCurrent = 1;
        expectingUnit = true;
      } else if (parseCharacter('/')) {
        // division
        powerMultiplierCurrent = -1;
        expectingUnit = true;
      } else {
        // implicit multiplication
        powerMultiplierCurrent = 1;
      }

      // Replace the unit into the auto unit system
      if (res.unit.base) {
        var baseDim = res.unit.base.key;
        UNIT_SYSTEMS.auto[baseDim] = {
          unit: res.unit,
          prefix: res.prefix
        };
      }
    }

    // Has the string been entirely consumed?
    skipWhitespace();
    if (c) {
      throw new SyntaxError('Could not parse: "' + str + '"');
    }

    // Is there a trailing slash?
    if (expectingUnit) {
      throw new SyntaxError('Trailing characters: "' + str + '"');
    }

    // Is the parentheses stack empty?
    if (powerMultiplierStack.length !== 0) {
      throw new SyntaxError('Unmatched "(" in "' + text + '"');
    }

    // Are there any units at all?
    if (unit.units.length === 0 && !options.allowNoUnits) {
      throw new SyntaxError('"' + str + '" contains no units');
    }
    unit.value = value !== undefined ? unit._normalize(value) : null;
    return unit;
  };

  /**
   * create a copy of this unit
   * @memberof Unit
   * @return {Unit} Returns a cloned version of the unit
   */
  Unit.prototype.clone = function () {
    var unit = new Unit();
    unit.fixPrefix = this.fixPrefix;
    unit.skipAutomaticSimplification = this.skipAutomaticSimplification;
    unit.value = clone(this.value);
    unit.dimensions = this.dimensions.slice(0);
    unit.units = [];
    for (var i = 0; i < this.units.length; i++) {
      unit.units[i] = {};
      for (var p in this.units[i]) {
        if (hasOwnProperty(this.units[i], p)) {
          unit.units[i][p] = this.units[i][p];
        }
      }
    }
    return unit;
  };

  /**
   * Return the type of the value of this unit
   *
   * @memberof Unit
   * @ return {string} type of the value of the unit
   */
  Unit.prototype.valueType = function () {
    return typeOf(this.value);
  };

  /**
   * Return whether the unit is derived (such as m/s, or cm^2, but not N)
   * @memberof Unit
   * @return {boolean} True if the unit is derived
   */
  Unit.prototype._isDerived = function () {
    if (this.units.length === 0) {
      return false;
    }
    return this.units.length > 1 || Math.abs(this.units[0].power - 1.0) > 1e-15;
  };

  /**
   * Normalize a value, based on its currently set unit(s)
   * @memberof Unit
   * @param {number | BigNumber | Fraction | boolean} value
   * @return {number | BigNumber | Fraction | boolean} normalized value
   * @private
   */
  Unit.prototype._normalize = function (value) {
    if (value === null || value === undefined || this.units.length === 0) {
      return value;
    }
    var res = value;
    var convert = Unit._getNumberConverter(typeOf(value)); // convert to Fraction or BigNumber if needed

    for (var i = 0; i < this.units.length; i++) {
      var unitValue = convert(this.units[i].unit.value);
      var unitPrefixValue = convert(this.units[i].prefix.value);
      var unitPower = convert(this.units[i].power);
      res = multiplyScalar(res, pow(multiplyScalar(unitValue, unitPrefixValue), unitPower));
    }
    return res;
  };

  /**
   * Denormalize a value, based on its currently set unit(s)
   * @memberof Unit
   * @param {number} value
   * @param {number} [prefixValue]    Optional prefix value to be used (ignored if this is a derived unit)
   * @return {number} denormalized value
   * @private
   */
  Unit.prototype._denormalize = function (value, prefixValue) {
    if (value === null || value === undefined || this.units.length === 0) {
      return value;
    }
    var res = value;
    var convert = Unit._getNumberConverter(typeOf(value)); // convert to Fraction or BigNumber if needed
    for (var i = 0; i < this.units.length; i++) {
      var unitValue = convert(this.units[i].unit.value);
      var unitPrefixValue = convert(this.units[i].prefix.value);
      var unitPower = convert(this.units[i].power);
      var dnom = pow(multiplyScalar(unitValue, unitPrefixValue), unitPower)
      if(typeOf(value) === "Fraction" && dnom.d >= 1e6) {
        dnom.d = dnom.d / 1e6
        res.d = res.d / 1e6
      }
      res = divideScalar(res, dnom);
    }
    return res;
  };

  /**
   * Find a unit from a string
   * @memberof Unit
   * @param {string} str              A string like 'cm' or 'inch'
   * @returns {Object | null} result  When found, an object with fields unit and
   *                                  prefix is returned. Else, null is returned.
   * @private
   */
  var _findUnit = memoize(str => {
    // First, match units names exactly. For example, a user could define 'mm' as 10^-4 m, which is silly, but then we would want 'mm' to match the user-defined unit.
    if (hasOwnProperty(UNITS, str)) {
      var unit = UNITS[str];
      var prefix = unit.prefixes[''];
      return {
        unit,
        prefix
      };
    }
    for (var _name in UNITS) {
      if (hasOwnProperty(UNITS, _name)) {
        if (endsWith(str, _name)) {
          var _unit = UNITS[_name];
          var prefixLen = str.length - _name.length;
          var prefixName = str.substring(0, prefixLen);
          var _prefix = hasOwnProperty(_unit.prefixes, prefixName) ? _unit.prefixes[prefixName] : undefined;
          if (_prefix !== undefined) {
            // store unit, prefix, and value
            return {
              unit: _unit,
              prefix: _prefix
            };
          }
        }
      }
    }
    return null;
  }, {
    hasher: args => args[0],
    limit: 100
  });

  /**
   * Test if the given expression is a unit.
   * The unit can have a prefix but cannot have a value.
   * @memberof Unit
   * @param {string} name   A string to be tested whether it is a value less unit.
   *                        The unit can have prefix, like "cm"
   * @return {boolean}      true if the given string is a unit
   */
  Unit.isValuelessUnit = function (name) {
    return _findUnit(name) !== null;
  };

  /**
   * check if this unit has given base unit
   * If this unit is a derived unit, this will ALWAYS return false, since by definition base units are not derived.
   * @memberof Unit
   * @param {BASE_UNITS | string | undefined} base
   */
  Unit.prototype.hasBase = function (base) {
    if (typeof base === 'string') {
      base = BASE_UNITS[base];
    }
    if (!base) {
      return false;
    }

    // All dimensions must be the same
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      if (Math.abs((this.dimensions[i] || 0) - (base.dimensions[i] || 0)) > 1e-12) {
        return false;
      }
    }
    return true;
  };

  /**
   * Check if this unit has a base or bases equal to another base or bases
   * For derived units, the exponent on each base also must match
   * @memberof Unit
   * @param {Unit} other
   * @return {boolean} true if equal base
   */
  Unit.prototype.equalBase = function (other) {
    // All dimensions must be the same
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      if (Math.abs((this.dimensions[i] || 0) - (other.dimensions[i] || 0)) > 1e-12) {
        return false;
      }
    }
    return true;
  };

  /**
   * Check if this unit equals another unit
   * @memberof Unit
   * @param {Unit} other
   * @return {boolean} true if both units are equal
   */
  Unit.prototype.equals = function (other) {
    return this.equalBase(other) && equal(this.value, other.value);
  };

  /**
   * Multiply this unit with another one or with a scalar
   * @memberof Unit
   * @param {Unit} other
   * @return {Unit} product of this unit and the other unit
   */
  Unit.prototype.multiply = function (_other) {
    var res = this.clone();
    var other = isUnit(_other) ? _other : new Unit(_other);
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      // Dimensions arrays may be of different lengths. Default to 0.
      res.dimensions[i] = (this.dimensions[i] || 0) + (other.dimensions[i] || 0);
    }

    // Append other's units list onto res
    for (var _i = 0; _i < other.units.length; _i++) {
      // Make a shallow copy of every unit
      var inverted = _objectSpread({}, other.units[_i]);
      res.units.push(inverted);
    }

    // If at least one operand has a value, then the result should also have a value
    if (this.value !== null || other.value !== null) {
      var valThis = this.value === null ? this._normalize(1) : this.value;
      var valOther = other.value === null ? other._normalize(1) : other.value;
      res.value = multiplyScalar(valThis, valOther);
    } else {
      res.value = null;
    }
    if (isUnit(_other)) {
      res.skipAutomaticSimplification = false;
    }
    return getNumericIfUnitless(res);
  };

  /**
   * Divide a number by this unit
   *
   * @memberof Unit
   * @param {numeric} numerator
   * @param {unit} result of dividing numerator by this unit
   */
  Unit.prototype.divideInto = function (numerator) {
    return new Unit(numerator).divide(this);
  };

  /**
   * Divide this unit by another one
   * @memberof Unit
   * @param {Unit | numeric} other
   * @return {Unit} result of dividing this unit by the other unit
   */
  Unit.prototype.divide = function (_other) {
    var res = this.clone();
    var other = isUnit(_other) ? _other : new Unit(_other);
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      // Dimensions arrays may be of different lengths. Default to 0.
      res.dimensions[i] = (this.dimensions[i] || 0) - (other.dimensions[i] || 0);
    }

    // Invert and append other's units list onto res
    for (var _i2 = 0; _i2 < other.units.length; _i2++) {
      // Make a shallow copy of every unit
      var inverted = _objectSpread(_objectSpread({}, other.units[_i2]), {}, {
        power: -other.units[_i2].power
      });
      res.units.push(inverted);
    }

    // If at least one operand has a value, the result should have a value
    if (this.value !== null || other.value !== null) {
      var valThis = this.value === null ? this._normalize(1) : this.value;
      var valOther = other.value === null ? other._normalize(1) : other.value;
      res.value = divideScalar(valThis, valOther);
    } else {
      res.value = null;
    }
    if (isUnit(_other)) {
      res.skipAutomaticSimplification = false;
    }
    return getNumericIfUnitless(res);
  };

  /**
   * Calculate the power of a unit
   * @memberof Unit
   * @param {number | Fraction | BigNumber} p
   * @returns {Unit}      The result: this^p
   */
  Unit.prototype.pow = function (p) {
    var res = this.clone();
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      // Dimensions arrays may be of different lengths. Default to 0.
      res.dimensions[i] = (this.dimensions[i] || 0) * p;
    }

    // Adjust the power of each unit in the list
    for (var _i3 = 0; _i3 < res.units.length; _i3++) {
      res.units[_i3].power *= p;
    }
    if (res.value !== null) {
      res.value = pow(res.value, p);

      // only allow numeric output, we don't want to return a Complex number
      // if (!isNumeric(res.value)) {
      //  res.value = NaN
      // }
      // Update: Complex supported now
    } else {
      res.value = null;
    }
    res.skipAutomaticSimplification = false;
    return getNumericIfUnitless(res);
  };

  /**
   * Return the numeric value of this unit if it is dimensionless, has a value, and config.predictable == false; or the original unit otherwise
   * @param {Unit} unit
   * @returns {number | Fraction | BigNumber | Unit}  The numeric value of the unit if conditions are met, or the original unit otherwise
   */
  function getNumericIfUnitless(unit) {
    if (unit.equalBase(BASE_UNITS.NONE) && unit.value !== null && !config.predictable) {
      return unit.value;
    } else {
      return unit;
    }
  }

  /**
   * Calculate the absolute value of a unit
   * @memberof Unit
   * @param {number | Fraction | BigNumber} x
   * @returns {Unit}      The result: |x|, absolute value of x
   */
  Unit.prototype.abs = function () {
    var ret = this.clone();
    if (ret.value !== null) {
      if (ret._isDerived() || ret.units[0].unit.offset === 0) {
        ret.value = abs(ret.value);
      } else {
        // To give the correct, but unexpected, results for units with an offset.
        // For example, abs(-283.15 degC) = -263.15 degC !!!
        // We must take the offset into consideration here
        var convert = ret._numberConverter(); // convert to Fraction or BigNumber if needed
        var unitValue = convert(ret.units[0].unit.value);
        var nominalOffset = convert(ret.units[0].unit.offset);
        var unitOffset = multiplyScalar(unitValue, nominalOffset);
        ret.value = subtract(abs(addScalar(ret.value, unitOffset)), unitOffset);
      }
    }
    for (var i in ret.units) {
      if (ret.units[i].unit.name === 'VA' || ret.units[i].unit.name === 'VAR') {
        ret.units[i].unit = UNITS.W;
      }
    }
    return ret;
  };

  /**
   * Convert the unit to a specific unit name.
   * @memberof Unit
   * @param {string | Unit} valuelessUnit   A unit without value. Can have prefix, like "cm"
   * @returns {Unit} Returns a clone of the unit with a fixed prefix and unit.
   */
  Unit.prototype.to = function (valuelessUnit) {
    var value = this.value === null ? this._normalize(1) : this.value;
    var other;
    if (typeof valuelessUnit === 'string') {
      other = Unit.parse(valuelessUnit);
    } else if (isUnit(valuelessUnit)) {
      other = valuelessUnit.clone();
    } else {
      throw new Error('String or Unit expected as parameter');
    }

    if (!this.equalBase(other)) {
      throw new Error("Units do not match ('".concat(other.toString(), "' != '").concat(this.toString(), "')"));
    }
    if (other.value !== null) {
      throw new Error('Cannot convert to a unit with a value');
    }
    if (this.value === null || this._isDerived() || this.units[0].unit.offset === other.units[0].unit.offset) {

      other.value = clone(value);
    } else {
      /* Need to adjust value by difference in offset to convert */
      var convert = Unit._getNumberConverter(typeOf(value)); // convert to Fraction or BigNumber if needed

      var thisUnitValue = convert(this.units[0].unit.value);
      var thisNominalOffset = convert(this.units[0].unit.offset);
      var thisUnitOffset = multiplyScalar(thisUnitValue, thisNominalOffset);
      var otherUnitValue = convert(other.units[0].unit.value);
      var otherNominalOffset = convert(other.units[0].unit.offset);
      var otherUnitOffset = multiplyScalar(otherUnitValue, otherNominalOffset);
      other.value = subtract(addScalar(value, thisUnitOffset), otherUnitOffset);
    }
    other.fixPrefix = true;
    other.skipAutomaticSimplification = true;
    return other;
  };

  /**
   * Return the value of the unit when represented with given valueless unit
   * @memberof Unit
   * @param {string | Unit} valuelessUnit    For example 'cm' or 'inch'
   * @return {number} Returns the unit value as number.
   */
  // TODO: deprecate Unit.toNumber? It's always better to use toNumeric
  Unit.prototype.toNumber = function (valuelessUnit) {
    return toNumber(this.toNumeric(valuelessUnit));
  };

  /**
   * Return the value of the unit in the original numeric type
   * @memberof Unit
   * @param {string | Unit} valuelessUnit    For example 'cm' or 'inch'
   * @return {number | BigNumber | Fraction} Returns the unit value
   */
  Unit.prototype.toNumeric = function (valuelessUnit) {
    var other;
    if (valuelessUnit) {
      // Allow getting the numeric value without converting to a different unit
      other = this.to(valuelessUnit);
    } else {
      other = this.clone();
    }

    if (other._isDerived() || other.units.length === 0) {
      return other._denormalize(other.value);
    } else {
      return other._denormalize(other.value, other.units[0].prefix.value);
    }
  };

  /**
   * Get a string representation of the unit.
   * @memberof Unit
   * @return {string}
   */
  Unit.prototype.toString = function () {
    return this.format();
  };

  /**
   * Get a JSON representation of the unit
   * @memberof Unit
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Unit", "value": 2, "unit": "cm", "fixPrefix": false}`
   */
  Unit.prototype.toJSON = function () {
    return {
      mathjs: 'Unit',
      value: this._denormalize(this.value),
      unit: this.formatUnits(),
      fixPrefix: this.fixPrefix
    };
  };

  /**
   * Instantiate a Unit from a JSON object
   * @memberof Unit
   * @param {Object} json  A JSON object structured as:
   *                       `{"mathjs": "Unit", "value": 2, "unit": "cm", "fixPrefix": false}`
   * @return {Unit}
   */
  Unit.fromJSON = function (json) {
    var unit = new Unit(json.value, json.unit);
    unit.fixPrefix = json.fixPrefix || false;
    return unit;
  };

  /**
   * Returns the string representation of the unit.
   * @memberof Unit
   * @return {string}
   */
  Unit.prototype.valueOf = Unit.prototype.toString;

  /**
   * Simplify this Unit's unit list and return a new Unit with the simplified list.
   * The returned Unit will contain a list of the "best" units for formatting.
   */
  Unit.prototype.simplify = function () {
    var ret = this.clone();
    var proposedUnitList = [];

    // Search for a matching base
    var matchingBase;
    for (var key in currentUnitSystem) {
      if (hasOwnProperty(currentUnitSystem, key)) {
        if (ret.hasBase(BASE_UNITS[key])) {
          matchingBase = key;
          break;
        }
      }
    }
    if (matchingBase === 'NONE') {
      ret.units = [];
    } else {
      var matchingUnit;
      if (matchingBase) {
        // Does the unit system have a matching unit?
        if (hasOwnProperty(currentUnitSystem, matchingBase)) {
          matchingUnit = currentUnitSystem[matchingBase];
        }
      }
      if (matchingUnit) {
        ret.units = [{
          unit: matchingUnit.unit,
          prefix: matchingUnit.prefix,
          power: 1.0
        }];
      } else {
        // Multiple units or units with powers are formatted like this:
        // 5 (kg m^2) / (s^3 mol)
        // Build an representation from the base units of the current unit system
        var missingBaseDim = false;
        for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
          var baseDim = BASE_DIMENSIONS[i];
          if (Math.abs(ret.dimensions[i] || 0) > 1e-12) {
            if (hasOwnProperty(currentUnitSystem, baseDim)) {
              proposedUnitList.push({
                unit: currentUnitSystem[baseDim].unit,
                prefix: currentUnitSystem[baseDim].prefix,
                power: ret.dimensions[i] || 0
              });
            } else {
              missingBaseDim = true;
            }
          }
        }

        // Is the proposed unit list "simpler" than the existing one?
        if (proposedUnitList.length < ret.units.length && !missingBaseDim) {
          // Replace this unit list with the proposed list
          ret.units = proposedUnitList;
        }
      }
    }
    return ret;
  };

  /**
   * Returns a new Unit in the SI system with the same value as this one
   */
  Unit.prototype.toSI = function () {
    var ret = this.clone();
    var proposedUnitList = [];

    // Multiple units or units with powers are formatted like this:
    // 5 (kg m^2) / (s^3 mol)
    // Build an representation from the base units of the SI unit system
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      var baseDim = BASE_DIMENSIONS[i];
      if (Math.abs(ret.dimensions[i] || 0) > 1e-12) {
        if (hasOwnProperty(UNIT_SYSTEMS.si, baseDim)) {
          proposedUnitList.push({
            unit: UNIT_SYSTEMS.si[baseDim].unit,
            prefix: UNIT_SYSTEMS.si[baseDim].prefix,
            power: ret.dimensions[i] || 0
          });
        } else {
          throw new Error('Cannot express custom unit ' + baseDim + ' in SI units');
        }
      }
    }

    // Replace this unit list with the proposed list
    ret.units = proposedUnitList;
    ret.fixPrefix = true;
    ret.skipAutomaticSimplification = true;
    return ret;
  };

  /**
   * Get a string representation of the units of this Unit, without the value. The unit list is formatted as-is without first being simplified.
   * @memberof Unit
   * @return {string}
   */
  Unit.prototype.formatUnits = function () {
    var strNum = '';
    var strDen = '';
    var nNum = 0;
    var nDen = 0;
    for (var i = 0; i < this.units.length; i++) {
      if (this.units[i].power > 0) {
        nNum++;
        strNum += ' ' + this.units[i].prefix.name + this.units[i].unit.name;
        if (Math.abs(this.units[i].power - 1.0) > 1e-15) {
          strNum += '^' + this.units[i].power;
        }
      } else if (this.units[i].power < 0) {
        nDen++;
      }
    }
    if (nDen > 0) {
      for (var _i4 = 0; _i4 < this.units.length; _i4++) {
        if (this.units[_i4].power < 0) {
          if (nNum > 0) {
            strDen += ' ' + this.units[_i4].prefix.name + this.units[_i4].unit.name;
            if (Math.abs(this.units[_i4].power + 1.0) > 1e-15) {
              strDen += '^' + -this.units[_i4].power;
            }
          } else {
            strDen += ' ' + this.units[_i4].prefix.name + this.units[_i4].unit.name;
            strDen += '^' + this.units[_i4].power;
          }
        }
      }
    }
    // Remove leading " "
    strNum = strNum.substr(1);
    strDen = strDen.substr(1);

    // Add parans for better copy/paste back into evaluate, for example, or for better pretty print formatting
    if (nNum > 1 && nDen > 0) {
      strNum = '(' + strNum + ')';
    }
    if (nDen > 1 && nNum > 0) {
      strDen = '(' + strDen + ')';
    }
    var str = strNum;
    if (nNum > 0 && nDen > 0) {
      str += ' / ';
    }
    str += strDen;
    return str;
  };

  /**
   * Get a string representation of the Unit, with optional formatting options.
   * @memberof Unit
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @return {string}
   */
  Unit.prototype.format = function (options) {
    // Simplfy the unit list, unless it is valueless or was created directly in the
    // constructor or as the result of to or toSI
    var simp = this.skipAutomaticSimplification || this.value === null ? this.clone() : this.simplify();

    // Apply some custom logic for handling VA and VAR. The goal is to express the value of the unit as a real value, if possible. Otherwise, use a real-valued unit instead of a complex-valued one.
    var isImaginary = false;
    if (typeof simp.value !== 'undefined' && simp.value !== null && isComplex(simp.value)) {
      // TODO: Make this better, for example, use relative magnitude of re and im rather than absolute
      isImaginary = Math.abs(simp.value.re) < 1e-14;
    }
    for (var i in simp.units) {
      if (hasOwnProperty(simp.units, i)) {
        if (simp.units[i].unit) {
          if (simp.units[i].unit.name === 'VA' && isImaginary) {
            simp.units[i].unit = UNITS.VAR;
          } else if (simp.units[i].unit.name === 'VAR' && !isImaginary) {
            simp.units[i].unit = UNITS.VA;
          }
        }
      }
    }

    // Now apply the best prefix
    // Units must have only one unit and not have the fixPrefix flag set
    if (simp.units.length === 1 && !simp.fixPrefix) {
      // Units must have integer powers, otherwise the prefix will change the
      // outputted value by not-an-integer-power-of-ten
      if (Math.abs(simp.units[0].power - Math.round(simp.units[0].power)) < 1e-14) {
        // Apply the best prefix
        simp.units[0].prefix = simp._bestPrefix();
      }
    }
    var value = simp._denormalize(simp.value);
    var str = simp.value !== null ? format(value, options || {}) : '';
    var unitStr = simp.formatUnits();
    if (simp.value && isComplex(simp.value)) {
      str = '(' + str + ')'; // Surround complex values with ( ) to enable better parsing
    }

    if (unitStr.length > 0 && str.length > 0) {
      str += ' ';
    }
    str += unitStr;
    return str;
  };

  /**
   * Calculate the best prefix using current value.
   * @memberof Unit
   * @returns {Object} prefix
   * @private
   */
  Unit.prototype._bestPrefix = function () {
    if (this.units.length !== 1) {
      throw new Error('Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!');
    }
    if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14) {
      throw new Error('Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!');
    }

    // find the best prefix value (resulting in the value of which
    // the absolute value of the log10 is closest to zero,
    // though with a little offset of 1.2 for nicer values: you get a
    // sequence 1mm 100mm 500mm 0.6m 1m 10m 100m 500m 0.6km 1km ...

    // Note: the units value can be any numeric type, but to find the best
    // prefix it's enough to work with limited precision of a regular number
    // Update: using mathjs abs since we also allow complex numbers
    var absValue = this.value !== null ? abs(this.value) : 0;
    var absUnitValue = abs(this.units[0].unit.value);
    var bestPrefix = this.units[0].prefix;
    if (absValue === 0) {
      return bestPrefix;
    }
    var power = this.units[0].power;
    var bestDiff = Math.log(absValue / Math.pow(bestPrefix.value * absUnitValue, power)) / Math.LN10 - 1.2;
    if (bestDiff > -2.200001 && bestDiff < 1.800001) return bestPrefix; // Allow the original prefix
    bestDiff = Math.abs(bestDiff);
    var prefixes = this.units[0].unit.prefixes;
    for (var p in prefixes) {
      if (hasOwnProperty(prefixes, p)) {
        var prefix = prefixes[p];
        if (prefix.scientific) {
          var diff = Math.abs(Math.log(absValue / Math.pow(prefix.value * absUnitValue, power)) / Math.LN10 - 1.2);
          if (diff < bestDiff || diff === bestDiff && prefix.name.length < bestPrefix.name.length) {
            // choose the prefix with the smallest diff, or if equal, choose the one
            // with the shortest name (can happen with SHORTLONG for example)
            bestPrefix = prefix;
            bestDiff = diff;
          }
        }
      }
    }
    return bestPrefix;
  };

  /**
   * Returns an array of units whose sum is equal to this unit
   * @memberof Unit
   * @param {Array} [parts] An array of strings or valueless units.
   *
   *   Example:
   *
   *   const u = new Unit(1, 'm')
   *   u.splitUnit(['feet', 'inch'])
   *     [ 3 feet, 3.3700787401575 inch ]
   *
   * @return {Array} An array of units.
   */
  Unit.prototype.splitUnit = function (parts) {
    var x = this.clone();
    var ret = [];
    for (var i = 0; i < parts.length; i++) {
      // Convert x to the requested unit
      x = x.to(parts[i]);
      if (i === parts.length - 1) break;

      // Get the numeric value of this unit
      var xNumeric = x.toNumeric();

      // Check to see if xNumeric is nearly equal to an integer,
      // since fix can incorrectly round down if there is round-off error
      var xRounded = round(xNumeric);
      var xFixed = void 0;
      var isNearlyEqual = equal(xRounded, xNumeric);
      if (isNearlyEqual) {
        xFixed = xRounded;
      } else {
        xFixed = fix(x.toNumeric());
      }
      var y = new Unit(xFixed, parts[i].toString());
      ret.push(y);
      x = subtract(x, y);
    }

    // This little bit fixes a bug where the remainder should be 0 but is a little bit off.
    // But instead of comparing x, the remainder, with zero--we will compare the sum of
    // all the parts so far with the original value. If they are nearly equal,
    // we set the remainder to 0.
    var testSum = 0;
    for (var _i5 = 0; _i5 < ret.length; _i5++) {
      testSum = addScalar(testSum, ret[_i5].value);
    }
    if (equal(testSum, this.value)) {
      x.value = 0;
    }
    ret.push(x);
    return ret;
  };
  var PREFIXES = {...PREFIXES_RAW}
  PREFIXES.SHORTLONG = _extends({}, PREFIXES.SHORT, PREFIXES.LONG);
  PREFIXES.BINARY_SHORT = _extends({}, PREFIXES.BINARY_SHORT_SI, PREFIXES.BINARY_SHORT_IEC);
  PREFIXES.BINARY_LONG = _extends({}, PREFIXES.BINARY_LONG_SI, PREFIXES.BINARY_LONG_IEC);

  /* Internally, each unit is represented by a value and a dimension array. The elements of the dimensions array have the following meaning:
   * Index  Dimension
   * -----  ---------
   *   0    Length
   *   1    Mass
   *   2    Time
   *   3    Current
   *   4    Temperature
   *   5    Luminous intensity
   *   6    Amount of substance
   *   7    Angle
   *   8    Bit (digital)
   * For example, the unit "298.15 K" is a pure temperature and would have a value of 298.15 and a dimension array of [0, 0, 0, 0, 1, 0, 0, 0, 0]. The unit "1 cal / (gm °C)" can be written in terms of the 9 fundamental dimensions as [length^2] / ([time^2] * [temperature]), and would a value of (after conversion to SI) 4184.0 and a dimensions array of [2, 0, -2, 0, -1, 0, 0, 0, 0].
   *
   */

  var BASE_DIMENSIONS = ['MASS', 'LENGTH', 'TIME', 'CURRENT', 'TEMPERATURE', 'LUMINOUS_INTENSITY', 'AMOUNT_OF_SUBSTANCE', 'ANGLE', 'BIT', 'CURRENCY'];
  var BASE_UNITS = {...BASE_UNITS_RAW}
  for (var key in BASE_UNITS) {
    if (hasOwnProperty(BASE_UNITS, key)) {
      BASE_UNITS[key].key = key;
    }
  }
  var BASE_UNIT_NONE = {};
  var UNIT_NONE = {
    name: '',
    base: BASE_UNIT_NONE,
    value: 1,
    offset: 0,
    dimensions: BASE_DIMENSIONS.map(x => 0)
  };
  var UNITS = UNITS_RAW(Complex,BASE_UNITS,PREFIXES)
  // aliases (formerly plurals)
  var ALIASES = {...ALIASES_RAW}
  /**
   * Calculate the values for the angle units.
   * Value is calculated as number or BigNumber depending on the configuration
   * @param {{number: 'number' | 'BigNumber'}} config
   */
  function calculateAngleValues(config) {
    if (config.number === 'BigNumber') {
      var pi = createPi(_BigNumber);
      UNITS.rad.value = new _BigNumber(1);
      UNITS.deg.value = pi.div(180); // 2 * pi / 360
      UNITS.grad.value = pi.div(200); // 2 * pi / 400
      UNITS.cycle.value = pi.times(2); // 2 * pi
      UNITS.arcsec.value = pi.div(648000); // 2 * pi / 360 / 3600
      UNITS.arcmin.value = pi.div(10800); // 2 * pi / 360 / 60
    } else {
      // number
      UNITS.rad.value = 1;
      UNITS.deg.value = Math.PI / 180; // 2 * pi / 360
      UNITS.grad.value = Math.PI / 200; // 2 * pi / 400
      UNITS.cycle.value = Math.PI * 2; // 2 * pi
      UNITS.arcsec.value = Math.PI / 648000; // 2 * pi / 360 / 3600
      UNITS.arcmin.value = Math.PI / 10800; // 2 * pi / 360 / 60
    }

    // copy to the full names of the angles
    UNITS.radian.value = UNITS.rad.value;
    UNITS.degree.value = UNITS.deg.value;
    UNITS.gradian.value = UNITS.grad.value;
  }

  // apply the angle values now
  calculateAngleValues(config);
  if (on) {
    // recalculate the values on change of configuration
    on('config', function (curr, prev) {
      if (curr.number !== prev.number) {
        calculateAngleValues(curr);
      }
    });
  }

  /**
   * A unit system is a set of dimensionally independent base units plus a set of derived units, formed by multiplication and division of the base units, that are by convention used with the unit system.
   * A user perhaps could issue a command to select a preferred unit system, or use the default (see below).
   * Auto unit system: The default unit system is updated on the fly anytime a unit is parsed. The corresponding unit in the default unit system is updated, so that answers are given in the same units the user supplies.
   */
  var UNIT_SYSTEMS = UNIT_SYSTEMS_RAW(UNIT_NONE, UNITS, PREFIXES)
  // var UNIT_SYSTEMS = {
  //   si: {
  //     // Base units
  //     NONE: {
  //       unit: UNIT_NONE,
  //       prefix: PREFIXES.NONE['']
  //     },
  //     LENGTH: {
  //       unit: UNITS.m,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     MASS: {
  //       unit: UNITS.g,
  //       prefix: PREFIXES.SHORT.k
  //     },
  //     TIME: {
  //       unit: UNITS.s,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     CURRENT: {
  //       unit: UNITS.A,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     TEMPERATURE: {
  //       unit: UNITS.K,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     LUMINOUS_INTENSITY: {
  //       unit: UNITS.cd,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     AMOUNT_OF_SUBSTANCE: {
  //       unit: UNITS.mol,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ANGLE: {
  //       unit: UNITS.rad,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     BIT: {
  //       unit: UNITS.bits,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     // Derived units
  //     FORCE: {
  //       unit: UNITS.N,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ENERGY: {
  //       unit: UNITS.J,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     POWER: {
  //       unit: UNITS.W,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     PRESSURE: {
  //       unit: UNITS.Pa,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_CHARGE: {
  //       unit: UNITS.C,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_CAPACITANCE: {
  //       unit: UNITS.F,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_POTENTIAL: {
  //       unit: UNITS.V,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_RESISTANCE: {
  //       unit: UNITS.ohm,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_INDUCTANCE: {
  //       unit: UNITS.H,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     ELECTRIC_CONDUCTANCE: {
  //       unit: UNITS.S,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     MAGNETIC_FLUX: {
  //       unit: UNITS.Wb,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     MAGNETIC_FLUX_DENSITY: {
  //       unit: UNITS.T,
  //       prefix: PREFIXES.SHORT['']
  //     },
  //     FREQUENCY: {
  //       unit: UNITS.Hz,
  //       prefix: PREFIXES.SHORT['']
  //     }
  //   }
  // };

  // // Clone to create the other unit systems
  // UNIT_SYSTEMS.cgs = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
  // UNIT_SYSTEMS.cgs.LENGTH = {
  //   unit: UNITS.m,
  //   prefix: PREFIXES.SHORT.c
  // };
  // UNIT_SYSTEMS.cgs.MASS = {
  //   unit: UNITS.g,
  //   prefix: PREFIXES.SHORT['']
  // };
  // UNIT_SYSTEMS.cgs.FORCE = {
  //   unit: UNITS.dyn,
  //   prefix: PREFIXES.SHORT['']
  // };
  // UNIT_SYSTEMS.cgs.ENERGY = {
  //   unit: UNITS.erg,
  //   prefix: PREFIXES.NONE['']
  // };
  // // there are wholly 4 unique cgs systems for electricity and magnetism,
  // // so let's not worry about it unless somebody complains

  // UNIT_SYSTEMS.us = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
  // UNIT_SYSTEMS.us.LENGTH = {
  //   unit: UNITS.ft,
  //   prefix: PREFIXES.NONE['']
  // };
  // UNIT_SYSTEMS.us.MASS = {
  //   unit: UNITS.lbm,
  //   prefix: PREFIXES.NONE['']
  // };
  // UNIT_SYSTEMS.us.TEMPERATURE = {
  //   unit: UNITS.degF,
  //   prefix: PREFIXES.NONE['']
  // };
  // UNIT_SYSTEMS.us.FORCE = {
  //   unit: UNITS.lbf,
  //   prefix: PREFIXES.NONE['']
  // };
  // UNIT_SYSTEMS.us.ENERGY = {
  //   unit: UNITS.BTU,
  //   prefix: PREFIXES.BTU['']
  // };
  // UNIT_SYSTEMS.us.POWER = {
  //   unit: UNITS.hp,
  //   prefix: PREFIXES.NONE['']
  // };
  // UNIT_SYSTEMS.us.PRESSURE = {
  //   unit: UNITS.psi,
  //   prefix: PREFIXES.NONE['']
  // };

  // Add additional unit systems here.

  // Choose a unit system to seed the auto unit system.
  UNIT_SYSTEMS.auto = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));

  // Set the current unit system
  var currentUnitSystem = UNIT_SYSTEMS.auto;

  /**
   * Set a unit system for formatting derived units.
   * @param {string} [name] The name of the unit system.
   */
  Unit.setUnitSystem = function (name) {
    if (hasOwnProperty(UNIT_SYSTEMS, name)) {
      currentUnitSystem = UNIT_SYSTEMS[name];
    } else {
      throw new Error('Unit system ' + name + ' does not exist. Choices are: ' + Object.keys(UNIT_SYSTEMS).join(', '));
    }
  };

  /**
   * Return the current unit system.
   * @return {string} The current unit system.
   */
  Unit.getUnitSystem = function () {
    for (var _key in UNIT_SYSTEMS) {
      if (hasOwnProperty(UNIT_SYSTEMS, _key)) {
        if (UNIT_SYSTEMS[_key] === currentUnitSystem) {
          return _key;
        }
      }
    }
  };

  /**
   * Converters to convert from number to an other numeric type like BigNumber
   * or Fraction
   */
  Unit.typeConverters = {
    BigNumber: function BigNumber(x) {
      return new _BigNumber(x + ''); // stringify to prevent constructor error
    },

    Fraction: function Fraction(x) {
      return new _Fraction(x);
    },
    Complex: function Complex(x) {
      return x;
    },
    number: function number(x) {
      return x;
    }
  };

  /**
   * Retrieve the right converter function corresponding with this unit's
   * value
   *
   * @memberof Unit
   * @return {Function}
   */
  Unit.prototype._numberConverter = function () {
    var convert = Unit.typeConverters[this.valueType()];
    if (convert) {
      return convert;
    }
    throw new TypeError('Unsupported Unit value type "' + this.valueType() + '"');
  };

  /**
   * Retrieve the right convertor function corresponding with the type
   * of provided exampleValue.
   *
   * @param {string} type   A string 'number', 'BigNumber', or 'Fraction'
   *                        In case of an unknown type,
   * @return {Function}
   */
  Unit._getNumberConverter = function (type) {
    if (!Unit.typeConverters[type]) {
      throw new TypeError('Unsupported type "' + type + '"');
    }
    return Unit.typeConverters[type];
  };

  // Add dimensions to each built-in unit
  for (var _key2 in UNITS) {
    if (hasOwnProperty(UNITS, _key2)) {
      var unit = UNITS[_key2];
      unit.dimensions = unit.base.dimensions;
    }
  }

  // Create aliases
  for (var _name2 in ALIASES) {
    if (hasOwnProperty(ALIASES, _name2)) {
      var _unit2 = UNITS[ALIASES[_name2]];
      var alias = {};
      for (var _key3 in _unit2) {
        if (hasOwnProperty(_unit2, _key3)) {
          alias[_key3] = _unit2[_key3];
        }
      }
      alias.name = _name2;
      UNITS[_name2] = alias;
    }
  }

  /**
   * Checks if a character is a valid latin letter (upper or lower case).
   * Note that this function can be overridden, for example to allow support of other alphabets.
   * @param {string} c Tested character
   */
  Unit.isValidAlpha = function isValidAlpha(c) {
    return /^[a-zA-Z]$/.test(c);
  };
  function assertUnitNameIsValid(name) {
    for (var i = 0; i < name.length; i++) {
      c = name.charAt(i);
      if (i === 0 && !Unit.isValidAlpha(c)) {
        throw new Error('Invalid unit name (must begin with alpha character): "' + name + '"');
      }
      if (i > 0 && !(Unit.isValidAlpha(c) || isDigit(c))) {
        throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + name + '"');
      }
    }
  }

  /**
   * Wrapper around createUnitSingle.
   * Example:
   *  createUnit({
   *    foo: { },
   *    bar: {
   *      definition: 'kg/foo',
   *      aliases: ['ba', 'barr', 'bars'],
   *      offset: 200
   *    },
   *    baz: '4 bar'
   *  },
   *  {
   *    override: true
   *  })
   * @param {object} obj      Object map. Each key becomes a unit which is defined by its value.
   * @param {object} options
   */
  Unit.createUnit = function (obj, options) {
    if (typeof obj !== 'object') {
      throw new TypeError("createUnit expects first parameter to be of type 'Object'");
    }

    // Remove all units and aliases we are overriding
    if (options && options.override) {
      for (var _key4 in obj) {
        if (hasOwnProperty(obj, _key4)) {
          Unit.deleteUnit(_key4);
        }
        if (obj[_key4].aliases) {
          for (var i = 0; i < obj[_key4].aliases.length; i++) {
            Unit.deleteUnit(obj[_key4].aliases[i]);
          }
        }
      }
    }

    // TODO: traverse multiple times until all units have been added
    var lastUnit;
    for (var _key5 in obj) {
      if (hasOwnProperty(obj, _key5)) {
        lastUnit = Unit.createUnitSingle(_key5, obj[_key5]);
      }
    }
    return lastUnit;
  };

  /**
   * Create a user-defined unit and register it with the Unit type.
   * Example:
   *  createUnitSingle('knot', '0.514444444 m/s')
   *  createUnitSingle('acre', new Unit(43560, 'ft^2'))
   *
   * @param {string} name      The name of the new unit. Must be unique. Example: 'knot'
   * @param {string, Unit, Object} definition      Definition of the unit in terms
   * of existing units. For example, '0.514444444 m / s'. Can be a Unit, a string,
   * or an Object. If an Object, may have the following properties:
   *   - definition {string|Unit} The definition of this unit.
   *   - prefixes {string} "none", "short", "long", "binary_short", or "binary_long".
   *     The default is "none".
   *   - aliases {Array} Array of strings. Example: ['knots', 'kt', 'kts']
   *   - offset {Numeric} An offset to apply when converting from the unit. For
   *     example, the offset for celsius is 273.15 and the offset for farhenheit
   *     is 459.67. Default is 0.
   *   - baseName {string} If the unit's dimension does not match that of any other
   *     base unit, the name of the newly create base unit. Otherwise, this property
   *     has no effect.
   *
   * @return {Unit}
   */
  Unit.createUnitSingle = function (name, obj) {
    if (typeof obj === 'undefined' || obj === null) {
      obj = {};
    }
    if (typeof name !== 'string') {
      throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
    }

    // Check collisions with existing units
    if (hasOwnProperty(UNITS, name)) {
      throw new Error('Cannot create unit "' + name + '": a unit with that name already exists');
    }

    // TODO: Validate name for collisions with other built-in functions (like abs or cos, for example), and for acceptable variable names. For example, '42' is probably not a valid unit. Nor is '%', since it is also an operator.

    assertUnitNameIsValid(name);
    var defUnit = null; // The Unit from which the new unit will be created.
    var aliases = [];
    var offset = 0;
    var definition;
    var prefixes;
    var baseName;
    if (obj && obj.type === 'Unit') {
      defUnit = obj.clone();
    } else if (typeof obj === 'string') {
      if (obj !== '') {
        definition = obj;
      }
    } else if (typeof obj === 'object') {
      definition = obj.definition;
      prefixes = obj.prefixes;
      offset = obj.offset;
      baseName = obj.baseName;
      if (obj.aliases) {
        aliases = obj.aliases.valueOf(); // aliases could be a Matrix, so convert to Array
      }
    } else {
      throw new TypeError('Cannot create unit "' + name + '" from "' + obj.toString() + '": expecting "string" or "Unit" or "Object"');
    }
    if (aliases) {
      for (var i = 0; i < aliases.length; i++) {
        if (hasOwnProperty(UNITS, aliases[i])) {
          throw new Error('Cannot create alias "' + aliases[i] + '": a unit with that name already exists');
        }
      }
    }
    if (definition && typeof definition === 'string' && !defUnit) {
      try {
        defUnit = Unit.parse(definition, {
          allowNoUnits: true
        });
      } catch (ex) {
        ex.message = 'Could not create unit "' + name + '" from "' + definition + '": ' + ex.message;
        throw ex;
      }
    } else if (definition && definition.type === 'Unit') {
      defUnit = definition.clone();
    }
    aliases = aliases || [];
    offset = offset || 0;
    if (prefixes && prefixes.toUpperCase) {
      prefixes = PREFIXES[prefixes.toUpperCase()] || PREFIXES.NONE;
    } else {
      prefixes = PREFIXES.NONE;
    }

    // If defUnit is null, it is because the user did not
    // specify a defintion. So create a new base dimension.
    var newUnit = {};
    if (!defUnit) {
      // Add a new base dimension
      baseName = baseName || name + '_STUFF'; // foo --> foo_STUFF, or the essence of foo
      if (BASE_DIMENSIONS.indexOf(baseName) >= 0) {
        throw new Error('Cannot create new base unit "' + name + '": a base unit with that name already exists (and cannot be overridden)');
      }
      BASE_DIMENSIONS.push(baseName);

      // Push 0 onto existing base units
      for (var b in BASE_UNITS) {
        if (hasOwnProperty(BASE_UNITS, b)) {
          BASE_UNITS[b].dimensions[BASE_DIMENSIONS.length - 1] = 0;
        }
      }

      // Add the new base unit
      var newBaseUnit = {
        dimensions: []
      };
      for (var _i6 = 0; _i6 < BASE_DIMENSIONS.length; _i6++) {
        newBaseUnit.dimensions[_i6] = 0;
      }
      newBaseUnit.dimensions[BASE_DIMENSIONS.length - 1] = 1;
      newBaseUnit.key = baseName;
      BASE_UNITS[baseName] = newBaseUnit;
      newUnit = {
        name,
        value: 1,
        dimensions: BASE_UNITS[baseName].dimensions.slice(0),
        prefixes,
        offset,
        base: BASE_UNITS[baseName]
      };
      currentUnitSystem[baseName] = {
        unit: newUnit,
        prefix: PREFIXES.NONE['']
      };
    } else {
      newUnit = {
        name,
        value: defUnit.value,
        dimensions: defUnit.dimensions.slice(0),
        prefixes,
        offset
      };

      // Create a new base if no matching base exists
      var anyMatch = false;
      for (var _i7 in BASE_UNITS) {
        if (hasOwnProperty(BASE_UNITS, _i7)) {
          var match = true;
          for (var j = 0; j < BASE_DIMENSIONS.length; j++) {
            if (Math.abs((newUnit.dimensions[j] || 0) - (BASE_UNITS[_i7].dimensions[j] || 0)) > 1e-12) {
              match = false;
              break;
            }
          }
          if (match) {
            anyMatch = true;
            newUnit.base = BASE_UNITS[_i7];
            break;
          }
        }
      }
      if (!anyMatch) {
        baseName = baseName || name + '_STUFF'; // foo --> foo_STUFF, or the essence of foo
        // Add the new base unit
        var _newBaseUnit = {
          dimensions: defUnit.dimensions.slice(0)
        };
        _newBaseUnit.key = baseName;
        BASE_UNITS[baseName] = _newBaseUnit;
        currentUnitSystem[baseName] = {
          unit: newUnit,
          prefix: PREFIXES.NONE['']
        };
        newUnit.base = BASE_UNITS[baseName];
      }
    }
    Unit.UNITS[name] = newUnit;
    for (var _i8 = 0; _i8 < aliases.length; _i8++) {
      var aliasName = aliases[_i8];
      var _alias = {};
      for (var _key6 in newUnit) {
        if (hasOwnProperty(newUnit, _key6)) {
          _alias[_key6] = newUnit[_key6];
        }
      }
      _alias.name = aliasName;
      Unit.UNITS[aliasName] = _alias;
    }
    // delete the memoization cache, since adding a new unit to the array
    // invalidates all old results
    delete _findUnit.cache;
    return new Unit(null, name);
  };
  Unit.deleteUnit = function (name) {
    delete Unit.UNITS[name];
  };

  // expose arrays with prefixes, dimensions, units, systems
  Unit.PREFIXES = PREFIXES;
  Unit.BASE_DIMENSIONS = BASE_DIMENSIONS;
  Unit.BASE_UNITS = BASE_UNITS;
  Unit.UNIT_SYSTEMS = UNIT_SYSTEMS;
  Unit.UNITS = UNITS;
  return Unit;
}, {
  isClass: true
});
