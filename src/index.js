
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const arr=[]
    if(!matrix)return[];
    for (let i = 0; i < matrix.length; i++) {
        if (i===0 || i%2===0) {
            for (let k = 0; k < matrix[i].length; k++) {
                arr.push(matrix[i][k]);
            }
        }
        else {
            for (let k = matrix[i].length-1; k >= 0; k--) {
                arr.push(matrix[i][k]);
            }
        }
        
    }
  return arr;
}
