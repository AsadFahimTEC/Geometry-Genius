function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

       // get triangle height value
       const heightField = document.getElementById('height-base');
       const heightValueText = heightField.value;
       const height = parseFloat(heightValueText);
       console.log(height);

       // calculate area
       const area = 0.5 * base * height;
       console.log(area);

       // show triangle area
       const areaSpan = document.getElementById('triangle-area');
       areaSpan.innerText = area;
}

function calculateRectangleArea(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

       // get rectangle length value
       const lengthField = document.getElementById('rectangle-length');
       const lengthValueText = lengthField.value;
       const length = parseFloat(lengthValueText);
       console.log(length);

       // validate input rectangle width and length
       if(isNaN (width) || (length)){
        alert('Please insert a number');
        return;
       }

       // calculate area
       const area = width * length;
       console.log(area);

       // show rectangle area
       const rectangleAreaSpan = document.getElementById('rectangle-area');
       rectangleAreaSpan.innerText = area;
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelograme-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);


    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    
}

// reuseable function to get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDecimal);
}

// data validation
/**
 * 1. set the proper type of the input field.(number, data, email)
 * 2. checktype using typeof
 * NaN means: not a number, isNaN is checking whether the input is not a number or not
 */