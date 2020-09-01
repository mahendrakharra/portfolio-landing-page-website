const menubar = document.querySelector('.bar');
const menus = document.querySelector('ul');
menubar.addEventListener('click', e => {
    menubar.classList.toggle('rotate');
    menus.classList.toggle('menus');
});


const template = document.querySelectorAll('.template');
const creative = document.querySelectorAll('.creative');
const btnOne =  document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const btnThree =  document.querySelector('.btn-three'); 
    btnOne.addEventListener('click', e => {
        creative.forEach(create => {
            create.style.display = "block";
        });
        template.forEach(temp => {
            temp.style.display = "block";
        });    
    });
    btnTwo.addEventListener('click', e => {
        creative.forEach(create => {
             create.style.display = "none";
        });
        template.forEach(temp => {
            temp.style.display = "block";
        }); 
    });
    btnThree.addEventListener('click', e => {
         template.forEach(temp => {
             temp.style.display = "none";
         }); 
         creative.forEach(create => {
            create.style.display = "block";
         });   
    });

    

const acco = document.querySelectorAll(".accordion");
    for(let i = 0; i < acco.length; i++){
        acco[i].addEventListener('click', function() {
           this.classList.toggle("active");
           let panel = this.nextElementSibling;
           if(panel.style.maxHeight){
               panel.style.maxHeight = null;
           }else{
               panel.style.maxHeight = panel.scrollHeight + "px";
           }
        });
    }
    

  window.onscroll = function() {myScrollingEffect()};

  function myScrollingEffect(){

    // Navbar Effect
  const navbar = document.querySelector("nav");
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    navbar.classList.add("nav-color");
  }else{
    navbar.classList.remove("nav-color");
  }
  



  // Achivement Effect
  const projects = document.querySelector('.projects');
  const clients = document.querySelector('.clients');
  const awards = document.querySelector('.awards');

  if(document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500){
  let count = 0; let count2 = 0; let count3 = 0;
  let counter = setInterval(counterOne, 30); 
  
  function counterOne(){
      if(count <= 99){
          count++;
          projects.innerHTML = count * 1;      
      }
      if(count2 <= 54){
           count2++;
           clients.innerHTML = count2 * 1;      
      }
      if(count3 <= 32){
           count3++;
           awards.innerHTML = count3 * 1;
      }
  }
  }else{
    projects.innerHTML = 100;
    clients.innerHTML = 55;
    awards.innerHTML = 33; 
  } 
  
  


  // Skilllevel Effect
 
  const pixelCss = document.querySelector(".css");
  const pixelJs = document.querySelector(".js");
  const pixelPhp = document.querySelector(".php"); 
  const pixelHtml = document.querySelector(".html");
  if(document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000){
  let htmlWidth = 0; let cssWidth = 0; let jsWidth = 0; let phpWidth = 0;
  const addedClass = setInterval(frame, 20);

 function frame() {
   if (htmlWidth <= 89) {
       htmlWidth++;
       pixelHtml.style.width = htmlWidth + '%';
       pixelHtml.innerHTML = htmlWidth * 1  + '%';
   }
   if (cssWidth <= 89) {
     cssWidth++;
     pixelCss.style.width = cssWidth + '%';
     pixelCss.innerHTML = cssWidth * 1  + '%';
  }
      if (jsWidth <= 74) {
        jsWidth++;
      pixelJs.style.width = jsWidth + '%';
      pixelJs.innerHTML = jsWidth * 1  + '%';
    }
    if (phpWidth <= 79) {
      phpWidth++;
      pixelPhp.style.width = phpWidth + '%';
      pixelPhp.innerHTML  = phpWidth * 1  + '%';
    }              
  }    
        }else{
        pixelHtml.style.width = 90 + '%'; 
        pixelHtml.innerHTML  =  90 + '%';
        pixelCss.style.width  = 90 + '%';
        pixelCss.innerHTML =  90 + '%';
        pixelJs.style.width  = 75 + '%';
        pixelJs.innerHTML =  75 + '%';
        pixelPhp.style.width = 80 + '%';
        pixelPhp.innerHTML =  80 + '%';

        } 

  }

  myScrollingEffect(); 
  


const copyContent = document.querySelectorAll(".copy-content");
 
    copyContent.forEach(copy => {
        copy.addEventListener('copy', e => {
            alert("Oops! Copyrights content!");
          });
    });
      

   
    

   
