const scriptURL = 'https://script.google.com/macros/s/AKfycbxA9BTmqLVzaAFmBBUW8qOkLGez5TcLVJs0-Z7x8hlthtR5fOVobE6ZE4rpLE8xmzJndQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const homesection = document.querySelector("#Home");
const navbar = document.querySelector(".navbar");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent succesfully!!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => {
    console.error('Error!', error.message)
    msg.innerHTML = "An error occurred. Please try again later."
    })
    
})

const observer = new IntersectionObserver(
    (entries)=>{
        const ent = entries[0];
        ent.isIntersecting === false
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
    },{
    root:null,
    rootMargin:"-200px",
    threshold:"",   
});
observer.observe(homesection);



let typed = new Typed(".auto-type",{
    strings:["I'm a Final Year BE IT student","I'm a Freelancer","I'm a Software Engineer","I'm a Designer"],
    typeSpeed:30,
    delaySpeed : 50,
    backSpeed:30,
    loop:true 
})  


let hamb = document.querySelector(".hamburger-menu");
let navv = document.querySelector(".navbar");
function doStuff(){
    landscape = window.orientation? window.orientation=='landscape' : true;

    if(landscape && window.innerWidth<900 && window.innerWidth > 0){
        hamb.classList.remove("block")
        navv.classList.add("block")
    }
    else{
        hamb.classList.add("block")
        navv.classList.remove("block")
    }
}
window.onload=window.onresize=doStuff;
if(window.onorientationchange){
    window.onorientationchange=doStuff;
}



let check_box=document.getElementById("menu__toggle")
let menu_ele=document.querySelectorAll('.menu__item')
menu_ele.forEach(menu__item => {
    menu__item.addEventListener('click', ()=>{
        check_box.checked=false
    })
})

let education_button = document.querySelector(
    '.qualification_education-button'
  );
  let experience_button = document.querySelector(
    '.qualification_experience-button'
  );
  let experience_content = document.querySelector(
    '.qualification_experience-content'
  );
  let education_content = document.querySelector(
    '.qualification_education-content'
  );
  education_button.onclick = () => {
    education_button.classList.add('qualification_active');
    experience_button.classList.remove('qualification_active');
    education_content.classList.add('qualification_content-active');
    experience_content.classList.remove('qualification_content-active');
  };
  
  experience_button.onclick = () => {
    experience_button.classList.add('qualification_active');
    education_button.classList.remove('qualification_active');
    education_content.classList.remove('qualification_content-active');
    experience_content.classList.add('qualification_content-active');
  };




