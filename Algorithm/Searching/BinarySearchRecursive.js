function BinarySearch(arr, n, start, end) {
  //var start = 0;
  //var end = arr.length - 1;

  //while (start <= end) {
  if (start > end) {
    console.log('Not found');
    return -1;
  }

  mid = (start + end) / 2;
  mid = Math.ceil(mid);
  if (arr[mid] === n) {
    console.log('arr[mid]=====>', arr[mid]);
    return arr[mid];
  } else if (arr[mid] > n) {
    end = mid - 1;
    BinarySearch(arr, n, start, end);
  } else if (arr[mid] < n) {
    start = mid + 1;
    BinarySearch(arr, n, start, end);
  }
}

BinarySearch([1, 2, 3, 4, 5], 1, 0, 4);
