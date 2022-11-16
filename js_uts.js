const lightbox = document.querySelector('.lightbox_container');
const btn = document.querySelectorAll('#ripple');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const close = document.getElementById('close');
 
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e)=>{
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
 
        let ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
 
        btn[i].appendChild(ripple);
 
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
};
 
 
function openmodal(){
    lightbox.classList.add('show');
}
 
close.addEventListener('click', ()=>{
    lightbox.classList.remove('show');
});
 
prev.addEventListener('click', ()=>{
    plusslide(-1);
});
 
next.addEventListener('click', ()=>{
    plusslide(1);
});
 
let slideindex = 1;
showslide(n);
 
function plusslide(n){
    showslide(slideindex += n);
};
 
function currentslide(n){
    showslide(slideindex  = n);
};
 
function showslide(n){
    const slide = document.querySelectorAll('.lightbox_item');
     
    if(n > slide.length){
        slideindex=1;
    }
     
    if(n < 1){
        slideindex = slide.length;
    }
 
    for (let i = 0; i < slide.length; i++){
        slide[i].classList.add('active');
    }
    slide[slideindex-1].classList.remove('active');
}



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  jQuery(document).ready(function($){   
    $(function () {
           $(".loadmore-frame .col-md-4").slice(0, 3).show();
           $("body").on('click touchstart', '.loadmore-frame .load-more', function (e) {
               e.preventDefault();
               $(".loadmore-frame .col-md-4:hidden").slice(0, 3).slideDown(3);
               if ($(".loadmore-frame .col-md-4:hidden").length == 0) {
                   $(".loadmore-frame .load-more").css('visibility', 'hidden');
               }
               $('html,body').animate({
                   scrollTop: $(this).offset().top
               }, 1000);
           });
       });   
   });