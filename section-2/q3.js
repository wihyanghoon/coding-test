// 가위 바위 보
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

function solution(count, user1, user2) {
    let winner = []

    for (let i = 0; i < count; i++) {
        // 가위
        if (user1[i] === 1 && user2[i] === 3) {
            winner.push('A')
            // 바위
        } else if (user1[i] === 2) {
            // 보
        } else if (user1[i] === 3) {
        }
    }
}

const count = 5
const user1 = [2, 3, 3, 1, 3]
const user2 = [1, 1, 2, 2, 3]
console.log(solution(arr))
