
const bulbToggle = document.getElementById("toggle");
bulbToggle.addEventListener("click", () => {
    const bulb = document.getElementById("bulb");
    const bulb2 = document.getElementById("bulb2");
    if (bulb.hidden){
        bulb.hidden = false;
        bulbToggle.innerText = "Выключить";
    } else {
        bulb.hidden = true;
        bulbToggle.innerText = "Включить";
    }
    if (bulb2.hidden){
        bulb2.hidden = true;
        bulbToggle.innerText = "Выключить"; 
    } else {
        bulb2.hidden = false;
        bulbToggle.innerText = "Включить";
    }
});
