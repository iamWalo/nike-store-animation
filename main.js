// // //loading
// window.addEventListener("load", function () {
//     // إخفاء شاشة التحميل بعد تحميل جميع العناصر
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("content").style.display = "block";
// });

// // animation
// const redBtn = document.querySelector('.red-btn');
// const blueBtn = document.querySelector('.blue-btn');
// const greenBtn = document.querySelector('.green-btn');
// const jordanImg = document.querySelector('.jordan-img')
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');

// // تحميل اللون المخزن أو الافتراضي
// let storageColor = localStorage.getItem("color") || 'red';


// // let storageColor = localStorage.getItem("color") || 'red';
// document.body.style.backgroundColor = storageColor;
// if (storageColor === '#b40003') {
//     storageColor = 'red';
// }
// jordanImg.src = `./images/${storageColor}-jordan.png`;
// jordanImg.className = `${storageColor}-jordan`;
// jordanImg.classList.add('active');
// jordanImg.style.opacity = 1;


// let red = "#b40003";


// redBtn.addEventListener('click', () => {
//     localStorage.removeItem("color")
//     localStorage.setItem("color", red);
//     location.reload();
// })
// blueBtn.addEventListener('click', () => {
//     localStorage.removeItem("color")
//     localStorage.setItem("color", "blue");
//     location.reload();
// })
// greenBtn.addEventListener('click', async () => {
//     localStorage.removeItem("color")
//     localStorage.setItem("color", "green");
//     location.reload();
// })


// document.body.style.backgroundColor = storageColor;
// jordanImg.src = `./images/${storageColor}-jordan.png`;
// jordanImg.className = `${storageColor}-jordan`;

// const colors = ['blue', "#b40003", 'green'];
// let counter = colors.indexOf(storageColor); 
// const nextColor = () => {
//     counter = (counter + 1) % colors.length; // التنقل بين الألوان
//     let newColor = colors[counter];

//     // تخزين اللون الجديد وتحديث الصفحة
//     localStorage.setItem('color', newColor);
//     document.body.style.backgroundColor = newColor;
//     jordanImg.src = `./images/${newColor}-jordan.png`;
//     jordanImg.className = `${newColor}-jordan`;
//     location.reload();
// }
// // تغيير اللون عند الضغط على الزر التالي
// next.addEventListener('click', () => {
//     nextColor();
// });
// prev.addEventListener('click', () => {
//     nextColor();
// });


const redBtn = document.querySelector('.red-btn');
const blueBtn = document.querySelector('.blue-btn');
const greenBtn = document.querySelector('.green-btn');
const jordanImg = document.querySelector('.jordan-img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const lines = document.querySelectorAll('#line');

// التحقق مما إذا كانت الصفحة قد تم إعادة تحميلها
if (localStorage.getItem("reloadFlag") === "true") {
    localStorage.removeItem("reloadFlag");
    lines.forEach((line) => line.classList.add('line')); // تفعيل الكود بعد إعادة التحميل
}

// تحميل اللون المخزن
let storageColor = localStorage.getItem("color") || 'red';
if (storageColor === '#b40003') {
    storageColor = 'red';
}

document.body.style.backgroundColor = storageColor;
jordanImg.src = `./images/${storageColor}-jordan.png`;
jordanImg.className = `${storageColor}-jordan`;
jordanImg.style.opacity = 1;

const colors = ['blue', 'red', 'green'];
let counter = colors.indexOf(storageColor);

const changeColor = (newColor) => {
    jordanImg.style.opacity = 0;
    localStorage.setItem('color', newColor);
    localStorage.setItem("reloadFlag", "true");
    jordanImg.src = `./images/${newColor}-jordan.png`;
    jordanImg.className = `${newColor}-jordan`;
    location.reload();
};

redBtn.addEventListener('click', () => changeColor('red'));
blueBtn.addEventListener('click', () => changeColor('blue'));
greenBtn.addEventListener('click', () => changeColor('green'));

next.addEventListener('click', () => {
    jordanImg.style.opacity = 0;
    counter = (counter + 1) % colors.length;
    changeColor(colors[counter]);
});

prev.addEventListener('click', () => {
    jordanImg.style.opacity = 0;
    counter = (counter - 1 + colors.length) % colors.length;
    changeColor(colors[counter]);
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";

    lines.forEach((line) => line.classList = 'line');
});