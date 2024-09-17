import { List } from 'immutable';

/**
 * Converts an array into an immutable List
 * @param {Array} array - The array to be converted to an immutable List
 * @returns {List} - An immutable List created from the array
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Appends an element to an immutable List and returns the updated List
 * @param {List} list - The immutable List to append the element to
 * @param {string} element - The element to add to the List
 * @returns {List} - The updated List with the new element added
 */
export function addElementToList(list, element) {
  return list.push(element);
}

