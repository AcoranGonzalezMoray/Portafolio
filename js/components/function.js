
$(function(){
    var slide_index = 1;  
    displaySlides(slide_index);  
    function nextSlide() {  
        displaySlides(slide_index++);  
    }  
    function prevslide() {  
      displaySlides(slide_index--);   
    }  
    function displaySlides() {  
        var i;  
        var slides = document.getElementsByClassName("slides");  
        if (slide_index > slides.length ) { slide_index = 1 } 
        if (slide_index < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.cssText="opacity:0;pointer-events: none;" ;  
            
        }  
        slides[slide_index - 1].style.cssText="opacity:1;pointer-events: all;" ;  
        
      }
      var next = document.getElementById("next");
      next.addEventListener("click",nextSlide);
      
      var prev = document.getElementById("prev");
      prev.addEventListener("click",prevslide);
  })

  //app slideshow 
  $(function(){ 
    var slide_index = 1;  
    displaySlides(slide_index);  
    function nextSlide() {  
        displaySlides(slide_index++);  
    }  
    function prevslide() {  
      displaySlides(slide_index--);   
    }  
    function displaySlides() {  
        var i;  
        var slides = document.getElementsByClassName("app-slides");  
        if (slide_index > slides.length ) { slide_index = 1 } 
        if (slide_index < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.cssText="opacity:0;pointer-events: none;" ;  
            
        }  
        slides[slide_index - 1].style.cssText="opacity:1;pointer-events: all;" ;  
        
      }
      var next = document.getElementById("app-next");
      next.addEventListener("click",nextSlide);
      
      var prev = document.getElementById("app-prev");
      prev.addEventListener("click",prevslide);
  })

  //ia slideshow 
  $(function(){ 
    var slide_index = 1;  
    displaySlides(slide_index);  
    function nextSlide() {  
        displaySlides(slide_index++);  
    }  
    function prevslide() {  
      displaySlides(slide_index--);   
    }  
    function displaySlides() {  
        var i;  
        var slides = document.getElementsByClassName("ia-slides");  
        if (slide_index > slides.length ) { slide_index = 1 } 
        if (slide_index < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.cssText="opacity:0;pointer-events: none;" ;  
            
        }  
        slides[slide_index - 1].style.cssText="opacity:1;pointer-events: all;" ;  
        
      }
      var next = document.getElementById("ia-next");
      next.addEventListener("click",nextSlide);
      
      var prev = document.getElementById("ia-prev");
      prev.addEventListener("click",prevslide);
  })

  //software slideshow 
  $(function(){ 
    var slide_index = 1;  
    displaySlides(slide_index);  
    function nextSlide() {  
        displaySlides(slide_index++);  
    }  
    function prevslide() {  
      displaySlides(slide_index--);   
    }  
    function displaySlides() {  
        var i;  
        var slides = document.getElementsByClassName("software-slides");  
        if (slide_index > slides.length ) { slide_index = 1 } 
        if (slide_index < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.cssText="opacity:0;pointer-events: none;" ;  
            
        }  
        slides[slide_index - 1].style.cssText="opacity:1;pointer-events: all;" ;  
        
      }
      var next = document.getElementById("software-next");
      next.addEventListener("click",nextSlide);
      
      var prev = document.getElementById("software-prev");
      prev.addEventListener("click",prevslide);
  })

 //algorimo slideshow 
 $(function(){ 
  var slide_index = 1;  
  displaySlides(slide_index);  
  function nextSlide() {  
      displaySlides(slide_index++);  
  }  
  function prevslide() {  
    displaySlides(slide_index--);   
  }  
  function displaySlides() {  
      var i;  
      var slides = document.getElementsByClassName("algoritmo-slides");  
      if (slide_index > slides.length ) { slide_index = 1 } 
      if (slide_index < 1) { slide_index = slides.length }  
      for (i = 0; i < slides.length; i++) {  
          slides[i].style.cssText="opacity:0;pointer-events: none;" ;  
          
      }  
      slides[slide_index - 1].style.cssText="opacity:1;pointer-events: all;" ;  
      
    }
    var next = document.getElementById("algoritmo-next");
    next.addEventListener("click",nextSlide);
    
    var prev = document.getElementById("algoritmo-prev");
    prev.addEventListener("click",prevslide);
})