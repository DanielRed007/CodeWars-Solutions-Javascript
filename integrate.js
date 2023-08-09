
function integrate(coefficient, exponent) {
    return (coefficient / (exponent + 1) + "x^" + (exponent + 1));
}

integrate(3,2) // , "1x^3");
integrate(12,5) // , "2x^6");
integrate(20,1) // , "10x^2")
integrate(40,3) // , "10x^4")
integrate(90,2) // , "30x^3")