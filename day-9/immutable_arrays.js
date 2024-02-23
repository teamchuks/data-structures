const names = ["Ola", "Tony", "Fred", "James"];
const numbers = [1,2,3,4,5];


const random = [...names, "AA", "BB", "CC", ...numbers];
console.log(random);

// creating a function with it
const newNames = () => {
    let result = [...names, "AA", "BB", "CC", ...numbers];
    console.log(result)
}
newNames()
