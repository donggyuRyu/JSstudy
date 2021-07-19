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
