let fibonacciSequenceArray = [];
let html;

function go(){

    document.getElementById('fibonacci-sequence').innerHTML = "";

    const n = document.getElementById('number').value;

    for(let i = 0; i < n; i++){
        const fibonacciNumber = fibonacciSequenceArray[i-2] + fibonacciSequenceArray[i-1];

        if (isNaN(fibonacciNumber)){
            fibonacciSequenceArray[i] = 1;
        }else{
            fibonacciSequenceArray[i] = fibonacciNumber;
        }

        if(i%5 === 0) {
            html = '<p></p>'
            html += `<span style="margin-left: 10px">${fibonacciSequenceArray[i]}</span>`;
        }else{
            html = `<span style="margin-left: 10px">${fibonacciSequenceArray[i]}</span>`;
        }

        document.getElementById('fibonacci-sequence').innerHTML = document.getElementById('fibonacci-sequence').innerHTML + html;

        console.log(fibonacciSequenceArray[i]);
    }
}