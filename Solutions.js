// 03.13.2018
// https://www.codewars.com/kata/554ca54ffa7d91b236000023
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering

function deleteNth(arr,n){
  let outIndx = [];
  arr.forEach(function(elema, indxa){
    let c = 0
    arr.forEach(function(elemb, indxb){
      if (elema === elemb){
        c++
        if(c > n && !outIndx.includes(indxb)){
          outIndx.push(indxb)
        }
      }
    })
  })
  outIndx = outIndx.sort((a, b) => (b - a));  
  for(let i of outIndx){
    arr.splice(i, 1);
  }
  return arr
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
