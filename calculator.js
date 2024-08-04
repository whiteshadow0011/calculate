let n1 = document.querySelector(".num1");
let n2 = document.querySelector(".num2");
let n3 = document.querySelector(".num3");
let n4 = document.querySelector(".num4");
let n5 = document.querySelector(".num5");
let n6 = document.querySelector(".num6");
let n7 = document.querySelector(".num7");
let n8 = document.querySelector(".num8");
let n9 = document.querySelector(".num9");
let n0 = document.querySelector(".num0");
let P = document.querySelector(".plus");
let Mi = document.querySelector(".minus");
let M = document.querySelector(".multiply");
let D = document.querySelector(".divide");
let Do = document.querySelector(".dot");
let dele = document.querySelector(".del");
let reset = document.querySelector(".reset")
let equalto = document.querySelector(".equal")

let one = document.querySelector(".current-operand");

let two = document.querySelector(".previous-operand");

// this is for conersion of one to an array
// let one = 12345
// let onestr= one.toString()
// let onechar= onestr.split('')
// let a= onechar.map(Number)

// OROROROR

// const a = Array.from(String(one), Number);

// console.log(a)


n1.addEventListener('click', () => {
  onclick(1)
})
n2.addEventListener('click', () => {
  onclick(2)
})
n3.addEventListener('click', () => {
  onclick(3)
})
n4.addEventListener('click', () => {
  onclick(4)
})
n5.addEventListener('click', () => {
  onclick(5)
})
n6.addEventListener('click', () => {
  onclick(6)
})
n7.addEventListener('click', () => {
  onclick(7)
})
n8.addEventListener('click', () => {
  onclick(8)
})
n9.addEventListener('click', () => {
  onclick(9)
})
n0.addEventListener('click', () => {
  onclick(0);
})
P.addEventListener('click', () => {
  onclick("+")
})
Mi.addEventListener('click', () => {
  onclick("-")
})
D.addEventListener('click', () => {
  onclick("/")
})
Do.addEventListener('click', () => {
  onclick(".")
})
M.addEventListener('click', () => {
  onclick("*")
})

dele.addEventListener('click', () => {
  let onedisplay = one.innerText;

  onedisplay = onedisplay.slice(0, -1)

  one.innerText = onedisplay
  console.log(onedisplay)
})

reset.addEventListener('click', () => {
  let onedisplay = one.innerText

  onedisplay = onedisplay.slice(0, one.length - 1)

  one.innerText = onedisplay
  console.log(onedisplay)
})

equalto.addEventListener('click', () => {
  let x=calculate(one.innerText)
  two.innerText= x
})
  

function onclick(n) {
  one.innerText += n
  console.log(one.innerText)
}

function calculate(expression) {
  try {
    result = eval(expression)
    console.log(result)
    return result
  } catch (error) {
    return 'Error'
  }
}

function Message2(){
  return console.log("new message2 was added")
}