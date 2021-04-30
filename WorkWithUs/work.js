/*Nav Bar*/
/*============================================================================
                                    Navbar
  ============================================================================*/

  $(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $(".overlay").toggleClass("open");
      $(".overlay a").toggleClass("open");
    $(".overlay p").toggleClass("open");
    });
  });
   

/*Carousel*/
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

/*============================================================================
                                    Loader
  ============================================================================*/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";

}