// customMap 정의
function customMap(arr, callback) {
  const result = [];

  for (let i=0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
};

// 사용예시
const numbers = [1, 2, 3];
const double = customMap(numbers, num => num * 2);
const add = customMap(numbers, num => num + 1);

console.log(double); // [2, 4, 6]
console.log(add); // [2, 3, 4]
