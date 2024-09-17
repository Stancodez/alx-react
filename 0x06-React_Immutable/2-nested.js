import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the object to an immutable structure using fromJS
  const immutableObject = fromJS(object);
  
  // Use getIn to access the value at the defined path (array)
  return immutableObject.getIn(array, undefined);
}

