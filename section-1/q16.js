// 중복단어 제거

function solution(str) {
    return [...new Set(str)]
}

let str = ['good', 'time', 'good', 'time', 'student']
console.log(solution(str))
