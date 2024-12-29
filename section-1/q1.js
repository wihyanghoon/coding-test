// 세 자리 수 중 최소값

function solution(a, b, c) {
    let answer;

    if (a < b) {
        answer = a;
    } else {
        answer = c;
    }

    if (c < answer) answer = c;

    return answer
}

console.log(solution(1,2,3))