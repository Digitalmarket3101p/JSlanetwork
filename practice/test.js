function ArrayChallenge(arr) {
  function swapSort(arr) {
    let steps = 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    console.log(sortedArr);
    while (!arraysEqual(arr, sortedArr)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
          const targetIndex = arr[i] - 1;
          console.log("hii", targetIndex);

          [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
          steps++;
        }
      }
    }
    return steps;
  }

  function arraysEqual(arr1, arr2) {
    //
    // console.log(arr1, arr2);
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  return swapSort(arr);
}

// Test the function
const arr = [1, 3, 4, 2];
console.log(ArrayChallenge(arr)); // Output: 2
