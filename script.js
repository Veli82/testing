let runnerImg = document.querySelector("#runnerImg")
let coolBtn = document.querySelector("#resizeBtn")
let discoBtn = document.querySelector("#discoBtn")
let body = document.querySelector("body")
let p1 = document.querySelector("#p1")

runnerImg.style.width = "80%"

function coolFunction(e) {
    currWidth = runnerImg.style.width
    currWidth = currWidth.replace("%", "")
    let newWidth = Number(currWidth) - 10
    if (newWidth < 10) runnerImg.remove()
    newWidth = newWidth + "%"
    runnerImg.style.width = newWidth
    
}

coolBtn.addEventListener('click', coolFunction)
discoBtn.addEventListener('click', e => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor
})

setTimeout(() => p1.textContent = "Timeout!", 3000)