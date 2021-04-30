/*Nav Bar*/
/*============================================================================
                                    Évelym S.
                    https://www.linkedin.com/in/evelym-santos/
  ============================================================================*/

  $(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $(".overlay").toggleClass("open");
      $(".overlay a").toggleClass("open");
    $(".overlay p").toggleClass("open");
    });
  });


/*============================================================================
                                    FAQ
  ============================================================================*/

  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
  
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });

  var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";

}