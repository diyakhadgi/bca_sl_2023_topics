const firstBtn = document.getElementById("first-btn");
const secBtn = document.getElementById("sec-btn");
const div = document.getElementById("div-1")

firstBtn.addEventListener("click",() => {
    const R = Math.random() * 255 
    const G = Math.random() * 255 
    const B = Math.random() * 255 
    div.style.backgroundColor = "rgb("+R +","+ G+","+ B+")"
})

secBtn.addEventListener("click", () => {
    div.style.backgroundColor = "blue"
})


