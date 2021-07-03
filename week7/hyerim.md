# [5.6 iterable 객체](https://ko.javascript.info/iterable)

이터러블: `for..of`를 사용할 수 있는 객체
```javascript
// Hello 스팰링 출력
let str = "Hello";

// 방법1.
for (let char of str) alert(char);

// 방법2.
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력됩니다.
}
```

## Array.from
이터러블이나 유사배열을 받아 진짜 array로 만들어준다. 
```javascript
// 유사배열
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike);
alert(arr.pop()); // World 
```
```javascript
// 이터러블
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

let arr = Array.from(range);
console.log(arr); // [1, 2, 3, 4, 5]
```

`Array.from`을 사용하면 서로게이트 쌍을 처리할 수 있는 `splice` 구현 가능
```javascript
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// 내장 순수 메서드는 서로게이트 쌍을 지원하지 않습니다.
alert( str.slice(1, 3) ); // 쓰레깃값 출력 (영역이 다른 특수 값)
```
