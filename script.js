// variable declarations
let runnerImg = document.querySelector("#runnerImg")
let roskataImg = document.querySelector("#roskataImg")
let shrinkBtn = document.querySelector("#shrinkBtn")
let expandBtn = document.querySelector("#expandBtn")
let discoBtn = document.querySelector("#discoBtn")
let body = document.querySelector("body")
let p1 = document.querySelector("#p1")
let addImgBtn = document.querySelector("#addImgBtn")
let imgUrl = document.querySelector("#imgGenUrl")
let imgCaption = document.querySelector("#imgCaption")
let imgContainer = document.querySelector("#imageContainer")
let percentInput = document.querySelector("#percentInput")


//random setup
for (image of imgContainer.children) {
    image.style.width = "80%"
}
setTimeout(() => p1.textContent = "Timeout!", 3000)
percentInput.value = "10"
let currWidth = "80%"



//function declarations

function shrinkImg() {
    currWidth = currWidth.replace("%", "")
    let newWidth = Number(currWidth) - Number(percentInput.value)
    if (newWidth < 10) return
    newWidth = newWidth + "%"
    currWidth = newWidth
    for (image of imgContainer.children) {
        image.style.width = newWidth
    }

}

function expandImg() {
    currWidth = currWidth.replace("%", "")
    let newWidth = Number(currWidth) + Number(percentInput.value)
    if (newWidth < 10) return
    newWidth = newWidth + "%"
    currWidth = newWidth
    for (image of imgContainer.children) {
        image.style.width = newWidth
    }
}

function addPicture() {
    let newImg = document.createElement('img')
    newImg.setAttribute("src",imgUrl.value)
    newImg.setAttribute("alt",imgCaption.value)
    newImg.style.width = currWidth
    imgContainer.prepend(newImg)
}


//eventListeners
shrinkBtn.addEventListener('click', shrinkImg)
expandBtn.addEventListener('click', expandImg)
discoBtn.addEventListener('click', e => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor
})
addImgBtn.addEventListener('click', addPicture)
