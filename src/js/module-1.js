



// кнопка
const buttonForCalc = document.querySelector('.btn-calc-js');

buttonForCalc.addEventListener('click', function () {
    calculateOpenings();
    solutionCalculation();
    
});

let totalAreaOpenings = 0;


function calculateOpenings() {
    
    const widthInput = document.querySelector('[name="widths-openings"]').value.toString();
    const lengthInput = document.querySelector('[name="lengths-openings"]').value.toString();

    const widths = widthInput.split(';').map(Number);
    const lengths = lengthInput.split(';').map(Number);
    
    

    

    for (let i = 0; i < widths.length; i++) {
        if (widths[i] && lengths[i] && !isNaN(widths[i]) && !isNaN(lengths[i])) {
            const quadrature = widths[i] * lengths[i];
            console.log(`Проем ${i + 1}: ${quadrature.toFixed(2)} м.кв`);
            totalAreaOpenings += quadrature;
        }
    }
    console.log(`Общая площадь проемов: ${totalAreaOpenings.toFixed(2)} м.кв`);
    return totalAreaOpenings;

}

calculateOpenings();

          
            
// Функция расчета материаллов для расствора



function solutionCalculation() {



    const proportionInput = parseFloat(document.querySelector('[name="proportion"]').value);
    const sideAInput = parseFloat(document.querySelector('[name="side-a"]').value);
    const sideBInput = parseFloat(document.querySelector('[name="side-b"]').value);
    const weightInput = parseFloat(document.querySelector('[name="weight"]').value);

    if (isNaN(proportionInput) || isNaN(sideAInput) || isNaN(sideBInput) || isNaN(weightInput)) {
        alert('Строки размеров плоскости и толщины слоя не могут быть пустыми или содержать некорректные значения!');
    } else {


    const totalArea = sideAInput * sideBInput;
    console.log(`Общая квадратура: ${totalArea} м.кв`)

    const actualArea = totalArea - totalAreaOpenings;
    console.log(`Актуальная квадратура (без проемов): ${actualArea} м.кв`)

    const volumeOfWork = actualArea * weightInput;
    console.log(`Объем расствора: ${volumeOfWork.toFixed(2)} м³`);

    const volumeOfSolution = volumeOfWork * 2000;
    console.log(`Масса раствора: ${volumeOfSolution.toFixed()} кг`);

    const cement = volumeOfSolution / (proportionInput + 1);
    console.log(`Цемент: ${cement.toFixed()} кг`);

    const bagsOfCement = cement / 25;
    console.log(`Цемент в мешках (по 25 кг): ${bagsOfCement.toFixed(2)} шт.`);

    const sand = cement.toFixed(2) * proportionInput;
    console.log(`Песок: ${sand.toFixed()} кг`);
}}


    

    

// ===================================================================================

        
    


