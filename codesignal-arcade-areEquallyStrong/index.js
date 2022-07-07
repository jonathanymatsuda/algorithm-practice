function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft === friendsLeft && yourRight === friendsRight || yourLeft === friendsRight && yourRight === friendsLeft) {
        return true
    } else {
        return false
    }
}
