const { Map } = require('immutable');

/**
 * Converts a given object into an immutable Map using Map of the Immutable.js library.
 * @param {Object} object - The object to be converted into an immutable Map.
 * @returns {Map} - An immutable Map created from the provided object.
 */
function getImmutableObject(object) {
  return Map(object);
}

module.exports = { getImmutableObject };

