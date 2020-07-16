'use strict'

let div = document.getElementById('div');

let inpRang = document.querySelectorAll('.rang')
let inp = document.querySelectorAll('.inp1')

let genRang = document.querySelector('.gen-rang')
let genInp = document.querySelector('.gen-inp')


let borderInp = document.querySelector('.border-inp')
let borderRang = document.querySelector('.border-rang')

let borderPosition = document.querySelectorAll('.border-position-select')
let borderPosition1 = document.querySelector('.border-position-select')
let borderStyle = document.querySelectorAll('.border-style-select')
let borderStyle1 = document.querySelector('.border-style-select')
// console.log(borderPosition)
for (let i = 0; i < borderPosition.length; i++) {
   borderPosition[i].onchange = function () {
      funcBorder()
   }
}
for (let i = 0; i < borderStyle.length; i++) {
   borderStyle[i].onchange = function () {
      funcBorder()
   }
}


borderRang.addEventListener('input', funcBorder)

funcBorder()

function funcBorder() {
   borderInp.value = borderRang.value
   console.log(borderPosition1.value)
   if (borderPosition1.value == 'All') {
      div.style.borderWidth = borderRang.value + 'px';
   }
   if (borderPosition1.value == 'Left') {
      div.style.borderLeftWidth = borderRang.value + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = 0 + 'px';
   }
   if (borderPosition1.value == 'Right') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = borderRang.value + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = 0 + 'px';
   }
   if (borderPosition1.value == 'Bottom') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = borderRang.value + 'px';
      div.style.borderTopWidth = 0 + 'px';
   }
   if (borderPosition1.value == 'Top') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = borderRang.value + 'px';
   }

}


//Ընդհանուր հատկությունները բոլորի համար
genRang.addEventListener('input', func1)

function func1() {
   for (let i = 0; i < inpRang.length; i++) {
      inp[i].value = genRang.value
   }
   for (let i = 0; i < inpRang.length; i++) {
      inpRang[i].value = genRang.value
   }
   genInp.value = genRang.value

   div.style.borderRadius = 2 * +inpRang[0].value + 'px' + ' ' + 2 * +inpRang[1].value + 'px' + ' ' + 2 * +inpRang[3].value + 'px' + ' ' + 2 * +inpRang[2].value + 'px';
}
func1()

//Հատկությունները յուրաքանչյուր կողմի համար
for (let i = 0; i < inpRang.length; i++) {
   inpRang[i].addEventListener('input', func)
}

function func() {
   for (let i = 0; i < inpRang.length; i++) {
      inp[i].value = inpRang[i].value
   }
   div.style.borderRadius = 2 * +inpRang[0].value + 'px' + ' ' + 2 * +inpRang[1].value + 'px' + ' ' + 2 * +inpRang[3].value + 'px' + ' ' + 2 * +inpRang[2].value + 'px';
}
func()