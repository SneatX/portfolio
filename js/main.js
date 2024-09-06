window.addEventListener("scroll" , () =>{
    const ulNav = document.querySelector(".header-ul")

    if(window.scrollY > 0) ulNav.classList.add("scorlledHeader")
    
    else ulNav.classList.remove("scorlledHeader")
})