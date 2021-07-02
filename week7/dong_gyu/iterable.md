iterable 객체는 배열을 일반화한 객체.
```
let range = {
  from: 1,
  to: 5
};
```
1부터 5까지 숫자 간격을 가진 range 객체를 이용해 for..of로 Symbol.iterator라는 매소드를 추가한다.<br>
```
range[Symbol.iterator] = function() {
return {
  current: this.from,
  last: this.to,
next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};
};
```
iterator 함수가 끝난뒤에 next()가 호출된다.<br>
이터러블 객체의 핵심은 관심사의 분리에 있다<br>
위 코드에서 range 객체 자체를 이터레이터로 만들면
```
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};
```
range[Symbol.iterator]()가 객체range자체를 반환.

```
for (let char of "test") {
  // 글자 하나당 한 번 실행됩니다(4회 호출).
  alert( char ); // t, e, s, t가 차례대로 출력됨
}
```
문자열은 이터러블이다.

```
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}
```
for..of가 문자열은 순회해서 자동으로 가져온다면 이터레이터를 이용해 수동으로 가져올수도 있다.<br>

유사배열은 for ..of로 추출할 수 없고, push, pop등의 메서드를 지원하지 않는다.
```
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

for (let item of arrayLike) {}
```
위코드는 싱행하면 Symbol.iterator가 없으므로 에러가 발생한다. 이를 해결하기 위해 Array.from 메서드를 이용한다.<br>
```
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike);
alert(arr.pop()); // World
```

Array.from 메서드를 이용해 매핑함수를 선택적으로 넘겨 줄 수도있다.
```
let range = {
  from: 1,
  to: 5
};

let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25
```
range객체의 값에 각자 num*num 맵핑 함수를 넣어줄수 있다.<br>

```
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶
```
다음과 같이 기본 내장 순수메서드에서 지원하지 앟는 서로게이트쌍을 처리하는 slice 함수를 구현할 수 있다.


