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

(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
            document.getElementById("checkbox").checked = false
			window.location.reload();
		}
	};
})();
const navigationType = window.performance.getEntriesByType('navigation')[0].type;
if(navigationType === 'reload'){
    document.getElementById("checkbox").checked = false
}