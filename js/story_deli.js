window.addEventListener("load",function(){

    const station6 = new Swiper(".station6",{
        
        slidesPerView: 1.2,
        spaceBetween: 14,
        breakpoints:{
            768:{
                slidesPerView: 2.3,
                spaceBetween: 18,
            },
            1280:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    })


})