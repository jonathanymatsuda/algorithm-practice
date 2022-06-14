function solution(a) {
    const team1 = [];
    const team2 = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1.push(a[i])
        } else {
            team2.push(a[i])
        }
    };
    return [team1.reduce((a,b) => a + b, 0), team2.reduce((a,b) => a + b, 0)]
}
