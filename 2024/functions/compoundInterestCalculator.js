
/*

CONVENTIONS

Principal: The initial amount of the investment
Rate: The Annual rate offered by the fund
months: the amounts of month when the transaction occurs
contributions: an array that represent eventual and possible contributions by month

*/

function compoundInterestProgressionWithContribution(principal, rate, months, contributions = []) {
    // Convert rate to a decimal for calculation
    let rateDecimal = rate / 100;
    let monthlyRate = rateDecimal / 12;
    let progression = [];
    let currentAmount = principal;

    // Sort contributions by month to ensure they are added in the right order
    contributions.sort((a, b) => a.month - b.month);

    for (let month = 1; month <= months; month++) {
        // Apply contributions if any for this month
        const monthContribution = contributions.find(contrib => contrib.month === month);
        if (monthContribution) {
            currentAmount += monthContribution.amount;
        }

        // Calculate interest for the month
        currentAmount *= (1 + monthlyRate);
        
        progression.push({
            month: month,
            amount: currentAmount.toFixed(2)
        });
    }

    return {
        finalAmount: currentAmount.toFixed(2),
        progression: progression
    };
}

// Example usage:
let principal = 30000000; // Initial amount
let rate = 31.68; // Annual interest rate in percentage
let months = 12; // Number of months

// Contributions example: adding $5000 in month 6 and $3000 in month 9
let contributions = [
    // { month: 6, amount: 15000000 },
    // { month: 9, amount: 3000 }
];

const result = compoundInterestProgressionWithContribution(principal, rate, months, contributions);
console.log(result);