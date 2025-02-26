
function bonus(employeeAbsence = [], totalBonus){
    const totalAbscence = employeeAbsence.reduce((prev,next) => prev + next,0);

    const absencePercentage = employeeAbsence.map(absence => absence / totalBonus);

    const estimateBonus = absencePercentage.map(per => Math.ceil(per * totalBonus));

    console.log(estimateBonus);
    console.log(absencePercentage);
}

bonus([18, 15, 12], 851); // -> [230, 276, 345]
bonus([22, 3, 15], 18228); // -> [1860, 13640, 2728]

// bonus([30, 27, 8, 14, 7], 34067); // -> [2772, 3080, 10395, 5940, 11880]

// A $230, B $276, C $345 since 230 * 18 = 276 * 15 = 345 * 12 and 230 + 276 + 345 = 851.