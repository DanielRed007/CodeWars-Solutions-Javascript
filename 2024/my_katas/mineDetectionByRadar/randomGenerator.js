const { mineDetectionByRadar } = require("./mineDetectionByRadar");

function randomDataGenerator(){
    let data = [];

    for(let x = 0; x < 100; x++){
        const arrayLength = Math.floor(Math.random() * 20)
        const testData = Array.from({length: arrayLength}).map(() => []);

        const randomInput = testData.map(array => {
            const vibration = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            const anomalies = ["0","(","X","#","*"];
            const anomalyIndex = Math.floor(Math.random() * anomalies.length);

            array.push(vibration);
            array.push(anomalies[anomalyIndex]);

            return array;
        });

        data.push(randomInput);
    }

    return data;
}

randomDataGenerator()