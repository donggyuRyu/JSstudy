<li>JSON.stringify – 객체를 JSON으로 바꿔줍니다.</li>
<li>JSON.parse – JSON을 객체로 바꿔줍니다.</li>
```
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

JSON.stringify()메서드를 통해 객체를 문자열로 바꿀수 있다.<br>
JSON에서는 백틱(``)과 ('') 작은따옴표를사용할 수 없다.<br>

```
let user = {
  sayHi() { // 무시
    alert("Hello");
  },
  [Symbol("id")]: 123, // 무시
  something: undefined // 무시
};

alert( JSON.stringify(user) ); // {}
```

자바스크립트 특유의 객체 프로퍼티(함수 프로퍼티, 심볼형 프로퍼티, 값이 undefined인 프로퍼티)등은 무시된다.<br>
```
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       
room.occupiedBy = meetup; 

JSON.stringify(meetup); // Error
```
참조가 있는 객체는 문자열로 바꾸는게 불가능하다<br>
replacer를 이용해 원하는 프로퍼티만 JSON으로 인코딩할 수있다.<br>

```
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup은 room을 참조합니다.
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
```
replacer에 title과 participants만 JSON으로 인코딩해서 name이나 place, number등은 출력되지않는다.<br>
모두 출력하고싶다면 <br>
```
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
```
로 고치면 된다.<br>
JSON.stringify(value, replacer, space)에서 space칸에 숫자를 넣으면 그 숫ㅈ자만큼 공백을 들여쓰기해서 가독성을 올릴수있다.<br>
JSON.parse()를 사용해 JSON으로 인코딩된 객체를 다시 객체로 디코딩 할 수 있다.<br>
```
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```
위와같이 중첩객체에도 사용할 수 있다.<br>
중첩객체나 중첩 배열도 있다면 JSON또한 복잡해지므로 JSON포맷을 꼭 지켜야한다.<br>

