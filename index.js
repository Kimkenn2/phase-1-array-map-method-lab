const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function makeCap (sentence) {
 let arr = sentence.split(` `)
 return arr.map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(` `)
}

const titleCased = () => {
//  return tutorials.map(element => makeCap(element))

 return tutorials.map(makeCap)
}

// .forEach(element => console.log(element));
// = string.split(` `)
// arr[3].charAt(0).toUpperCase() + arr[3].slice(1)
// arr.forEach(element => console.log(element.charAt(0).toUpperCase() + element.slice(1)))