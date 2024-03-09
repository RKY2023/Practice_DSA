// Pattern
// 10, 12, 21, 23, 32, 34, 


//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');

function sharpees(n){
/* Function to store first n sharpees in an array
Return the array containing the sharpees numbers */
    let counter = 0;
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let j = 0; counter < n;) {
        let num = parseInt(arr[j]);
        let str = '';
       
        let units = num % 10;
        if (counter % 2 == 0) {
            units = (units - 1);
            if (units < 0) {
                continue;
            }
        } else {
            units = (units + 1);
            j++;
            if (units >= 10) {
                continue;
            }
        }
        counter++;
        str = ''+num+''+units;
        console.log(str);
        arr.push(str);
    }
  
    
    
    
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            output = sharpees(inputArr[0])
            for(var i=0;i<output.length;i++)
            {
                console.log(output[i]);
            }   
            process.exit();
            
        })
        

}
readInput();
// //========== User's Code Ends Here ==========

