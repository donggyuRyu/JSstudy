생성자 함수의 첫글자는 반드시 대문자로 시작합니다.<br>
반드시 new를 붙입니다.<br>

```
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);
```

new함수를 실행하면 다음과 같은 알고리즘으로 동작한다.<br>
<li>빈 객체를 만들어 this에 할당.
<li>함수를 싱행후 this에 새로운 프로퍼티를 추가해 this를 수정.
<li>this를 반환.</li>

```
let user = new function() {
this.name = "John";
this.isAdmin = false;
};
```

new function()으로 익명 함수를 만들면 위 함수는 재사용되지 않고 한번만 호출하기 때문에 코드를 캡슐화 할 수 있다.
```
function User() {
  alert(new.target);
}

User();
new User();
```
new.target 프로퍼티는 함수를 호출할때 new를 붙여서 호출했는지 안붙여서 호출했는지 알 수 있게 해준다.<br>

```
function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let john = User("John");
alert(john.name);
```
위 코드처럼 new를 붙이지 않고 호출해도 new를 붙여서 호출한 것 처럼 할 수 있다<br>
그러나 이런식으로 코드를 작성하면 new를 쓰나 안쓰나 동일하기 때문에 코드를 읽는 사람 입장에선 헷갈릴 수 있기에 남발하지 않도록 한다.
```
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" }; 
}

alert( new BigUser().name ); 
```
this와 return이 같이 있다면 return 값을 반환한다.<br>
그러나 return이 원시형을 반환한다면 무시하고 this를 반환한다.
```
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); 
```
생성자 내에 메서드를 더해줘서 sayHi함수를 실행하면 this.name에서 받은 프로퍼티를 sayHi함수로 넘겨서 실행시켜 주는 역활을 한다.
