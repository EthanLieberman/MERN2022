const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

// obj1.__proto__ = obj2;

function entries(obj) {
    let arr = []

    for (somekey in obj) {
        // console.log(somekey, obj[somekey])
        arr.push([somekey,obj[somekey]])
    }
    return arr
}

console.log(entries(obj1));