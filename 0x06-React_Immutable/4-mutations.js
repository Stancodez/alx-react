import { Map } from 'immutable';

// Create an Immutable Map from the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

// Create a second map based on the first one, with modified values
export const map2 = map
  .set(2, 'Benjamin')  // Modify value at index 2 to 'Benjamin'
  .set(4, 'Oliver');   // Modify value at index 4 to 'Oliver'

