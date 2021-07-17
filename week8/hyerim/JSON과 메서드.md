# [JSON과 메서드](https://ko.javascript.info/json)

## `JSON.stringify`:
 객체를 JSON으로 바꿈
> let json = JSON.stringify(value[, replacer, space])

    * `value`: 인코딩하려는 값
    * `replacer`: 인코딩 하길 원하는 프로퍼티가 답긴 배열. 또는 매핑 함수
    * `space`: 서식 변경 목적으로 사용할 공백 문자 수 


```javascript
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // string

console.log(json);
// {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
// 인코딩: 정보 형식이 변환처리 됨
// 객체 프로퍼티 이름은 큰따옴표로 감싼다. 
// 문자열은 큰따옴표로 감싼다.(JSON에선 작은따옴표나 백틱 사용 불가)
```

|적용 가능 자료형|무시 되는 프로퍼티
|:--:|:--:|
|객체|함수 프로퍼티(메서드)|
|배열|심볼형 프로퍼티|
|원시형: 문자, 숫자, 불린, null| 값이 undefined|

**주의**: 순환 참조가 있으면 객체를 문자열로 바꾸는 것 불가
```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup은 room을 참조합니다.
room.occupiedBy = meetup; // room은 meetup을 참조합니다.

JSON.stringify(meetup); // Error: Converting circular structure to JSON
```

### replacer
```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'], 2) );
/*
{
  "title": "Conference",
  "participants": [
    {
      "name": "John"
    },
    {
      "name": "Alice"
    }
  ],
  "place": {
    "number": 23
  }
}
*/
```
### space로 가독성 높이기
프로퍼티 앞에 몇 스페이스 띄어 쓸지
### 커스텀 "toJSON"
객체를 JSON으로 바꿀 수 있다.
```javascript
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```
## `JSON.parse()`
: JSON을 객체로 바꿈
> let value = JSON.parse(str, [reviver])
    * `str`: JSON 형식의 문자열
    * `reviver`: 모든 `(key, value)` 쌍을 대상으로 호출되는 function(key, value) 형태의 함수를 값을 변경시킬 수 있습니다.

```javascript
// 중첩 객체 사용 가능
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user.friends ); 
// [0, 1, 2, 3]
```

### reviver 사용하기
```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value); // date를 Date객체로 변환
  return value;
});

alert( meetup.date.getDate() ); // 이제 제대로 동작하네요!
```
```javascript
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // 잘 동작합니다!
```

