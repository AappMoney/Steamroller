const CULLARR = [2, [4, [6]]];

function hasNext(array){
    return array.reduce((total, currentValue) => {
        return Array.isArray(currentValue) ? [...total, ...hasNext(currentValue)] : [...total, currentValue];
    },[]);
}


console.log(hasNext(CULLARR)); // [ 2, 4, 6 ]
