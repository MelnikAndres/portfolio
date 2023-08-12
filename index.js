const light = document.getElementById("light")

document.addEventListener("mousemove", (ev) =>{
    setTimeout(() => {
        light.style.top = (ev.clientY - 180) + "px"
        light.style.left = (ev.clientX - 180) + "px" 
    }, 150);
})

const pushLink = () =>{
    history.pushState({}, "", "./about-me");
}

var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload();
}