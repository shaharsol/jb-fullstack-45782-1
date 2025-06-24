let count = 1; // 1. initializtion of a counter

while (count <= 100) { // 2. break condition 
    document.write(`${count}<br>`)
    count = count + 1; // 3. counter manipulation
}


// here is the equivalent in for loop:
for(let count = 1; count <= 100; count++) {
    document.write(`${count}<br>`)
}
