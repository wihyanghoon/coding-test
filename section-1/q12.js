// 문자열을 대문자로 통일

function solution(str) {
    let result = ''
    for (const strElement of str) {
        let num = strElement.charCodeAt()

        if (!(num >= 65 && num <= 90)) {
            result += strElement.toUpperCase()
        } else {
            result += strElement
        }
    }
    console.log(result)
}

solution('KoreaTimeGood')
