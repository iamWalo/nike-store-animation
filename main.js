//loading
window.addEventListener("load", function () {
    // إخفاء شاشة التحميل بعد تحميل جميع العناصر
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

// animation
const redBtn = document.querySelector('.red-btn');
const blueBtn = document.querySelector('.blue-btn');
const greenBtn = document.querySelector('.green-btn');
const jordanImg = document.querySelector('.jordan-img')


let storageColor = localStorage.getItem("color") || 'red';
document.body.style.backgroundColor = storageColor;
if (storageColor === '#b40003') {
    storageColor = 'red';
}
jordanImg.src = `./images/${storageColor}-jordan.png`;
jordanImg.className = `${storageColor}-jordan`;
jordanImg.style.opacity = 1;


let red = "#b40003";

redBtn.addEventListener('click', () => {
    localStorage.removeItem("color")
    localStorage.setItem("color", red);
    location.reload();
})
blueBtn.addEventListener('click', () => {
    localStorage.removeItem("color")
    localStorage.setItem("color", "blue");
    location.reload();
})
greenBtn.addEventListener('click', async () => {
    localStorage.removeItem("color")
    localStorage.setItem("color", "green");
    location.reload();
})