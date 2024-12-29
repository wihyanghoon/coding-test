// 삼각형 판별하기

function solution(a, b, c) {
    let answer = "YES";
    // 최대값을 담아두는 변수
    let max
    // 파라미터 합계
    let sum = a + b + c;

    if (a > b) {
        max = a;
    } else {
        max = b;
    }

    if (c < max) max = c;

    if((sum-max) > max) {
        return answer
    } else {
        return answer = "NO"
    }
}

console.log(solution(12,5,11))