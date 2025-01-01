// 백설공주와 일곱난쟁이
// 9명의 난쟁이가 나타났다.
// 원래 7명의 난쟁이는 키의 총합이 100이다.
// 난쟁이를 찾아라

function solution (arr) {
    const sum = arr.reduce((a, b)=>a + b, 0);
    const hobit = [];

    // 배열 순회
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            // 특정 데이터 값에서 총합을 뺏을때 100인지 확인
            if(sum - (arr[i] + arr[j]) === 100) {
                // 맞으면 해당 데이터들을 배열에 담는다.
                hobit.push(arr[i], arr[j]);
            }
        }
    }

    const result = arr.filter((item, index)=> !hobit.includes(item))

    console.log(result)
}


const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr);