/**
 * @description
 * Takes an Array<V>, and a grouping function,
 * and returns a Map of the array grouped by the grouping function.
 *
 * @param list An array of type V.
 * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
 *                  K is generally intended to be a property key of V.
 *
 * @returns Map of the array grouped by the grouping function.
 */
export function groupBy(list, keyGetter) {
  const map = new Map();
  list?.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

// // example usage

// const pets = [
//   { type: 'Dog', name: 'Spot' },
//   { type: 'Cat', name: 'Tiger' },
//   { type: 'Dog', name: 'Rover' },
//   { type: 'Cat', name: 'Leo' },
// ];

// const grouped = groupBy(pets, (pet) => pet.type);

// console.log(grouped.get('Dog')); // -> [{type:"Dog", name:"Spot"}, {type:"Dog", name:"Rover"}]
// console.log(grouped.get('Cat')); // -> [{type:"Cat", name:"Tiger"}, {type:"Cat", name:"Leo"}]

// const odd = Symbol();
// const even = Symbol();
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const oddEven = groupBy(numbers, (x) => (x % 2 === 1 ? odd : even));

// console.log(oddEven.get(odd)); // -> [1,3,5,7]
// console.log(oddEven.get(even)); // -> [2,4,6]
