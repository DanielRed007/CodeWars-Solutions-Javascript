function pillars(numPill, dist, width) {
    const pilars = numPill;
    const distance = dist * 100;
    const pilar = width;

    const result = (distance * (pilars - 1)) + (pilar * (pilars - 2));
    return result > 0 ? result : 0;
}

pillars(1, 10, 10);
pillars(2, 20, 25);
pillars(11, 15, 30); // 15270
pillars(4, 20, 30);  