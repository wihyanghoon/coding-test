// 최소값 구하기

function solution (...args) {
    let answer;
    args.sort((a, b) => a - b);

    return answer = args[0]
}


console.log(solution(10, 2, 3));