// 0-fromjs.js
const { fromJS } = require('immutable');

/**
 * Converts a given object into an immutable Map using fromJS of the Immutable.js library.
 * @param {Object} object - The object to be converted into an immutable Map.
 * @returns {Map} - An immutable Map created from the provided object.
 */
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = { getImmutableObject };

