// Activity 1: Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    delete() {
        if (this.head === null) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let temp = this.head;
        while (temp.next !== this.tail) {
            temp = temp.next;
        }

        temp.next = null;
        this.tail = temp;
    }

    display() {
        let temp = this.head;

        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const LL = new LinkedList();
LL.addNode(12);
LL.addNode(13);
LL.addNode(14);
LL.addNode(15);

console.log('Original List:');
LL.display();

LL.delete();

console.log('After Deletion:');
LL.display();

console.log(LL);

// Activity 2: Stack

class Stack {
    constructor() {
        this.size = 1001
        this.stack = new Array(this.size)
        this.top = -1
    }

    push(element) {
        if(this.top != this.size-1) {
            this.top++
            this.stack[this.top] = element
            return
        }

        throw new Error("Stack overflow");
    }

    pop() {
        if(this.top != -1) {
            const poppedElement = this.stack[this.top]
            this.top--
            return poppedElement
        }

        throw new Error("Stack underflow");
    }

    peek() {
        if(this.top != -1) 
            return this.stack[this.top]

        throw new Error("Stack is empty");
    }

    display() {
        if(this.top == -1)
            throw new Error("Stack is empty");

        for(let i = 0; i <= this.top; i++) {
            console.log(this.stack[i])
        }
    }
}

const stack = new Stack()

stack.push(22)
stack.push(23)
stack.push(24)
stack.push(25)

console.log("Peek element before pop : " + stack.peek())
stack.pop()
console.log("Peek element after pop : " + stack.peek())

console.log(stack.display())

const strStack = new Stack()
strStack.push('a')
strStack.push('n')
strStack.push('u')
strStack.push('j')

let revStr = ""
revStr += strStack.pop()
revStr += strStack.pop()
revStr += strStack.pop()
revStr += strStack.pop()

console.log("Reversed String : " + revStr)

// Activity 3: Queue

class Queue {
    constructor() {
        this.size = 1001
        this.queue = new Array(this.size)
        this.front = 0
        this.rear = -1
    }

    enqueue(element) {
        if (this.rear === this.size-1)
            throw new Error("Queue overflow");

        this.queue[++this.rear] = element
    }

    dequeue() {
        if (this.front > this.rear)
            throw new Error("Queue underflow"); 

        return this.queue[this.front++]
    }

    getFront() {
        if (this.front > this.rear)
            throw new Error("Queue is empty");

        return this.queue[this.front]
    }

    display() {
        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.queue[i])
        }
    }
}

const queue = new Queue() 
queue.enqueue(33)
queue.enqueue(34)
queue.enqueue(35)
queue.enqueue(36)
queue.display()
console.log("Deleted Element : " + queue.dequeue())
console.log("First Element : " + queue.getFront())
queue.display()

const printerQueue = new Queue()
printerQueue.enqueue(43)
printerQueue.enqueue(44)
printerQueue.enqueue(45)
printerQueue.enqueue(46)

printerQueue.display()

// Activity 4: Binary Tree

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    display() {
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left);
            console.log(node.value);
            this._inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);

console.log("Inorder Traversal : ")
tree.display();
