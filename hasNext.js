const CULLARR = [2, [4, [6]]];

function hasNext(array){
    return array.reduce((total, currentValue) => {
        return Array.isArray(currentValue) ? [...total, ...hasNext(currentValue)] : [...total, currentValue];
    },[]);
}


console.log(hasNext(CULLARR)); // [ 2, 4, 6 ]


// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-


function steamrollArray(arr) {
  while (arr.some(element => Array.isArray(element))) {
    arr = arr.flat();
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]); // [ 1, 2, 3, 4 ]
