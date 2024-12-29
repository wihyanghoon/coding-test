// 홀수
// 7개의 자연수를 주고 이들 중 홀수인 자연수를 골라 그 합을 구하고 고른 홀수들의 최소값을 찾는 프로그램

function solution (arr) {
    let odd = [];
    let sum = 0;
    let min = 0;

    // 홀수를 구한다.
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] % 2) !== 0) {
            odd.push(arr[i])
        }
    }

    // 자연수의 합을 구합니다.
    for (let i = 0; i < odd.length; i++) {
        console.log(sum);
        sum += odd[i];
    }

    // 최소값 구하기
    min = Math.min(...odd);

    console.log("홀수 : " + odd);
    console.log("홀수의 합 : " + sum);
    console.log("홀수의 최소값 : " + min);
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);