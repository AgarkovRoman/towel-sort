// You should implement your task here.
module.exports = function towelSort(matrix) {
    let mainArr = [];
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i] = matrix[i].reverse();
        } else if (matrix[i] == 0) {
            matrix[i] = matrix[i];
        }
        for (let k = 0; k < matrix[i].length; k++) {
            mainArr.push(matrix[i][k]);
        }
    }
    return mainArr;
}
