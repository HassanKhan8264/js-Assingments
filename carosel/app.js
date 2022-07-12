var bannersData = ["1.jpg","2.jpg", "daredeveil.webp"];
var dom = document.getElementById("banners");

function bannersInit(index) {
    dom.innerHTML =  `<img id="banners" src="./${bannersData[index]}"/>`
}
var count = 0;

    setInterval(function () {
    if (bannersData.length === count) {
        count = 0
    }
    bannersInit(count++)
}, 1000)


// var bannersData = ["1.jpg","2.jpg"]

// var dom = document.getElementById("banners");
// function bannersInit(index) {
//     dom.innerHTML = `${bannersData[index]}`
// }
// var count = 0;
// setInterval(function () {
//     if (bannersData.length === count) {
//         count = 0
//     }
//     bannersInit(count++)
// }, 1000)