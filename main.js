var elementCount = 256;

// Generate a random name list
function generateRandomName() {
    let nameLength = Math.floor(Math.random() * 8) + 3;  // Name length for 3 to 10 symbols
    let name = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < nameLength; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return name;
}

// Generate elementCount unital names
let names = [];
while (names.length < elementCount) {
    let name = generateRandomName();
    if (!names.includes(name)) {
        names.push(name);
    }
}

// Sort name array
names.sort();

// Binary search function
function binarySearch (value) {
    let counter = 1;

    return function (element) {
        let firstEl = 0;
        let lastEl = value.length - 1;

        while (firstEl <= lastEl) {
            let mid = Math.floor((firstEl + lastEl) / 2);
            let centerValue = value[mid];

            if(centerValue === element) {
                let result = ' Name: ' + value[mid] + ' With index: ' + mid;
                let counterFinish = 'Check count ' + counter
                return result + '\n' + counterFinish;
            } else if (element > centerValue){
                counter++;
                firstEl = mid + 1;
            } else {
                counter++;
                lastEl = mid - 1;
            }
        }
        console.log(counter);
        return -1;
    }
}

// Get a random name
function getRandomName() {
    let min = 0;
    let max = elementCount;

    let randomIndex = Math.floor(Math.random() * (max - min) + min);
    return names[randomIndex];
}

// Initial a binary search function
const search = binarySearch(names);

// Algorithm complexity count O(log n)
function calculateMaxIterations(items) {
    const n = items;
    const maxIterations = Math.floor(Math.log2(n + 1));
    return maxIterations;
}

// Show results
document.getElementById("nameResult").innerText = search(getRandomName());
document.getElementById("task-1").innerText = names.map(el => ' ' + el);
document.getElementById("algSum").innerText = calculateMaxIterations(elementCount);
