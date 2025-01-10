// 문자열의 대소문자 갯수 확인

function solution(str) {
    const arr = ['a', 'b', 'c']

    arr.forEach((item, index, array) => (array[index] = item + item))
}

solution('KoreaTimeGood')
