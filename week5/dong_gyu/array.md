배열에 push를 이용해 요소를 스택 끝에 넣을 수 있다<br>
pop을 이용해 스택 끝 요소를 추출할 수 있다.<br>
shift 를 이용해 배열 앞 요소를 제거 할 수있다.<br>
unshift를 이용해 배열 앞에 요소를 추가한다.<br>
```
let fruits = ["오렌지", "배"];

fruits.unshift('사과');

alert( fruits );
```
fruits배열에 사과가 추가되어 [사과, 오렌지, 배] 가된다.<br>
push와 unshift는 여러개를 추가할 수 있다.
```
fruits.push("오렌지", "배");
fruits.unshift("파인애플", "레몬");
```
push와 pop은 배열의 끝에서 빼거나 추가하는 함수인데 반해, shift와 unshift는 배열의 첫번째 값을 빼거나 추가하는 것이므로 시간이 더 오래걸린다.
```
let fruits = ["사과", "오렌지", "자두"];

for (let fruit of fruits) {
  alert( fruit );
}
```
for of는 배열의 인덱스는 얻을수 없지만 값을 얻을 수 있다.
```
let arr = ["사과", "오렌지", "배"];

for (let key in arr) {
  alert( arr[key] );
}
```
for in은 배열이 아니라 객체와 사용할때 더 효율적이므로 배열에는 잘 사용하지 않는다
```
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' );
```
배열엔 toString 메서드가 구현되어 있어 이를 호출하면 요소를 쉼표로 굽분한 문자열이 반환된다.
