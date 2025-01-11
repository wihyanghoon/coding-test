// 특정 문자를 찾아 그 문자의 갯수를 찾아보자

function solution(str, word) {
    // 갯수를 세는 변수값
    let result = 0

    // 문자열을 순회하는 반복문
    for (let i = 0; i < str.length; i++) {
        // 단어를 하나하나 word의 문자와 비교하여 값이 같다면 result값을 상승
        if (str[i] === word) {
            result++
        }
    }

    //스플릿사용
    const text = str.split(word).length - 1
    console.log(text)

    // for of 사용
    // for (const strElement of str) {
    //     if (strElement === word) {
    //         result++
    //     }
    // }

    console.log(result)
}

solution('COMPUTERPROGRAMMING', 'R')
