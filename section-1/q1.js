// 세 자리 수 중 최소값
// 반복문 사용금지

function solution(a, b, c) {
    let answer;

    if (a < b) {
        answer = a;
    } else {
        answer = b;
    }

    if (c < answer) answer = c;

    return answer
}

console.log(solution(1,2,3))