const menu = document.getElementById('menu-burger')
const navbar = document.getElementById('navbar')
const navlink = document.querySelectorAll('.navbar a')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})
// navlink.addEventListener('click', ()=>{
//     menu.classList.remove('bx-x')
//     navbar.classList.remove('active')
// })