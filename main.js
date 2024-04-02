$(document).ready(function () {
    $(".slideshow-container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    })
    $(".btn1").click(function(){
        $(".pr2").slideToggle();
      });
})
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    // // vegetable carousel
    // $(".vegetable-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     center: false,
    //     dots: true,
    //     loop: true,
    //     margin: 25,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsiveClass: true,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         },
    //         1200:{
    //             items:4
    //         }
    //     }
    // });
    