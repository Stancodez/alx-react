import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into a single immutable List
 * @param {Array} page1 - The first array
 * @param {Array} page2 - The second array
 * @returns {List} - An immutable List containing the concatenated values of the two pages
 */
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merges two objects and returns the values as an immutable List
 * @param {Object} page1 - The first object
 * @param {Object} page2 - The second object
 * @returns {List} - An immutable List containing the merged values of the two pages
 */
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  
  // Merge map1 and map2, page2 values overwrite page1 in case of conflict
  const mergedMap = map1.merge(map2);

  // Return the values of the merged map as an immutable List
  return List(mergedMap.valueSeq());
}

