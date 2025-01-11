class Stack {
    constructor() {
        this.arr = []
    }

    push(data) {
        this.arr.push(data)
    }

    pop(data) {
        if (this.isEmpty()) return '자료가 비었습니다.'
        this.arr.pop()
    }

    isEmpty() {
        return this.arr.length === 0 ? false : this
    }

    isFull() {}
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack)

stack.pop(40)

console.log(stack)
