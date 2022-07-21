/* eslint-disable no-undef */
export function rvaEndPoint(minutesPerRun, numberOfSamples) {

const timeElapsed = 60 * minutesPerRun;

let time = 3;
let cellNumber = 1;
let variation = 21;
let ifTrue = true;
let resultsString = '';
 
while(time < timeElapsed) {
    if (cellNumber === variation) {
        if (ifTrue) {
            time = time + 1;
            variation = variation + 23;
            ifTrue = false;
        } else {
            time = time + 1;
            variation = variation + 22;
            ifTrue = true;
        }
    } else {
        time = time + 2
    };
 
    cellNumber++;
};
 
for(i=0; i <= numberOfSamples-1; i++) {
    resultsString = resultsString + `=D${(cellNumber+1)+(cellNumber*i)}\n`
};

return resultsString
};