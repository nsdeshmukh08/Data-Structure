function BubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    // if a[j] is greater that a[j+1] then swap the element.
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

BubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
