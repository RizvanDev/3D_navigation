"use strict"

let burger = document.getElementById('burger');
let container = document.getElementById('cont');


let content1 = document.querySelector('.one');
let content2 = document.querySelector('.two');
let content3 = document.querySelector('.three');
let content4 = document.querySelector('.four');


let home = document.getElementById('1');
let about = document.getElementById('2');
let portfolio = document.getElementById('3');
let contact = document.getElementById('4');


burger.addEventListener('click', function () {

   container.classList.toggle('open');

   content1.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '1';
      content2.style.order = '2';
      content3.style.order = '3';
      content4.style.order = '4';
   };
   home.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '1';
      content2.style.order = '2';
      content3.style.order = '3';
      content4.style.order = '4';
   };

   content2.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '1';
      content3.style.order = '3';
      content4.style.order = '4';
   };
   about.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '1';
      content3.style.order = '3';
      content4.style.order = '4';
   };

   content3.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '3';
      content3.style.order = '1';
      content4.style.order = '4';
   };
   portfolio.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '3';
      content3.style.order = '1';
      content4.style.order = '4';
   };

   content4.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '3';
      content3.style.order = '4';
      content4.style.order = '1';
   };
   contact.onclick = function () {
      container.classList.remove('open');
      content1.style.order = '2';
      content2.style.order = '3';
      content3.style.order = '4';
      content4.style.order = '1';
   };


   content1.addEventListener('mouseover', () => {
      home.style.color = 'rgb(197, 47, 47)';
      content1.style.boxShadow = '0 0 5px 4px lightgreen';
   });
   content1.addEventListener('mouseout', () => {
      home.style.color = '#fff';
      content1.style.boxShadow = '0 0 25px 2px #fff1';
   });
   content2.addEventListener('mouseover', () => {
      about.style.color = 'rgb(197, 47, 47)';
      content2.style.boxShadow = '0 0 5px 4px lightgreen';
   });
   content2.addEventListener('mouseout', () => {
      about.style.color = '#fff';
      content2.style.boxShadow = '0 0 25px 2px #fff1';
   });
   content3.addEventListener('mouseover', () => {
      portfolio.style.color = 'rgb(197, 47, 47)';
      content3.style.boxShadow = '0 0 5px 4px lightgreen';
   });
   content3.addEventListener('mouseout', () => {
      portfolio.style.color = '#fff';
      content3.style.boxShadow = '0 0 25px 2px #fff1';
   });
   content4.addEventListener('mouseover', () => {
      contact.style.color = 'rgb(197, 47, 47)';
      content4.style.boxShadow = '0 0 5px 4px lightgreen';
   });
   content4.addEventListener('mouseout', () => {
      contact.style.color = '#fff';
      content4.style.boxShadow = '0 0 25px 2px #fff1';
   });

   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      content1 = content2 = content3 = content4 = this.style.boxShadow = '0 0 25px 2px #fff1'
   };

});



home.addEventListener('mouseover', () => {
   home.style.color = 'rgb(197, 47, 47)';
   content1.style.boxShadow = '0 0 5px 4px lightgreen';
   content1.style.transform = 'perspective(1300px) rotateY(12deg) ';
});
home.addEventListener('mouseout', () => {
   home.style.color = '#fff';
   content1.style.boxShadow = '0 0 25px 2px #fff1';
   content1.style.transform = 'rotate(0deg)';
});

about.addEventListener('mouseover', () => {
   about.style.color = 'rgb(197, 47, 47)';
   content2.style.boxShadow = '0 0 5px 4px lightgreen';
   content2.style.transform = 'perspective(1300px) rotateY(12deg) ';
});
about.addEventListener('mouseout', () => {
   about.style.color = '#fff';
   content2.style.boxShadow = '0 0 25px 2px #fff1';
   content2.style.transform = 'rotate(0deg)';
});

portfolio.addEventListener('mouseover', () => {
   portfolio.style.color = 'rgb(197, 47, 47)';
   content3.style.boxShadow = '0 0 5px 4px lightgreen';
   content3.style.transform = 'perspective(1300px) rotateY(12deg) ';
});
portfolio.addEventListener('mouseout', () => {
   portfolio.style.color = '#fff';
   content3.style.boxShadow = '0 0 25px 2px #fff1';
   content3.style.transform = 'rotate(0deg)';
});

contact.addEventListener('mouseover', () => {
   contact.style.color = 'rgb(197, 47, 47)';
   content4.style.boxShadow = '0 0 5px 4px lightgreen';
   content4.style.transform = 'perspective(1300px) rotateY(12deg) ';
});
contact.addEventListener('mouseout', () => {
   contact.style.color = '#fff';
   content4.style.boxShadow = '0 0 25px 2px #fff1';
   content4.style.transform = 'rotate(0deg)';
});

