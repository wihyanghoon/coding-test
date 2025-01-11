// 보이는 학생
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요.
// (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

function solution(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            result++
        }
    }
    return result
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))
