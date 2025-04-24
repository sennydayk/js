## forEach

### 기본 형태
```javascript
array.forEach((element, index, array) => {
  // 실행할 작업
});
```

- 반환값이 없음
- 보통 console.log, DOM 조작, 누적 변수 수정 등에 사용됨

### forEach에서의 this

```javascript
const person = {
  name: '세연',
  hobbies: ['코딩', '독서', '산책'],
  printHobbies: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(`${this.name}의 취미: ${hobby}`);
    });
  }
};

person.printHobbies();
```

위 코드 실행 시 결과값은

```javascript
undefined의 취미: 코딩
undefined의 취미: 독서
undefined의 취미: 산책
```

형태로 출력됨

`forEach` 내부의 function(hobby)에서의 `this`는 `person`이 아니라,
그냥 일반 함수로 호출되기 때문에 `undefined` 거나 `window` 이다.

#### 해결 방법 1 : thisArg 전달

`Array.prototype.forEach`는 **두 번째 인자로 thisArg** 보내기

```javascript
this.hobbies.forEach(function (hobby) {
  console.log(`${this.name}의 취미: ${hobby}`);
}, this);
```

콜백 함수 안의 `this`가 바깥 함수의 `this`와 같아짐 


#### 해결 방법 2 : 화살표 함수 사용 

```javascript
this.hobbies.forEach((hobby) => {
  console.log(`${this.name}의 취미: ${hobby}`);
});
```

- 화살표 함수는 `this`를 바깥 스코프에서 자동으로 상속받기 때문에 훨씬 편하고 안전
- 그래서 `forEac`h에서 `this`를 쓸 때는 화살표 함수를 권장하는 편
