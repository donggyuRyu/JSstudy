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
