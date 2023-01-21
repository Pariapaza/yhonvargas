// toggle menu/navbar con jquery
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
// ====== botones de los temarios ======
$("#btn1").click(function(){
    $("#tema1").toggle()
})
$("#btn2").click(function(){
    $("#tema2").toggle()
})
$("#btn3").click(function(){
    $("#tema3").toggle()
})
$("#btn4").click(function(){
    $("#tema4").toggle()
})
$("#btn5").click(function(){
    $("#tema5").toggle()
})
$("#btn6").click(function(){
    $("#tema6").toggle()
})
// ==========================================
const progress = document.getElementById('progress')
let porcentaje = document.getElementById('porcentaje')

let catidad1 = 0;
let catidad2 = 320;

// let tiempo = setInterval(() => {
//     catidad1 += 1;
//     let valor = Math.ceil(catidad2 -= 3.2)
//     porcentaje.textContent = catidad1 + '%'
//     progress.style.strokeDashoffset = `${valor}`

//     if (catidad1 == 75) {
//         clearInterval(tiempo)
//     }

// }, 10);

const enviar = document.getElementById("enviar")
enviar.addEventListener('submit', e =>{
    e.preventDefault()

    const nombre = enviar['nombre'].value;
    const contra = enviar['contra'].value;
    
    console.log(nombre + contra)
})

