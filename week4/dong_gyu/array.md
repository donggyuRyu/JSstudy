```
let array1 = [1, 2, 3, 4, 5, 6, 7, 8]
array1.splice(1,1,17,18)
alert(array1)
```
splice 함수를 통해 배열 안의 값을 지우고 채울수 있다.
```
let arraycopy = array1.slice(2,4)
alert(arraycopy)
```
slice함수를 통해 배열을 복사할 수 있다. array index값이 2를 포함해서 4까지 복사한다.(4는 포함X)
```
let arrayadd = array1.concat([9,10],11,12)
alert(arrayadd)
```
concat함수를 통해 기존배열에 인수를 추가할 수도 있다.
```
array1.forEach((item, index, array)=>{
    alert(`${item} is at index ${index} in ${array}`)
})
```
forEach함수로 각각의 배열을 실행할 수 있다. 
```

alert(array1.indexOf(3));
alert(array1.includes(4));
alert(array1.lastIndexOf(7))
```
indexOf는 배열내에서 원하는 값이 몇번째 있는지, <br>
includes는 원하는 값이 있으면 true 없으면 false를 반환,<br>
lastIndexOf는 indexOf와 비슷하지만 마지막에서부터 찾는다.<br>
값을 찾을때는 === 연산자를 사용하여 찾는다.
```
let users = [
    { id: 1, name: "Ryu" },
    { id: 2, name: "Rim" },
    { id: 3, name: "Jin" }
]

let user = users.find(item => item.id == 1);
alert(user.name)

let someUser = users.filter(item => item.id < 3);
alert(someUser.length);
```
find 와 filter 함수를 통해 배열내의 값을 찾거나 조건에 맞는 배열을 반환할 수 있다.
```
let arr = [1, -2, 15, 2, 0, 8];
arr.sort((a, b) => a - b)
alert(arr)
```
sort 함수를 통해 배열을 재배열 할 수있다. a-b로 리턴을 하면 배열이 오름차순으로 다시 재배열된다.
```
let names = 'Ryu, Rim, Jin';
let arr = names.split(', ')
for (let name of arr) {
    alert( `${name}에게 보내는 메시지` );
  }
  ```
  split 함수를 통해 배열을 쪼갤 수 있다.<br>
split('')처럼 따옴표사이에 아무것도 적지 않으면 모두 한글자씩 나눠서 쪼개진다.  
```
let names = ['Ryu', 'Rim', 'Jin'];
let arr = names.join('\n');
alert(arr);
```
join은 split과 반대로 배열을 붙이는 역활을 한다.
```
let numArray = [1, 2, 3, 4, 5, 6, 7]
let sum = numArray.reduce((sum, current) => sum + current, 0);
alert(sum)
```
reduce함수를 통해 배열을 누산하여 하나로 나타낼수 있다. 초기값을 지정하지 않으면 배열의 첫번째 값부터 계산하게 된다.
