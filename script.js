

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

        $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

// const progress = document.getElementById('progress')
// let porcentaje = document.getElementById('porcentaje')
// let catidad1 = 0;
// let catidad2 = 320;

// let tiempo = setInterval(() => {
//     catidad1 +=1;
//     let valor=Math.ceil(catidad2 -= 3.2)
//     porcentaje.textContent = catidad1 + '%'
//     progress.style.strokeDashoffset = `${valor}`

//     if(catidad1 == 75){
//         clearInterval(tiempo)
//     }

// },10);


    
    

