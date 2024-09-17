import { Map, List } from 'immutable';

/**
 * Merges two objects deeply and returns the values as an immutable List
 * @param {Object} page1 - The first object
 * @param {Object} page2 - The second object
 * @returns {List} - An immutable List containing the deeply merged values of the two pages
 */
export function mergeDeeplyElements(page1, page2) {
  // Convert both page1 and page2 to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);
  
  // Deeply merge map1 and map2
  const mergedMap = map1.mergeDeep(map2);

  // Return the values of the deeply merged map as a List
  return List(mergedMap.valueSeq());
}

