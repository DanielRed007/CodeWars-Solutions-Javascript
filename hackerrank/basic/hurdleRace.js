
function hurdleRace(k = 0, height = []) {
    const potionValue = Math.max(...height) - k;

    return potionValue > 0 ? potionValue : 0;
}