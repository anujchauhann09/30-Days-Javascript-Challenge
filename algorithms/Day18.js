// Activity 1: Sorting Algorithms

const arr = [4, 2, 8, 1, 9, 3]

for(let i = 0; i < arr.length-1; i++) { // bubble sort

    for(let j = 1, k = 0; j < arr.length; j++, k++) {

        if(arr[k] > arr[j]) {
            let temp = arr[k]
            arr[k] = arr[j]
            arr[j] = temp
        }    
    }
}

console.log(arr)

const arr2 = [4, 2, 8, 1, 9, 3]

for(let i = 0; i < arr2.length-1; i++) { // selection sort
    let mini = arr2[i];
    let miniIndex = -1;

    for(let j = i+1; j < arr2.length; j++) {
        if(arr2[j] < mini) {
            mini = arr2[j]
            miniIndex = j
        }
    }

    if(miniIndex != -1) {
        let temp = arr2[i]
        arr2[i] = mini
        arr2[miniIndex] = temp
    }
}

console.log(arr2)

function quickSort(arr) {
    if (arr.length <= 1) 
        return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // return [...quickSort(left), pivot, ...quickSort(right)];
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

const arr3 = [ 4, 2, 8, 1, 9, 3 ];
const sortedArray = quickSort(arr3);
console.log(sortedArray); 

// Activity 2: Searching Algorithms

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target)
            return i
    }

    return -1
}

console.log(`The index of value ${3} is ` + linearSearch([1, 2, 3, 4, 5], 3) + ` in [1, 2, 3, 4, 5] array`)

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if(arr[mid] === target)
            return mid
        else if(arr[mid] > target)
            end = mid-1
        else
            start = mid+1
    }
}

console.log(`The index of value ${2} is ` + binarySearch([1, 2, 3, 4, 5], 2) + ` in [1, 2, 3, 4, 5] array`)

// Activity 3: String Algorithms

function countOccurrence(str) {
    let map = {}

    for(let i = 0; i < str.length; i++) {
        if(map[str[i]] === undefined)
            map[str[i]] = 1
        else 
            map[str[i]]++
    }

    for (const key in map) {
        console.log(`Character ${key} occurs ${map[key]} times`)
    }
}

countOccurrence("aabcdabda")

function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let end = 0; end < s.length; end++) {
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }
        
        seen.add(s[end]);

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log("Length of longest substring without repeating characters:", result);

// Activity 4: Array Algorithms

/*
function rotateArray(arr, k) {
    for(let i = arr.length-k, index = 0; i < arr.length; i++, index++) {
        let temp = arr[i]

        for(let j = i; j > 0; j--) {
            arr[j] = arr[j-1]
        }

        console.log(index)
        arr[index] = temp
    }

    console.log("After rotation : ", arr)
}

console.log("Before rotation : " + [1, 2, 3, 4, 5])
rotateArray([1, 2, 3, 4, 5], 2)
*/

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is larger than the array length

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    console.log("After rotation: ", arr);
}

const array = [1, 2, 3, 4, 5];
console.log("Before rotation: " + array);
rotateArray(array, 2);

function mergeArray(arr1, arr2) {
    let arr1Index = 0
    let arr2Index = 0
    let mergedArray = []

    while(arr1Index < arr1.length && arr2Index < arr2.length) {
        if(arr1[arr1Index] < arr2[arr2Index]) {
            mergedArray.push(arr1[arr1Index++])
        }
        else if(arr1[arr1Index] === arr2[arr2Index]) {
            mergedArray.push(arr1[arr1Index++])
            arr2Index++
        }
        else {
            mergedArray.push(arr2[arr2Index++])
        }
    }

    while(arr1Index < arr1.length) {
        mergedArray.push(arr1[arr1Index++])
    }

    while(arr2Index < arr2.length) {
        mergedArray.push(arr2[arr2Index++])
    }

    for(let i = 0; i < mergedArray.length; i++) {
        console.log(mergedArray[i])
    }
}

mergeArray([1, 2, 4, 31], [8, 9, 11, 12])

