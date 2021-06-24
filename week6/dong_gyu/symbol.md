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

