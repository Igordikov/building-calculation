



// кнопка + обработчик события

const buttonForCalc = document.querySelector('.btn-calc-js');
buttonForCalc.addEventListener('click', solutionCalculation);




// Функция расчета материаллов для расствора

let totalAreaOpenings = 0;

function solutionCalculation() {
   

    const widthInput = document.querySelector('[name="widths-openings"]').value;
    const lengthInput = document.querySelector('[name="lengths-openings"]').value;

    const widths = widthInput.split(';').map(Number);
    const lengths = lengthInput.split(';').map(Number);
    const proportionInput = parseFloat(document.querySelector('[name="proportion"]').value);
    const sideAInput = parseFloat(document.querySelector('[name="side-a"]').value);
    const sideBInput = parseFloat(document.querySelector('[name="side-b"]').value);
    const weightInput = parseFloat(document.querySelector('[name="weight"]').value);

    for (let i = 0; i < widths.length; i++) {
        if (widths[i] && lengths[i] && !isNaN(widths[i]) && !isNaN(lengths[i])) {
            const quadrature = widths[i] * lengths[i];
           
            totalAreaOpenings += quadrature;
            console.log(`Проем ${i + 1}: ${quadrature.toFixed(2)} м.кв`);
        };
    };
    
    const totalArea = sideAInput * sideBInput;
    const actualArea = totalArea - totalAreaOpenings;
    const volumeOfWork = actualArea * weightInput;
    const volumeOfSolution = volumeOfWork * 2000;
    const cement = volumeOfSolution / (proportionInput + 1);
    const bagsOfCement = cement / 25;
    const sand = cement.toFixed(2) * proportionInput;
    
    
    // Условия ввода значений

    if (isNaN(proportionInput) || isNaN(sideAInput) || isNaN(sideBInput) || isNaN(weightInput)) {
        alert('Строки размеров плоскости и толщины слоя не могут быть пустыми или содержать некорректные значения!');
    } else  if (totalArea < totalAreaOpenings) {
        alert('Общая квадратура поверхности не может быть меньше общей квадратуры проемов');
        return;
    };


        // Вывод значений
        
    console.log(`Общая площадь проемов: ${totalAreaOpenings.toFixed(2)} м.кв`);

    console.log(`Общая квадратура: ${totalArea} м.кв`)
    
    console.log(`Актуальная квадратура (без проемов): ${actualArea.toFixed(2)} м.кв`)

    console.log(`Объем расствора: ${volumeOfWork.toFixed(2)} м³`);
    
    console.log(`Масса раствора: ${volumeOfSolution.toFixed()} кг`);
   
    console.log(`Цемент: ${cement.toFixed()} кг`);

    console.log(`Цемент в мешках (по 25 кг): ${bagsOfCement.toFixed(2)} шт.`);
   
    console.log(`Песок: ${sand.toFixed()} кг`);

    console.log(`Пропорция цемент х песок: 1 x ${proportionInput}`);
   
};

   

    

   


    


    

    

// ===================================================================================

        
    


