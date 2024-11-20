window.addEventListener("load",function(){

    const swiper1 = new Swiper('.station1', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        autoHeight:true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        },
        slidesPerView:1,
        autoplay:{
            delay:3000
        },
        speed:1000,
        
    });
    const swiper2 = new Swiper('.station2', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        autoHeight:true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        },
        slidesPerView:1,
        autoplay:true,
        speed:1000,
    });

    const station3 = new Swiper(".station3",{
        loop: true,
        autoplay: true,
        effect: 'fade',
    })

    const station4 = new Swiper(".station4",{
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
    })
        
    station3.on('slideChange', function () {
        console.log('slide changed');
        station4.slideToLoop(station3.realIndex)
    
    });
    
})