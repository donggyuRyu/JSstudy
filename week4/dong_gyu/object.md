```
let user ={
    name : "John",
    age : 30
}
delete user.name;
alert(user.name);
```
user 객체를 형성하고 그안에 프로퍼티의 키와 값을 넣어서 .을 통해호출할수 있다.
```
user["likes bires"]=true;
```
중간에 space bar가 들어가는 프로퍼티 키를 지정할 때는 대괄호 속에 따옴표를 사용하여야 한다.

```
function makeUser(name, age){
    return {
        name,
        age
    };
}
let user = makeUser("john",30);

alert(user.name);
```
실무에선 기존 구문에서 선언한 프로퍼티 값을 이용하는 경우도 많다.

```
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );
```
다음과 같이 프로퍼티 이름을 지정할때 예약어도 사용할 수 있다.

```
let user = {
    name: "Ryu",
    age: 26,
    isman: true
};

for (let info in user) {
    alert(info);
    alert(user[info]);
}
```
다음과 같이 user 객체를 생성한뒤에 for..in을 통해 반복 호출을 할 수 있다. info에선 프로퍼티의 이름이, user[info]에선 프로퍼티의 값이 출력된다.
```
let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  "1": "미국"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```
다음과 같이 codes객체르 형성에 정수로 프로퍼티 값을 형성하면 호출했을때 49가 먼저나오는 것이 아닌 1이 먼저 출력되는데<br>

```
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  "+1": "미국"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```
이를 방지하기 위해 프로퍼티 이름 앞에 +를 붙여서 프로퍼티 값이 정수로 취급되지 않도록 하면 원하는대로 49부터 출력이 된다.
```
let user = { name: "John" }

let permissions1 = { carView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
```
객체를 복사할때는 보통 참조를 통해 객체를 복사하지만 Object.assign함수를 이용해 복제할 수도 있다.

