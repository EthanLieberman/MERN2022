const array = [3, 5, 7, 8, 7, 4, 3, 2,]
const arr2 = ['a', 'bd', 'ba', 'dd', 'ad']

const arr3 = [
    {
        name: "jerry"
    },
    {
        name: "ben"
    },
    {
        name: "jack"
    }
]
// sort by key
console.log(arr3.sort((a, b) => {
    let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

    if (fa < fb){
        return -1;
    }
    if (fa > fb){
        return 1
    }
    return 0
}));