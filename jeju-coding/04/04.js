function solution(x) {
    let result = ''

    while (true) {
        // x값을 나눠서 나머지값을 더함
        if (x % 2 === 0) {
            result += '0'
        } else {
            result += '1'
        }
        x = Math.floor(x / 2)
        // x가 1이거나 0일때 종료됨
        if (x === 1 || x === 0) {
            result += String(x)
            break
        }
    }

    return result.split('').reverse().join('')
}

console.log(solution(11))
