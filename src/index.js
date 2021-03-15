module.exports = function towelSort (matrix) {
  if (!matrix || matrix.lenght === 0){
    return [];
  }
  let arr=[];
  
  for(let i = 0; i < matrix.lenght; i++){
    if((i + 1) % 2 ===0){
      matrix[i] = matrix[i].reverse();
    }
    arr = arr.concat(matrix[i]);
  }
  return arr;
  
}
