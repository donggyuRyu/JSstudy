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

## 과제
### 프로퍼티 값 더하기
```javascript
// 방법1
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

function sumSalaries(salaries) {
    let sum = 0
    for(salary of Object.values(salaries)){
        sum += salary
    }
    return sum
}
alert( sumSalaries(salaries) ); // 650
```
```javascript
// 방법2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

alert( sumSalaries(salaries) ); // 650
```

### 프로퍼티 개수 세기
```javascript
let user = {
  name: 'John',
  age: 30
};

function count(obj){
    return Object.keys(obj).length
}

alert( count(user) ); // 2
```
