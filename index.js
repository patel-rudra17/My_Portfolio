const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');


navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click',function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});


// ---------- animation text ------------

var typed = new Typed(".typing",{
    strings:["Frontend Developer", "Web Designer", "Frontend Developer And Web Designer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
