// variable declarations
let runnerImg = document.querySelector("#runnerImg")
let coolBtn = document.querySelector("#resizeBtn")
let discoBtn = document.querySelector("#discoBtn")
let body = document.querySelector("body")
let p1 = document.querySelector("#p1")
let addImgBtn = document.querySelector("#addImgBtn")
let imgUrl = document.querySelector("#imgGenUrl")
let imgCaption = document.querySelector("#imgCaption")
let imgContainer = document.querySelector("#imageContainer")

//function declarations
function coolFunction(e) {
    currWidth = runnerImg.style.width
    currWidth = currWidth.replace("%", "")
    let newWidth = Number(currWidth) - 10
    if (newWidth < 10) runnerImg.remove()
    newWidth = newWidth + "%"
    runnerImg.style.width = newWidth
}

function addPicture() {
    let newImg = document.createElement('img')
    newImg.setAttribute("src",imgUrl.value)
    newImg.setAttribute("alt",imgCaption.value) 
    imgContainer.appendChild(newImg)
}

//random setup
runnerImg.style.width = "80%"
setTimeout(() => p1.textContent = "Timeout!", 3000)


//eventListeners
coolBtn.addEventListener('click', coolFunction)
discoBtn.addEventListener('click', e => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor
})
addImgBtn.addEventListener('click', addPicture)
