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
//03.17.18
//http://www.codewars.com/kata/5503013e34137eeeaa001648
//You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters.

function diamond(n){
  if((n < 1) || (n%2 === 0) ){
    return null;
  } else {
    let diam = "";
    for(let i = 1; i < n; i+=2){
      diam += (" ".repeat(((n-i)/2)) + "*".repeat((i)) + "\n");
    }
    for(let i = n; i > 0; i-=2){
      diam += (" ".repeat((n-i)/2) + "*".repeat(i) + "\n");
    }
    return diam;
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
