// Activity 1: Two Sum

function twoSum(arr, target) {
    let firstIndex = 0;
    let secondIndex = arr.length-1

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target) 
                return {firstIndex, secondIndex};
        }
    }

    return -1;  
}
console.log(twoSum([1, 4, 2, 6, 3], 5))

// Activity 2: Reverse Integer

/*
function reverseInteger(num) {
    const str = String(num);
    const isNegative = str[0] === '-';

    const numStr = isNegative ? str.slice(1) : str;

    const reversedStr = numStr.split('').reverse().join('');

    let reversedNum = Number(reversedStr);

    if (isNegative) {
        reversedNum = -reversedNum;
    }
    
    return reversedNum;
}

console.log(reverseInteger(-1010900)); 
console.log(reverseInteger(1234)); 
*/

function reverseInteger(num) {
    const isNegative = num < 0;

    num = Math.abs(num);

    let reversedNum = 0;

    while (num > 0) {
        const digit = num % 10; 
        reversedNum = (reversedNum * 10) + digit; 
        num = Math.floor(num / 10); 
    }

    if (isNegative) {
        reversedNum = -reversedNum;
    }

    return reversedNum;
}

console.log(reverseInteger(-1010900)); 
console.log(reverseInteger(1234));  

// Activity 3: Palindrome Number

function isPalindrome(num) {
    if (num < 0) return false;
    if (num === 0) return true;
    if (num >= 0 && num < 10) return true;

    const originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        const digit = num % 10;
        reversedNum = (reversedNum * 10) + digit; 
        num = Math.floor(num / 10); 
    }

    return reversedNum === originalNum;
}

console.log(isPalindrome(121));   
console.log(isPalindrome(-121));  
console.log(isPalindrome(10));   
console.log(isPalindrome(0));     
console.log(isPalindrome(12321)); 

// Activity 4: Merge Two Sorted Lists

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1 !== null) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }

    return dummy.next;
}

function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + ' ');
        current = current.next;
    }
    console.log();
}

let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);

let l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);

let mergedList = mergeTwoLists(l1, l2);

printList(mergedList);

// Activity 5: Valid Parentheses

function isValid(s) {
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    const stack = [];
    
    for (let char of s) {
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (bracketMap[top] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));
console.log(isValid("([)]")); 
console.log(isValid("{[]}")); 
