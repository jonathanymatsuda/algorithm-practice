function solution(picture) {
    for (let i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*'
    }
    const asterisksToAdd = picture[0].split('').slice().map(x => x = '*').join('')
    picture.splice(0, 0, asterisksToAdd)
    picture.splice(picture.length, 0, asterisksToAdd)
    return picture
}
