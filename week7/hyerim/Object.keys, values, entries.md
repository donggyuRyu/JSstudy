# [5.9 Object.keys, values, entries](https://ko.javascript.info/keys-values-entries)

순회에 필요한 메서드: `map.keys()`, `map.values()`, `map.entries()`<br>
위 메서드를 사용할 수 있는 자료구조: `Map`, `Set`, `Array`

```
// 객체에 배열 전용 메서드 사용하는 방법
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```
