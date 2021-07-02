<h1>Map</h1>
Map은 키가 있는 데이터를 저장한다. 객체와는 다르게 다양한 자료형을 허용한다는 차이가있다.<br>
<li>new Map() – 맵을 만듭니다.</li>
<li>map.set(key, value) – key를 이용해 value를 저장합니다.</li>
<li>map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.</li>
<li>map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.</li>
<li>map.delete(key) – key에 해당하는 값을 삭제합니다.</li>
<li>map.clear() – 맵 안의 모든 요소를 제거합니다.</li>
<li>map.size – 요소의 개수를 반환합니다.</li>
객체는 키를 문자형으로 변환하지만 맵은 키의 타입을 변환하지 않는다.<br>
```
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```
set은 호출할때마다 맵자신이 반환되어서 체이닝을 할 수있다<br>
<li>map.keys() – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.</li>
<li>map.values() – 각 요소의 값을 모은 이터러블 객체를 반환합니다.</li>
<li>map.entries() – 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환합니다. 이 이터러블 객체는 for..of반복문의 기초로 쓰입니다.</li>
```
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 ...
});
```
배열은 forEach도 지원한다. forEach 메서드는 recipeMap.entries()와 동일합니다.<br>
Object.entries 를 이용해 객체를 맵으로 바꿀수 있다.

```
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));
```
사용해 obj를 배열 Object.entries를 obj를 [ ["name","John"], ["age", 30] ]로 바꾸고 이배열로 새로운 맵을 생성<br>
```
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); 
// obj = { banana: 1, orange: 2, meat: 4 }

```
반대로 Objeect.fromEntries를 이용해 맵을 객체로 바꿀수도 있다.<br>
자료가 맵인데 서드파티 코드에서 자료를 개체형태로 넘겨 받길 원할때 이 방법을 사용한다.<br>
<h1>Set</h1>
셋은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다. 셋에 키가 없는 값이 저장도딘다.<br>
<li>new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.</li>
<li>set.add(value) – 값을 추가하고 셋 자신을 반환합니다.</li>
<li>set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.</li>
<li>set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.</li>
<li>set.clear() – 셋을 비웁니다.</li>
<li>set.size – 셋에 몇 개의 값이 있는지 세줍니다.</li>
```
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert( set.size ); // 3

```
set.add()로 호출을 아무리 많이 호출하더라도 set내의 값에 중복이 없기 때문에 set.size는 3이 호출된다.
