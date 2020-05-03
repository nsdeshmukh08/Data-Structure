function BinarySearch(arr, n) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    mid = (start + end) / 2;
    mid = Math.ceil(mid);
    if (arr[mid] === n) {
      console.log('arr[mid]=====>', arr[mid]);
      return arr[mid];
    } else if (arr[mid] > n) {
      end = mid - 1;
    } else if (arr[mid] < n) {
      start = mid + 1;
    }
  }
}

BinarySearch([1, 2, 3, 4, 5], 5);
