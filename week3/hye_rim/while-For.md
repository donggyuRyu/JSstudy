# [2.13 while과 for 반복문](https://ko.javascript.info/while-for)

## 'while'반복문
> while(condition) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp; // 코드<br>
    &nbsp;&nbsp;&nbsp;&nbsp; // '반복문 본문(body)'이라 불림<br>
}

이터레이션(interation 반복): 반복문 본문이 한 번 실행되는 것

'무한' 반복문은 보통 `while(true)`를 쓴다. `break`지시자를 사용해 멈출 수 있다. 

## 'do...while'반복문
> do {<br>
    &nbsp;&nbsp;&nbsp;&nbsp; // 반복문 본문<br>
} while(condition)

본문이 먼저 실행되고 조건을 확인한 후 조건이 truthy인 동안에 본문이 실행된다. 조건이 truthy인지 아닌지에 상관없이, 본문을 최소 한번이라도 실행하고 싶을 때만 사용해야 한다. 

예시
```javascript
let i = 4;
do {
  alert( i );
  i++;
} while (i < 3);

// alert 4
```
```javascript
let i = 4;
while (i < 3) {
    alert(i);
    i++;
}

// alert 없음
```
## 'for'반복문
> for (begin; condition; step) {<br>
&nbsp;&nbsp;&nbsp;&nbsp; // ...반복문 본문 ... <br>
}


구성요소
| &nbsp;| &nbsp;|
|--|--|
|begin| 반복문에 진입할 때 단 한 번 실행됩니다.|
|codintion| 반복마다 해당 조건이 확인됩니다. false이면 반복문을 멈춥니다.|
|body| condition이 truthy일 동안 계속해서 실행됩니다.|
|step| 각 반복의 body가 실행된 이후에 실행됩니다.

```
begin을 실행함
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ ...
```

## 반복문 빠져나오기 `break`
```javascript
let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // (*)

  sum += value;

}
alert( '합계: ' + sum );
```
## 다음 반복으로 넘어가기 `continue`
현재 실행 중인 이터레이션을 멈추고 반복문이 조건을 통과할 때 다음 이터레이션을 강제로 실행시키도록 한다. 
```javascript
for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}
```

## 레이블
> labelName: for(...) { <br>
  &nbsp;&nbsp;&nbsp;&nbsp; ...<br>
  }

레이블은 반복문 앞에 콜론과 함께 쓰이는 식별자이다. `break`이나 `continue` 지시자 위에 있어야 한다. 
```javascript
outer: 
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');
```

# 과제
### 반복문의 마지막 값
답: 1. while의 조건은 i. 본문에 따라 i를 1씩 뺀다면 i는 0이 되고 0은 false이므로 alert이 뜨지 않는다.
### ❗️while 반복문의 출력값 예상하기
### 'for'반복문의 출력값 예상하기
답: 두 경우 모두 0~4까지 출력
### for 반복문을 이용하여 짝수 출력하기
```javascript
for (i = 2; i <= 10; i++) {
    if (i % 2) continue
    console.log(i)
}
```
### 'for'반복문을 'while'반복문으로 바꾸기
```javascript
let i = 0;
while (i < 3) {
    alert(`number ${i}!`)
    i++
}
```

### ❗️사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
### ❗️소수 출력하기




