'use strict'

// for details page show bigimage

// let mainImage=document.getElementById('mainImage');
// let smallImage=document.getElementsByClassName('smallImage');
// smallImage[0].onclick=function(){
//     mainImage.src= smallImage[0].src;
// }
// smallImage[1].onclick=function(){
//     mainImage.src= smallImage[1].src;
// }

// smallImage[2].onclick=function(){
//     mainImage.src=smallImage[2].src;
// }
// smallImage[3].onclick=function(){
//     mainImage.src=smallImage[3].src;
// }


// Show navber menu=============== =======================================================//




const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.querySelector(".navber")
if(bar){
bar.addEventListener('click', ()=>{
nav.classList.add('active');
})
}


// close navber

if(close){
    close.addEventListener('click', ()=>{
    nav.classList.remove('active');
    })
    }




