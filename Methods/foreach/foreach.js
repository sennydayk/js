// customForeach 정의
function customForeach(arr, callback) {
  for (let i=0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      callback(arr[i]);
    }
  }
}
