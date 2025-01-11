// 가장 긴 문장을 찾아라

function solution(str) {
    let max = 0
    let result = ''

    for (const strElement of str) {
        if (max < strElement.length) {
            max = strElement.length
            result = strElement
        }
    }

    return result
}

const arr = ['teacher', 'time', 'student', 'beautiful', 'good']
console.log(solution(arr))
