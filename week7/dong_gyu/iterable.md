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
