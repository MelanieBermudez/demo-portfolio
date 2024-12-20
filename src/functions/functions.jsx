// Example array
let numbers = [5, 3, 8, 1, 2];

// Sorting using insertion sort
for (let i = 1; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;

    // Move elements of numbers[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j = j - 1;
    }
    numbers[j + 1] = key;
}

console.log(numbers); // Output: [1, 2, 3, 5, 8]

// Sorting using Bubble Sort with two nested for loops
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Swap the elements if they're in the wrong order
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers); // Output: [1, 2, 3, 5, 8]



function getAverage(scores) {
    let total = scores.reduce((a, b) => a + b, 0);
    return total / scores.length;
}


function hasPassingGrade(score) {
    return (getGrade(score) != 'F' ? true : false);

}


function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let score = getGrade(studentScore) != 'F' ? 'passed' : 'failed';
    return (`Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You ${score} the course.`)

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

function sumAll(arr){
    let totalNumber = 0;
    for (let i=0; i<arr.length; i++) {
       totalNumber+=arr[i];
    }
    return totalNumber;

}
