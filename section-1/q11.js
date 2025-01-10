// 문자열의 대소문자 갯수 확인

function solution(str) {
  // 갯수를 세는 변수값
  let result = 0

  // 문자열을 순회하는 반복문
  for (let i = 0; i < str.length; i++) {
    // 단어를 하나하나 word의 문자와 비교하여 값이 같다면 result값을 상승
    if (str[i].match(new RegExp(/^[A-Z]/)) !== null) {
      result++
    }
  }

  console.log(result)
}

solution('KoreaTimeGood')
