function solution() {
    // 빅오 표기법 O(n)
    let sum = 0
    for (let i = 1; i < 101; i++) {
        sum += i
    }
    console.log(sum)

    // 빅오 표기법 0(1)
    let n = 100
    console.log((n * (n + 1)) / 2)
}

solution()
