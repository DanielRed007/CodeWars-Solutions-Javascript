
// First solution works
function kangaroo1(kang1, velocity1, kang2, velocity2) {
    // hayar la maxima distancia posible entre los dos kangs:
    // multiplico la velocidad por el salto y le sumo la posicion inicial

    // con esto, tomo la posicion maxima hallada y la divido por los saltos del otro kang
    // si ese resultado no es decimal, se encuentran, respondo "YES", si no, respondo "NO"
    const totalK1 = kang1 + (kang1 * velocity1);
    const totalK2 = kang2 + (kang2 * velocity2);
    const maxDistance = Math.max(...[totalK1,totalK2]);
    const minVelocity = Math.max(...[velocity1,velocity2]);
    console.log(maxDistance / minVelocity)
    return (maxDistance / minVelocity) % 1 !== 0 ? "NO" : "YES";
}

function kangaroo(kang1, velocity1, kang2, velocity2) {
    // hayar la maxima distancia posible entre los dos kangs:
    // multiplico la velocidad por el salto y le sumo la posicion inicial

    // con esto, tomo la posicion maxima hallada y la divido por los saltos del otro kang
    // si ese resultado no es decimal, se encuentran, respondo "YES", si no, respondo "NO"
    const totalK1 = kang1 + (kang1 * velocity1);
    const totalK2 = kang2 + (kang2 * velocity2);
    const maxDistance = Math.max(...[totalK1,totalK2]);
    const minVelocity = Math.max(...[velocity1,velocity2]);
    console.log(maxDistance / minVelocity)
    return (maxDistance / minVelocity) % 1 !== 0 ? "NO" : "YES";
}

// kangaroo(0, 3, 4, 2);
// kangaroo(2, 1, 1, 2);
// 14 4 98 2 "YES"
kangaroo(14, 4, 98, 2);