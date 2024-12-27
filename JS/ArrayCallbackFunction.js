const a = [4, 1 ,3, -2 ,7 , 8 , -8, 6];

const firstNeg = (num) => {
    return num < 0;
};

// const result = a.find(firstNeg);
const result = a.findIndex(firstNeg);

console.log(result);

a.forEach((num) => {
    console.log("array num", num)
});

// Map(), filter(), every(), same()    ---try this yourself