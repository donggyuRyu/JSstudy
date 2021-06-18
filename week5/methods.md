```
let user = {
name: "John",
age: 30
};

user.sayHi = function() {
alert("안녕하세요!");
};

user.sayHi();
```
user에 할당된 sayHi라는 함수를 메서드라고 한다.
```
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }

};

user.sayHi();
```
객체 내부의 this는 해당 객체를 뜻한다. 위 구문에서 this는 객체인 user를 뜻한다. this를 이용하지않고
```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name );
  }

};
```
이처럼 user.name을 사용하게 되면 user이란 객체가 다른변수로 할당되었을때 오류가 날 수있다.
```
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}
user.f = sayHi;
admin.f = sayHi;
```
this는 그 앞의 객체를 받기 때문에 user.f에선 John이, admin.f에선 Admin이 this값이 된다.<br>
엄격모드(use strict)에선 this에 할당된 객체가 없다면 undefinded가 할당된다.
```
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi();
```
화살표 함수 뒤에 this는 화살표 함수 앞의 객체를 할당하는 것이 아니라 외부에서 객체를 할당받는다 위에선 this는 arrow가 아닌 user객체를 받는다.

