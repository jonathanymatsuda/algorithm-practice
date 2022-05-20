function solution(statues) {
    let tracker = 0;
    const chronologicalOrder = statues.sort();
    for (let i = Math.min(...chronologicalOrder); i <= Math.max(...chronologicalOrder); i++) {
        if (!chronologicalOrder.includes(i)) {
            tracker++
        }
    }
    return tracker
}
