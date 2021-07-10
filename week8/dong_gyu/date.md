neww Date()로 혅재 날짜와 시간을 저장할 수 있다.<br>
```
let now = new Date();
alert( now ); //현재 날짜 및 시간
```
new Date(milliseconds)로 1970년 1월 1일 0시 0분 0초에서부터 milliseconds후의 시점으로 Date객체 반환.<br>
```
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```
1970년 1월 1일 0시 0분 이전의 날짜는 -milliseconds로 표시<br>
```
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );
```
new Date(dateString)으로 원하는 날짜를 반환할수 있다.(시간은 코드가 실행되는 시간대에 따라 다르게 나온다)<br>
```
let date = new Date("2017-01-26");
alert(date);
```
new Date(year, month, date, hours, minutes, seconds, ms)으로 정확히 원하는 날짜 및 시간을 저장할 수 있다.<br>
```
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 2011년 1월 1일, 02시 03분 04.567초
```
<li>getFullYear() : 연도(네 자릿수)를 반환합니다.</li>
<li>getMonth() : 월을 반환합니다(0 이상 11 이하).</li>
<li>getDate() : 일을 반환합니다(1 이상 31 이하). getDay가 아니라 getDate이다</li>
<li>getHours(), getMinutes(), getSeconds(), getMilliseconds() : 시, 분, 초, 밀리초를 반환합니다.</li>
<li>getDay() : 일요일을 나타내는 0부터 토요일을 나타내는 6까지의 숫자 중 하나를 반환합니다. </li>
<li>getTime() : 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환합니다.</li>
<li>getTimezoneOffset() : 현지 시간과 표준 시간의 차이(분)를 반환합니다.</li>
set~()메서드를 이용해 날짜 및 시간을 설정 할 수있다.<br>
```
let today = new Date();

today.setHours(0);
alert(today);// 날짜는 변경되지 않고 시만 0으로 변경됩니다.
```
Date()객체는 자동고침이 있어서 범위를 벗어나는 값을 설정하면 자동고침 기능이 활성화 된다.<br>
```
let date = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
alert(date); // 2013년 2월 1일이 출력됩니다.
```
윤년또한 Date객체가 알아서 처리해준다.<br>
```
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 2016년 3월 1일
```
Date.now()메서드를 이용해 코드를 실행하는데 걸린 시간을 계산할 수있다.<br>
```
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );
```
performance.now()메서드는 페이지로딩이 걸린 시간을 밀리초로 반환해준다.
