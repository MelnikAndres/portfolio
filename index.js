const light = document.getElementById("light")

document.addEventListener("mousemove", (ev) =>{
    setTimeout(() => {
        light.style.top = (ev.clientY - 180) + "px"
        light.style.left = (ev.clientX - 180) + "px" 
    }, 150);
})
