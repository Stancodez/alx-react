import { is } from 'immutable';

/**
 * Compares two Immutable.js Maps for equality
 * @param {Map} map1 - The first Immutable Map
 * @param {Map} map2 - The second Immutable Map
 * @returns {boolean} - Returns true if the two Maps are equal, false otherwise
 */
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

