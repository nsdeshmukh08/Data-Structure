function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
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

SelectionSort([7, 5, 4, 3, 2]);
