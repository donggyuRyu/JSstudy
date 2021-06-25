```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`);
```
백틱(``)으로 감싼 문자열중간엔 ${..}으로 원하는 표현식을 삽입할 수 있다.<br>

```
let guestList = `손님:
 * John
 * Pete
 * Mary
`;

alert(guestList);
```
여러 줄에 걸쳐서 문자열을 만들 수도 있다.

```
alert( `My\n`.length ); // 3
```
\n은 특수문자 하나로 취급된다.

```
let str = `Hello`;


alert( str[0] ); // H
alert( str.charAt(0) ); // H
```
문자열의 특정위치인 그랒를 반환하려면 []를 이용하거나 charAt()을 이용하면 된다.<br>
반환하려는 위치에 글자가 없을때 []는 undefined를 charAt()은 빈 문자열을 반환한다.

```
let str = 'Hi';

str = 'h' + str[1]; // 문자열 전체를 교체함

alert( str ); 
```
문자열의 중간에 글자 하나를 바꿀수 없어서 바꾸려면 문자열 전체를 교체해야한다.<br>
```
alert( 'Interface'[0].toUpperCase() );
alert( 'Interface'[3].toLowerCase() );
```
toUpperCase()나 toLowerCase()는 문자열 중간에 있는것도 바꿀 수있다.

```
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
```
indexOf('a',2)를 통해 a가 2번째로 나오는 위치가 어딘지 찍을 수 있다.

```
let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("찾았다!"); 
}
```
다음 코드를 Not 비트연산자 ~이용하여 

```
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( '찾았다!' );
}
```
로 고칠수 있다. 그러나 코드의 직관성을 위해 잘 사용하지 않는편이다.

```
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
```
str.includes() 함수를 이용해 해당 문자열이 있는지 true false여부만 알수 있다.

```
alert( "Widget".includes("id", 3) );
```
includee()에 두번째 인수에는 해당 위치부터 id를 검색하도록 명령할수 있다 3번째부터 "id"가 없으면 false를 반환한다.
