function calculateTriangleArea() {
        // base
        const base = getInputValue('triangle-base');
        // hight
        const hight = getInputValue('triangle-hight');
        // validation
        validationNumber(base, hight);
        // area calculation
        const area = .5 * base * hight;

        setElementInnerText('triangle-area', area);
        addToCalculationEntry("Triangle", area);
}

function calculateRectangleArea() {
        // base
        const width = getInputValue('rectangle-width');
        // hight
        const length = getInputValue('rectangle-length');
        // validation
        validationNumber(width, length);
        // area calculation
        const area = width * length;

        setElementInnerText('rectangle-area', area);
        addToCalculationEntry("Rectangle", area);
}
function calculateParallelogramArea() {
        // base
        const base = getInputValue('parallelogram-base');
        // hight
        const hight = getInputValue('parallelogram-hight');
        // validation
        validationNumber(base, hight);
        // area calculation
        const area = base * hight;

        setElementInnerText('parallelogram-area', area);
        addToCalculationEntry("Parallelogram", area);
}
function calculateRhombusArea() {
        // diameter-1
        const diameter1 = getInputValue('rhombus-diameter1');
        // diameter-2
        const diameter2 = getInputValue('rhombus-diameter2');
        // validation
        validationNumber(diameter1, diameter2);
        // area calculation
        const area = .5 * diameter1 * diameter2;

        setElementInnerText('rhombus-area', area);
        addToCalculationEntry("Rhombus", area);

}
function calculatePentagonArea() {
        // diameter-1
        const perimeter = getInputValue('pentagon-perimeter');
        // pentagon-apothem
        const apothem = getInputValue('pentagon-apothem');
        // validation
        validationNumber(perimeter, apothem);
        // area calculation
        const area = .5 * perimeter * apothem;

        setElementInnerText('pentagon-area', area);
        addToCalculationEntry("Pentagon", area);
}
function calculateEllipseArea() {
        // diameter-1
        const axis1 = getInputValue('ellipse-axis1');
        // pentagon-apothem
        const axis2 = getInputValue('ellipse-axis2');
        // validation
        validationNumber(axis1, axis2);
        // area calculation
        const areaFloat = 3.1416 * axis1 * axis2;
        const area = areaFloat.toFixed(2);

        setElementInnerText('ellipse-area', area);
        addToCalculationEntry("Ellipse", area);
}
// reusable function
function getInputValue(inputID) {
        const inputField = document.getElementById(inputID);
        const inputFloat = parseFloat(inputField.value);
        return inputFloat;
}
function setElementInnerText(areaId, area) {
        const element = document.getElementById(areaId);
        element.innerText = area;
}
// validation
function validationNumber(number1, number2) {
        if (isNaN(number1) || isNaN(number2)) {
                alert("Please input a number");
                return;
        }
}

// add to calculation entry
function addToCalculationEntry(areaType, area) {
        
        const calculationEntry = document.getElementById('calculation-entry');
        const count = calculationEntry.childElementCount;
        // create element to add
        const p = document.createElement('p');
        p.classList.add('my-4');
        // create innerHtml to show dynamic
        p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup>  <button class="btn btn-sm btn-primary bg-[#1090DB] border-0">OK</button> `;
        // connection with child
        calculationEntry.appendChild(p)

}
