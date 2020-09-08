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

let bordColor = document.querySelector('.bord-color')
let backColor = document.querySelector('.back-color')

let result = document.querySelector('.result')
let btn = document.querySelector('.result > .button')

let pBorderStyle = document.querySelector('.p-border-style')
let pBorderWidth = document.querySelector('.p-border-width')
let pBorderColor = document.querySelector('.p-border-color')
let pBorderRadius = document.querySelector('.p-border-radius')
let pBackgroundColor = document.querySelector('.p-background-color')


bordColor.addEventListener('input', funcBordColor)
backColor.addEventListener('input', funcBackColor)


//փոխում է border-ի գույնը
funcBordColor()
function funcBordColor() {
   div.style.borderColor = bordColor.value;
   pBorderColor.innerHTML = bordColor.value + ';'
}
//փոխում է background-ի գույնը
backColor.value = '#247a64'
funcBackColor()
function funcBackColor() {
   div.style.backgroundColor = backColor.value;
   pBackgroundColor.innerHTML = backColor.value + ';'
}

//border-ի կողմերը փոխվելու ժամանակ կանչվում է նշված ֆունկցիան
for (let i = 0; i < borderPosition.length; i++) {
   borderPosition[i].onchange = function () {
      funcBorder()
   }
}

//border-ի ոճը փոխվելու ժամանակ կանչվում է նշված ֆունկցիան
for (let i = 0; i < borderStyle.length; i++) {
   borderStyle[i].onchange = function () {
      funcBorder()
   }
}


borderRang.addEventListener('input', funcBorder)

funcBorder()

function funcBorder() {
   borderInp.value = borderRang.value
   if (borderPosition1.value == 'All') {
      div.style.borderWidth = borderRang.value + 'px';
      pBorderWidth.innerHTML = borderRang.value + 'px ' + borderRang.value + 'px ' + borderRang.value + 'px ' + borderRang.value + 'px' + ';'
   } else if (borderPosition1.value == 'Left') {
      div.style.borderLeftWidth = borderRang.value + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = 0 + 'px';
      pBorderWidth.innerHTML = 0 + 'px ' + 0 + 'px ' + 0 + 'px ' +  borderRang.value + 'px' + ';'
   } else if (borderPosition1.value == 'Right') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = borderRang.value + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = 0 + 'px';
      pBorderWidth.innerHTML = 0 + 'px ' + borderRang.value + 'px ' + 0 + 'px ' + 0 + 'px' + ';'
   } else if (borderPosition1.value == 'Bottom') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = borderRang.value + 'px';
      div.style.borderTopWidth = 0 + 'px';
      pBorderWidth.innerHTML = 0 + 'px ' + 0 + 'px ' + borderRang.value + 'px ' + 0 + 'px' + ';'
   } else if (borderPosition1.value == 'Top') {
      div.style.borderLeftWidth = 0 + 'px';
      div.style.borderRightWidth = 0 + 'px';
      div.style.borderBottomWidth = 0 + 'px';
      div.style.borderTopWidth = borderRang.value + 'px';
      pBorderWidth.innerHTML = borderRang.value  + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px' + ';'
   }

  

   if (borderStyle1.value == 'solid') {
      pBorderStyle.innerHTML = 'solid' + ';'
      div.style.borderStyle = 'solid'
   } else if (borderStyle1.value == 'dashed') {
      pBorderStyle.innerHTML = 'dashed' + ';'
      div.style.borderStyle = 'dashed'
   } else if (borderStyle1.value == 'dotted') {
      pBorderStyle.innerHTML = 'dotted' + ';'
      div.style.borderStyle = 'dotted'
   } else if (borderStyle1.value == 'inset') {
      pBorderStyle.innerHTML = 'inset' + ';'
      div.style.borderStyle = 'inset'
   } else if (borderStyle1.value == 'outset') {
      pBorderStyle.innerHTML = 'outset' + ';'
      div.style.borderStyle = 'outset'
   } else if (borderStyle1.value == 'groove') {
      pBorderStyle.innerHTML = 'groove' + ';'
      div.style.borderStyle = 'groove'
   } else if (borderStyle1.value == 'ridge') {
      pBorderStyle.innerHTML = 'ridge' + ';'
      div.style.borderStyle = 'ridge'
   } else if (borderStyle1.value == 'hidden') {
      pBorderStyle.innerHTML = 'hidden' + ';'
      div.style.borderStyle = 'hidden'
   } else if (borderStyle1.value == 'none') {
      pBorderStyle.innerHTML = 'none' + ';'
      div.style.borderStyle = 'none'
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
   pBorderRadius.innerHTML = 2 * +inpRang[0].value + 'px' + ' ' + 2 * +inpRang[1].value + 'px' + ' ' + 2 * +inpRang[3].value + 'px' + ' ' + 2 * +inpRang[2].value + 'px' + ';'
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
   pBorderRadius.innerHTML = 2 * +inpRang[0].value + 'px' + ' ' + 2 * +inpRang[1].value + 'px' + ' ' + 2 * +inpRang[3].value + 'px' + ' ' + 2 * +inpRang[2].value + 'px' + ';'
}
func()


btn.addEventListener('click', funcButton)
function funcButton(e){
   e.preventDefault()
   console.log(10)
}