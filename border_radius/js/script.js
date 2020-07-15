'use strict'

let div = document.getElementById('div');

let inpRang = document.querySelectorAll('.rang')
let inp = document.querySelectorAll('.inp1')

let genRang = document.querySelector('.gen-rang')
let genInp = document.querySelector('.gen-inp')


//Ընդհանուր հատկությունները բոլորի համար
genRang.addEventListener('input', func1)

function func1(){
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

   console.log(+inpRang[0].value)
}
func()