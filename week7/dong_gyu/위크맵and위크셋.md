자료구조를 구성하느 요소는 자신이 속한 자료구조가 메모리에 남아있는 동안 메모리에서 삭제되지 않는다.<br>
```
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

weakMap.set("test", "Whoops"); 
```
weakMap은 키가 반드시 객체여야 한다. 문자열은 키가될수 없다.<br>
```
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;
```
weakMap키로 사용하고 있는 john은 null로 덮어쓰게 되면 weakMap객체가 위크맵과 메모리에서 자동으로 삭제된다.<br>
set처럼 중복되는 값들을 지우더라도 메모리가 남게되면 이를 수동으로 지워야 하는 경우가 있는데 weakMap은 이를 미연에 방지한다<br>
```
//
let visitsCountMap = new WeakMap();
// 위크맵에 사용자의 방문 횟수를 저장함

// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```
사용자 방문횟수를 저장하며 한유저가 방문하고 다음에 방문에서 그 유저의 참조값이 null로 바뀌면 자동으로 삭제된다.<br>

```
let cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장합니다.
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* 연산 수행 */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}


let obj = {/* ... 객체 ... */};

let result1 = process(obj);
let result2 = process(obj);

obj = null;
```
weakMap은 캐싱을 할때도 유용하게 사용할 수 있다.<br>
let cache = new Map();으로 객체를 형성마지막에obj에 null이 참조되어도 메모리가 지워지지않는다.<br>
<h1>Object.keys, values, entries</h1>
Object.*로 객체를 호출하면 iterable객체가 아닌 배열을 반환한다.<br>
Object.keys, values, entries는 for..in 반복문처럼, 키가 심볼형인 프로퍼티를 무시한다.<br>
심볼형 키만 배열형태로 반환해주는 Object.getOwnPropertySymbols를 사용하거나 Reflect.ownKeys(obj)를 사용해야 한다.<br>
객체에는 map,filter같은 배열전용 메서드를 사용할수 없으나, Object.eentries와 Objeect.fromEntries를 순차적으로 적용하면 사용 가능하다.<br>
```
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat);
```
위와 같이 객체를 배열로 변환해서 map을 이용해 객체의 값을 바꿀수 있다.
