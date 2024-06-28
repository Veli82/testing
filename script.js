let runnerImg = document.querySelector("#runnerImg")
let coolBtn = document.querySelector("#coolBtn")
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