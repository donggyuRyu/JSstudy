```
let billion = 1e9; 

alert( 7.3e9 );
```
숫자 옆에 e를 붙이고 그 옆에 원하는 0의 갯수를 적으면 그 숫자를 줄여서 나타낼수 있다.<br>
즉 e는 e오른쪽 수만큼 10의 거듭제곱을 곱하는 것이다.

```
1e-3 = 1 / 1000 (=0.001)
1.23e-6 = 1.23 / 1000000 (=0.00000123)
```

e옆에 -숫자를 적어 소수점 아래의 0의 갯수로 표시할 수 있다.
```
alert( 0xff );
```
0x를 통해 16진수를 표현할 수 있다.
```
let a = 0b11111111; // 255의 2진수
let b = 0o377; //255의 8진수
```
0b를 이용해 2진수, 0o를 이용해 8진수도 나타낼 수 있다.

```
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) ); 
```
toString(base)를 이용해 16진수와 2진수로 숫자를 문자 형으로 변환해 반환할수 있다.
```
alert( 123456..toString(36) );
```
36은 base중 최댓값으로 url을 줄이는 것과 같이 숫자로 된 긴 식별자를 짧게 줄일때 사용한다. toString으로 숫자를 직접 호출하고 싶다면 ..을 사용해야한다<br>
만약 ..을 사용하지 않을 것이라면 (123456).toString(36)으로 사용해야한다.
<h3>Math.floor : 소수점 첫째자리에서 내림</h3> 
<h3>Math.ceil : 소수점 첫째자리에서 올림</h3>
<h3>Math.round : 소수점 첫째자리에서 반올림</h3>
<h3>Math.trunc : 소수부를 무시</h3>

소수점 두번째 자리까지만 남기고 싶은경우엔 
```
let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); 
```
다음과 같이 하거나 toFixed()를 이용하면 된다.

```
alert( 0.1 + 0.2 == 0.3 );
```
다음 결과는 false가 뜨는데 이를 고치기 위해선 toFixed()함수를 이용해 

```
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) );
```
으로 바꾸면 된다.<br>
숫자를 연산하다보면 무한소수가 나오는 경우가 생기기 때문에 필요할 때마다 toFixed함수를 이용해 꼬리를 잘라 어림수를 만들어야한다.

```
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false
```
NaN은 자신을 포함한 그어떤 값과도 같지 않다.

```
alert( isFinite("15") ); //true
alert( isFinite("str") ); //false
alert( isFinite(Infinity) ); //false
```
isFinite(value)는 value를 숫자로 변환하고 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환한다.

```
let num = +prompt("숫자를 입력하세요.", '');

alert( isFinite(num) );
```
isFinite를 통해 입력된 값이 숫자인지 아닌지 검증되는데도 사용한다.<br>
빈 문자열이나 공백만 있는 문자열은 0으로 취급된다.

```
Object.is(NaN, NaN) === true
Object.is(0, -0) === false
```

Object.js는 ===보다 좀더 신뢰할 만한 결과를 보여준다. 내부알고리즘에서 두값을 비교할때 비교 결과가 정확해야 하는 경우엔 이를 사용한다.

```
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12 
alert( parseFloat('12.3.4') ); // 12.3
```

parseInt는 숫자를 읽는 도중 오류가 발생하면 이미 수집된 숫자까지를 반환한ㄷ다. pasreInt는 정수, apsrseFloat는 부동 소숫점숫자를 반환한다.<br>

```
alert( parseInt('a123') );
```
a123같은 문자열을 읽을땐 처음에 a가 숫자가 아니므로 읽는 것을 중지하고 NaN을 반환한다.

```
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255
```
parseInt(str, radix)의 두번째 radix에는 원하는 진수를 지정해 줄때 사용한다. str의 값을 숫자로 반환하고 이를 radix 진수값으로 나타낸다.<br>
<h3>Math.random : 0과 1사이의 난수를 반환(1은 제외)</h3>
<h3>Math.max(a,b,c)/Math.min(a,b,c) : 인수 중 최대/최솟값을 반환</h3>
<h3>Math.pow(n, power) : n을 power번 거듭 제곱한 값을 반환</h3>
