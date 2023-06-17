const findMaxEdge = (side1, side2) => {
    let maxThirdEdge = (side1 + side2) -1;
    return maxThirdEdge;  
}
const myMaxFind = findMaxEdge(8,10);
console.log(myMaxFind);