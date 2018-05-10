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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//03.20.18
//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
//this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).


function isPrime(x) {
	if (x === 2) return true; // as @Graipher commented
	if (x % 2 !== 0) {
		for (var i = 2; i <= x / 2; i++) {
			if (x % i === 0) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function gap(g, m, n) {
	var lastPrime = null; // cache-value
	for (var i = m; i < n; i++) {
		if (isPrime(i)) {
			if (lastPrime === null) {
				lastPrime = i;
			} else if (i - lastPrime === g) {
				return [lastPrime, i];
			} else {
				lastPrime = i;
			}
		}
	}
	return null; 
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//03.21.18
//https://www.codewars.com/kata/directions-reduction/train/javascript/5ab200ca8d28f685c300009f
//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr){
  arr.forEach((elem, i) => {
   let n = arr.slice(i, i+2);
   if((n[0]==='NORTH' && n[1]==='SOUTH') || (n[0]==='SOUTH' && n[1]==='NORTH') || (n[0]==="EAST" && n[1]==="WEST") || (n[0]==="WEST" && n[1]==="EAST")){
     arr.splice(i, 2);
     dirReduc(arr);
   } else if (n[1] === 'undefined'){
     return arr;
   }
 });
 return arr;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//03.22.18
//https://github.com/cwbriones/interview-practice/tree/master/fountains
//Output: An array of flooded areas, where 1 means it is flooded and 0 means it is dry.

function Fountain(area, fountains){
  if (area.length !== fountains.length) {return 'bollocks'}
  let f = fountains.indexOf(1), flooded = [];
  flooded[f] = 1;
  for(let i = 0; i < area.length; i++){
    if (area[f+i] <= area[f] && flooded[f+i-1]) {flooded[f+i] = 1}
    if (area[f-i] <= area[f] && flooded[f-i+1]) {flooded[f-i] = 1}
    if (flooded[i] === undefined){ flooded[i] = 0}
  }
  return flooded;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//03.27.18
//https://www.codewars.com/kata/primes-in-numbers/javascript
//Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

const primeFactors = (n) => {
  let primes = {};
  let output = '';
  for(let i = 2; i <= n;i++){
    if(n%i === 0){
      isNaN(primes[i]) ? primes[i] = 1: primes[i]++;
      n = n/i;
      i = 1;
    }
  }
  for(let p in primes){
    if(primes[p] === 1){
      output = output + `(${p})`;
    } else {
      output = output + `(${p}**${primes[p]})`;
    }
  }
  return output;
};

//03.28.18
//https://www.codewars.com/kata/550498447451fbbd7600041c
//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.



function comp(array1, array2){
  let isSquare = true;
  if (!array1 || !array2) return false;
  array1.forEach((elem, indx) => {
    let square = elem * elem;
    if(!array2.includes(square)) {
      isSquare = false;
    }
    array1 = array1.slice(1)
    array2.splice(array2.indexOf(square), 1)
  });
  return isSquare;
}

//04.06.18
//https://www.codewars.com/kata/514b92a657cdc65150000006
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.



function solution(number){
  if (number < 2) return 0;
  const reducer = (accumulator, currValue) => accumulator + currValue;
  let arr = new Array(number).fill(0);
  for(i = 0; i < number; i++){
   if(i%3 === 0 || i%5 === 0) arr[i] = i;
  }
  return arr.reduce(reducer);
}


//05.09.18
//https://www.codewars.com/kata/unique-in-order/train/javascript
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder= (iterable) => {
  let activeIndex = 0;
  let output = [iterable[activeIndex]];
  for(let i = 1; i < iterable.length; i++){
    if(iterable[activeIndex] !== iterable[i]){
      output.push(iterable[i]);
      activeIndex = i;
    }
  }
  return iterable.length === 0 ?  [] : output;
} 

