// 문자열 소문자는 대문자, 대문자는 소문자로

function solution(str) {
    let result = ''
    for (const strElement of str) {
        if (strElement === strElement.toUpperCase()) {
            result += strElement.toLowerCase()
        } else {
            result += strElement.toUpperCase()
        }
    }

    return result
}

console.log(solution('KoreaTimeGood'))
