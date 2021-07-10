# [Date 객체와 날짜](https://ko.javascript.info/date)

**내장 객체 `Date`**
* 날짜 저장
* 날짜 관련 메서드 제공

## 객체 생성
### `new Date()`
현재 날짜와 시간이 저장된 `Date` 객체 반환

### `new Date(millisenconds)`
* UTC 기준 1970년 1월 1일 0시 0분 0초에서 `milliseconds` 밀리초(1/1000 초) 후의 시점이 저장된 Date 객체 반환
* `타임스탬프`: UTC 기준 1970년 1월 1일 0시 0분 0초를 기준으로 흘러간 밀리초를 나타내는 정수
```javascript
// 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

### `new Date(문자열)`
```javascript
let date = new Date("2017-01-26");
alert(date);
// 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀜
// 따라서 얼럿 창엔
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// 혹은
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)등이 
// 출력
```

### `new Date(year, month, date, hours, minutes, seconds, ms)`
* 첫 번째, 두 번째 인수는 필수
* `year`은 반드시 4자리 숫자
* `month`는 `0`(1월) ~ `11`(12월) 사이 숫자
* `date` 값이 없는 경우 1로 처리
* `hours/ minutes/seconds/ms` 값 없는 경우 `0`으로 처리
```javascript
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 2011년 1월 1일, 02시 03분 04.567초
```

## `Date`객체 메서드
* `getFullYear()`: 연도 (네자릿수) 반환. (`getYear()`사용하지 말 것)
* `getMonth()`: 월 반환(0이상 11이하)
* `getDate()`: 일(1이상 31이하) 반환
* `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: 시, 분, 초, 밀리초 반환
* `getDay()`: 일요일~토요일(0~6) 반환
* `getTime()`: 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격인 타임스탬프 반환
* `getTimezoneOffset()`: 현지 시간과 표준 사이의 차이(분)를 반환

* 표준시를 얻고 싶다면 'get'뒤에 'UTC'를 붙여주면 된다.<br>
예) `getUTCFullYear()`
### 날짜 구성요소 설정
* `setFullYear(year, [month], [date])
* `setMonth(month, [date])`
* `setDate(date)`
* `setHours(hour, [min], [sec], [ms])`
* `setMinutes(min, [sec], [ms])`
* `setSeconds(sec, [ms])`
* `setMilliseconds(ms)`
* `setTime(milliseconds)`

```javascriipt
let today = new Date();

today.setHours(0);
alert(today); // 날짜는 변경되지 않고 시만 0으로 변경됩니다.

today.setHours(0, 0, 0, 0);
alert(today); // 날짜는 변경되지 않고 시, 분, 초가 모두 변경됩니다(00시 00분 00초).
```

## 자동고침
범위를 벗어나는 값을 설정하려고 하면 자동 고침 기능이 활성화 되면서 값이 자동으로 수정된다
```javascript
let date = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
alert(date); // 2013년 2월 1일이 출력됩니다.

// 윤년
let leapYear = new Date(2016, 1, 28);
date.setDate(leapYear.getDate() + 2);

alert( leapYear ); // 2016년 3월 1일

// 0이나 음수 가능
let someDate = new Date(2016, 0, 2); // 2016년 1월 2일

someDate.setDate(1); // 1일로 변경합니다.
alert( someDate ); // 01 Jan 2016

someDate.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 전 달의 마지막 날을 설정한 것과 같은 효과를 봅니다.
alert( someDate ); // 31 Dec 2015

someDate.setDate(-1)
alert( someDate ); // 29 Nov 2015
```

## Date 객체를 숫자로 변경해 시간차 측정
```javascript
let start = new Date(); // 츨정 시작

// 원하는 작업을 수행
for (let i = 0; i < 10000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 측정 종료

alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다` )
```

## Date.now()
`Date.now()`는 `Date` 객체를 만들지 않아 `new Date().getTime()`를 사용하는 것보다 빠르고 가비지 컬렉터의 일을 덜어준다

```javascript
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` ); // Date 객체가 아닌 숫자끼리 차감함
```

## 벤치마크 테스트
비교 대상을 두고 성능을 비교하여 시험하고 평가할 때 쓰임
http://mrale.ph
## Date.parse와 문자열
문자열 형식: `YYYY-MM-DDTHH:mm:ss.sssZ`
* `"T"`: 구분기호
* `'Z'`(옵션): +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우엔 UTC+0을 나타냄

```javascript
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);
```

