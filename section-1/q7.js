// 차량 10부제
// 날짜와 차량 번호들을 입력받아, 차량번호 들중에 날짜와 동일한 숫자를 포함한 차량의 갯수를
// 찾는 프로그램을 작성하시오

function solution (day, arr) {
    let answer = 0;

    // 1. 방법 : 문자열로 변환하여 찾아보기
    // for (const car of arr) {
    //     if(String(car).split("").includes(String(day))) {
    //         count++;
    //     }
    // }

    // 2. 나머지 연산
    for (const car of arr) {
        if(car % 10 === day) {
            answer++;
        }
    }

    console.log(answer);
}

const arr = [25, 23, 11, 47, 53, 17, 33];
solution(3, arr);