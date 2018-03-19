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

//03.18.18
//https://www.codewars.com/kata/57814d79a56c88e3e0000786
//Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.



function encrypt(text, n) {
  if (!text || !n || n<=0) { return text };
  const reducer = (accumulator, letter) => accumulator + letter;
  if (text) { text = text.split('')} else {return text};
  let i = -1;
  while((i+=1) < n ){
    let newText = "";
    let j = -1;
    while((j+=2) < text.length){
      newText += text.splice(j, 1, '');
    }
    text = text.reduce(reducer);
    newText += text;
    text = newText.split('');
  }
  return text.join('');
}



function decrypt(encryptedText, n) {
  if (!encryptedText || !n || n<=0) { return encryptedText }
  
  const decryptr = (cipherText) => {
    let odds = cipherText.slice(0, (cipherText.length/2));
    let evens = cipherText.slice((cipherText.length/2));
    let out = '';
    
    for (let i = 0; i < cipherText.length; i++){
      if (i % 2){
        out += odds[0];
        odds = odds.slice(1);
      } else {
        out += evens[0];
        evens = evens.slice(1);
      }
    }
    return out;
  }
  
  for(let i = 0;i<n;i++) {
    encryptedText = decryptr(encryptedText);
  }
  
  return encryptedText;
}
