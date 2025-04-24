## callback 함수

- 자바스크립트의 `Array.prototype.filter`는 배열의 각 요소에 대해 `callback` 함수를 호출
- 그 반환값이 `true`인 요소만 새로운 배열에 포함시킴

---

### filter 메서드의 callback 함수 구조

```javascript
array.filter(callback(element, index, array))
```
- **element** : 현재 순회 중인 배열 요소 값
- **index** : 현재 요소의 인덱스
- **array** : 원본 배열 전체

반환값으로 `true` 혹은 `false`를 반환

### callback 인자 사용 비교

1. 인자 1개만 전달 (`callback(arr[i])`)
  - 기본적인 필터링에는 충분

2. 인자 3개 모두 전달 (`callback(arr[i], i, arr)`)
  - 인덱스 기반 조건, 다른 요소들과 비교 등 보다 복잡한 조건 가능
