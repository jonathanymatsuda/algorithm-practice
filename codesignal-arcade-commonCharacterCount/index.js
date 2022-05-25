function solution(s1, s2) {
    const s1Array = [...s1]
    const s2Array = [...s2]
    let counter = 0
    s1Array.forEach(element => {
        if(s2Array.includes(element)) {
            counter++;
            s2Array.splice(s2Array.indexOf(element), 1);
        }
    })
    return counter
}
