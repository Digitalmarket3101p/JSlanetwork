function string(arr) {
  let steps = 0;
  const sortarr = [...arr].sort((a, b) => a - b);
  // console.log(sortarr);
  // console.log(arrayequal(arr, sortarr));
  while (!arrayequal(arr, sortarr)) {
    for (let i = 0; i < arr.length; i++) {
      console.log("nil", arr[i]);
      console.log("k", i + 1);
      if (arr[i] !== i + 1) {
        const target = arr[i] - 1;
        console.log("target", target);
        [arr[i], arr[target]] = [arr[target], arr[i]]; //[3,2]=[2,3]

        steps++;
      }
    }
    return steps;
  }
  function arrayequal(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.log("1");
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("hii");
        return false;
      }
    }
    return true;
  }
}
const arr = [1, 3, 4, 2];
console.log(string(arr));
