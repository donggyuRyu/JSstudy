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
사용자 방문횟수를 저장하며 한유저가 방문하고 다음에 방문에서 그 유저의 참조값이 null로 바뀌면 자동으로 삭제된다.
