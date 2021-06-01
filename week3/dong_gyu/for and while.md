```
let urage = prompt("당신의 나이는?",'')
do {
    alert("당신의 나이는"+urage+"세 시네요");
    urage--;
} while (urage < 18);
```
<li>do while 문은 while에서 조건을 충족하지 않더라도 반드시 한번은 반복문을 실행하려고 할때 사용한다.

```
let sum = 0;
while(true) {
    let add = prompt("숫자를 입력하세요.", '');
    if(!add) break;

    sum += Number(add)
}
alert("합계 : " + sum);
```
<li>break를 통해 반복문을 취소 할 수도 있다. 
<li>if(!add)를 통해 prompt값을 입력하지않거나 취소했을때 반복문이 멈추도록 한다.

```
let message;
outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`(${i},${j})의 값`, ' ')
        input++
        if (!input) break outer;
        message = `(${i},${j})의 값을 모두더하면`+Number(input)+'입니다.'
    }
}
alert(message);
```
<li>위 코드의 목적은 input 으로 각 값을 전부 더하여 message에 저장한뒤 alert로 표시하려 하였으나 뜻대로 되지 않았다.

```
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) continue;
    alert(i);
}
```
<li>continue를 이용해 if조건에 충족하는 값은 반복문에서 제외하고 다시 다음값부터 반복문을 실행하도록 하였다.

```
let i = 0;
while(i<3){
    alert(`number ${i}!`);
    i++
}
```
<li>0부터 2까지의 값을 찍는 코드로
```
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```
<li>위 코드와 같은 값을 나타낸다.

```
let chooseNum = prompt("100보다 큰 숫자를 입력하세요",'');
while(chooseNum <= 100){
    chooseNum = prompt("100보다 큰수를 입력하시라구용",'');
    if (chooseNum >100 ) break;
}
```
<li>100보다 큰수를 입력할때까지 반복하는 반복문이다.


```
let primeNum = prompt("원하는 숫자까지의 소수", '');
nextPrime:
for (let i = 2; i <= primeNum; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}
```
<li>사용자가 선택한 수까지의 소수를 모두 alert하는 코드로 for문을 중첩하여 소수가 1과 자기자신만으로밖에 나누어지지 않는다는 특성을 이용하였다.
