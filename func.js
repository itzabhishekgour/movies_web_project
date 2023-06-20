// const arrows = document.querySelector('.arrow');
// arrow.forEach((arrow,i)=>{
//     arrow.addEventListener("click",()=>{
//         movieList[i].style.transform ="translateX(-100px)"
//     })
// })


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar-container, .menu-list, .sidebar, .menu-icon,.toggle")
ball.addEventListener("click",()=>{
    items.forEach(items=>{
        items.classList.toggle("active")
    })
    
})