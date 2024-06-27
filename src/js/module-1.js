
// ==========================================================

// function#1

// function displayMessage(msgText, msgType) {
//     const html = document.querySelector("html");
// const panel = document.createElement("div");
// panel.setAttribute("class", "msgBox ");
// html.appendChild(panel);

// const msg = document.createElement("p");
// msg.textContent = msgText;
// panel.appendChild(msg);

// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// panel.appendChild(closeBtn);

// closeBtn.onclick = function () {
//     panel.parentNode.removeChild(panel);

//     const btn = document.querySelector("button");
//     btn.onclick = function () {
//         displayMessage();

//     };
// }
// if (msgType === "warning") {
//     msg.style.backgroundImage = "url(icons/warning.png)";
//     panel.style.backgroundColor = "red";

// } else if (msgType === "chat") {
//     msg.style.backgroundImage = "url(icons/chat.png)";
//     panel.style.backgroundColor = "aqua";

// } else {
//     msg.style.paddingLeft = "20px";
// }
// }

// displayMessage ();

// ==========================================================






// ==========================================================

// function sum (x, y) {
// const sum = x + y;
// console.log(sum);
// }
// sum (12244, 5423)

// ==========================================================








// ==========================================================

// Функция для расчетов проемов

function calculateOpenings(widths, lengths) {
    if (widths.length !== lengths.length) {
        console.error("Количество ширин и длин должно совпадать!");
        return;
    }

    let totalAreaOpenings = 0;
    
    for (let i = 0; i < widths.length; i++) {
        const quadrature = widths[i] * lengths[i];
        console.log(`Проем ${i + 1}: ${quadrature.toFixed(2)} м.кв`);
        totalAreaOpenings += quadrature;
    }
    console.log(`Общая площадь проемов: ${totalAreaOpenings.toFixed(2)} м.кв`);
    return totalAreaOpenings;
}





// Функция расчета материаллов для расствора


function solutionCalculation (width, length, thickness, sandProportion) {

    const proportion = sandProportion;
    console.log("Пропорция 1 x " + proportion.toFixed());


    const totalArea = width * length;
    const totalAreaOpenings = calculateOpenings ([0.8, 0.8], [2.1, 2.1]);
    const actualArea  = totalArea - totalAreaOpenings;

    

    const volumeOfWork = actualArea * thickness;
    console.log(`Обьем работы ${volumeOfWork.toFixed(2)} м.куб`);
    
    const volumeOfSolution = volumeOfWork * 2000;
    console.log(`Масса расствора ${volumeOfSolution.toFixed()} кг`);
    
    const cement = volumeOfSolution / (proportion + 1);
    console.log(`Цемент ${cement.toFixed()} кг`);

    const bagsOfCement = cement / 25;
    console.log(`Цемент в мешках ${bagsOfCement.toFixed(2)} шт по 25кг`)
    
    const sand = cement.toFixed(2) * proportion;
    console.log(`Песок ${sand.toFixed()} кг`);
    };
    
    solutionCalculation(4, 2.5, 0.02, 4);









// ==========================================================










