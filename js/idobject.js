var color1 = document.getElementById('clr1');
var color2 = document.getElementById('clr2');
var color3 = document.getElementById('clr3');
var color4 = document.getElementById('clr4');
 let bdy = document.querySelector('body');
 color1.addEventListener('click', () => {
  bdy.style.backgroundColor ='yellow'
  console.log(color1)
 })
 color2.addEventListener('click', () => {
    bdy.style.backgroundColor ='green'
    console.log(color1)
   })
   color3.addEventListener('click', () => {
    bdy.style.backgroundColor ='red'
    console.log(color1)
   })
   color4.addEventListener('click', () => {
    bdy.style.backgroundColor ='pink'
    console.log(color1)
   })

