function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex;
    let temp;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }
    if (minIndex) {
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log(arr);
}

SelectionSort([2, 3, 4, 5, 6]);
