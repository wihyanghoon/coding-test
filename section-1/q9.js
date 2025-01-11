// A를 #으로

function solution(str) {
    // 내장 메서드 사용
    // const result = str.replaceAll('A', '#')

    // 반복문을 이용
    let result = ''
    for (let text of str) {
        if (text === 'A') {
            result += '#'
        } else {
            result += text
        }
    }
    console.log(result)
}

solution('BANANA')
