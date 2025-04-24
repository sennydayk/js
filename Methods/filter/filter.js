// customFilter 정의
function customFilter(arr, callback) {
  const result = [];

  for (let i=0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

// 사용 예시
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(numbers, num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
