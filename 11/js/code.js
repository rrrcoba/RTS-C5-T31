function roll() {
    let d1 = 0, d2 = 0, plus = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0, c10 = 0, c11 = 0, c12 = 0;
    let results = [c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];

    for (let i = 0; i < 36000; i++) {
        d1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        d2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        plus = d1 + d2;
        if (plus == 2) {
            results[0]++;
        }
        if (plus == 3) {
            results[1]++;
        }
        if (plus == 4) {
            results[2]++;
        }
        if (plus == 5) {
            results[3]++;
        }
        if (plus == 6) {
            results[4]++;
        }
        if (plus == 7) {
            results[5]++;
        }
        if (plus == 8) {
            results[6]++;
        }
        if (plus == 9) {
            results[7]++;
        }
        if (plus == 10) {
            results[8]++;
        }
        if (plus == 11) {
            results[9]++;
        }
        if (plus == 12) {
            results[10]++;
        }
    }
    console.log(results);
}