let menu = document.querySelector('.menuResponsive')
let navBar = document.querySelector('.navBarResponsive')

menu.addEventListener('click',()=>{
   console.log("click")
   let display = navBar.style.display
   if (display === "flex")  navBar.style.display = "none"
   else navBar.style.display = "flex"
 //  console.dir(navBar)

})