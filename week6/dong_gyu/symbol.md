심볼은 유일한 식별자를 만들때 사용한다.<br>
따라서 같은 id의 심볼을 만들어도 두 값은 다르다.
```
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2);
```
심볼은 자동으로 형변환이 안된다.
```
let id = Symbol("id");
alert(id);
```
다음과 같이 id이름을 가진 심볼을 호출할땐 toSting()이나 description으로 호출해야 한다.<br>
심볼은 프로퍼티를 숨기는 기능도 할 수 있다.<br>
```
let user = {
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );
```
서드파티 코드에서 가지고온 user객체를 심볼로 만들어준다 서드파티 코드의 user에 접근할 수 없기 때문에 심볼을 만들어 그 심볼로 user에 식별자를 부여한다.<br>
만약 문자열로 식별자를 만들면 충돌이 발생할 가능성이 있다.
```
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 //
};
```
심볼형 키를 만들땐 대괄호를 이용해야 한다.
```
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); 
alert( "직접 접근한 값: " + user[id] );
```
심볼 프로퍼티는 for .. in반복문에서 배제된다. Object.keys(user)에서도 심볼은 배제된다<br>
그러나 Object.assign은 심볼 프로퍼티도 같이 복사한다.(심볼까지 복사를 하고 싶다면 Object.assign을 사용하면된다.
```
let id = Symbol.for("id"); 
let idAgain = Symbol.for("id");
alert( id === idAgain );
```
전역 심볼 레지스트리를 읽거나 새로운 심볼을 생성하려면 Symbol.for(key)를 사용하면 된다.

```
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) );
```
Symbol.keyFor(변수명)을 이용해 전역 심볼을 찾을 수 있다.<br>
전역 심볼이 아닐때는 이 함수를 이용해도 undefined값을 반환한다. 일반 심볼은 description 프로퍼티를 사용한다.
