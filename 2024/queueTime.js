function queueTime(customers, tills) {
    // create an array with total number of available tills
    let totalTills = Array(tills).fill(0);

    // iterate
    for (let i = 0; i < customers.length; i++) {
        // locate the an empty till as the minimum value stored in tills array
        let minTotalTillsIndex = totalTills.indexOf(Math.min(...totalTills));
        // add the current customer time to such till
        totalTills[minTotalTillsIndex] += customers[i];
    }

    // the max value stored is the total time
    return Math.max(...totalTills);
}

queueTime([2,2,3,3,4,4], 2);
queueTime([10,2,3,3], 2);
// queueTime([2,3,10], 2);