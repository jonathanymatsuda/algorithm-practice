function solution(a, b) {
    if (a.toString() === b.toString()) return true
    let aSwaps = []
    let bSwaps = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            aSwaps.push(a[i])
            bSwaps.push(b[i])
        }
    }
    aSwaps.sort((a,b) => a - b)
    bSwaps.sort((a,b) => a - b)
    if (aSwaps.length === 2 && aSwaps.toString() === bSwaps.toString()) {
        return true
    }
    return false
}
