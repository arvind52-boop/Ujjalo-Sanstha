

// scroll gallery-start
let leftscroll = document.getElementById('leftscroll');
let rightscroll = document.getElementById('rightscroll');
let imageslide = document.getElementsByClassName('gallery-imageslide')[0];

leftscroll.addEventListener('click', () => {
   imageslide.scrollLeft -= 655;
})
rightscroll.addEventListener('click', () => {
   imageslide.scrollLeft += 655;
})
// scrool gallery-end
// navbar inside start

// navbar inside end
//about page hover
//news gallery larger image start

 

//news gallery large end

    // When the user clicks on div, open the popup
    function myFunction() {
        var popup1 = document.getElementById("myPopup-developer");
        popup1.classList.toggle("show");
    }
    // task slides
    var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide =1;
//javascript for image slider manual navigation
var manualNav =function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');

}
btns.forEach((btn ,i)=>{
    btn.addEventListener("click", ()=>{
      manualNav(i);
      currentSlide = i;  
    });
});
var repeat =function(activeClass){
    let active = document.getElementsByClassName('active');
     let i=1;
     var repeater =() =>{
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });
          slides[i].classList.add('active');
          btns[i].classList.add('active');
          i++;
          if(slides.length ==i){
            i=0;

          }
          if(i>= slides.length){
            return;
          }
          repeater();

        } , 10000);
     }
     repeater();
}
repeat();



