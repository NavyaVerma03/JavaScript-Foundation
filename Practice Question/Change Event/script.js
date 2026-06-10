let set = document.querySelector("select");
let device = document.querySelector("#device");
set.addEventListener("change", function(e){
    device.textContent = `${e.target.value} devices Selected`;
});