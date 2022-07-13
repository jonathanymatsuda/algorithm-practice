function solution(inputString) {
    const arrayIP = inputString.split('.')
    if (arrayIP.length !== 4) {
        return false
    }
    for (let i = 0; i < arrayIP.length; i++) {
        if (isNaN(arrayIP[i]) || Number(arrayIP[i]) < 0 || Number(arrayIP[i]) > 255 || arrayIP[i] === '' || arrayIP[i][0] === '0' && arrayIP[i].length === 2) return false
    }
    return true
}
