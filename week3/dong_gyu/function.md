<h1>Function</h1>

```
let userName = 'Ryu';
function changename() {
    userName = 'Rim'
}
alert(userName);
changename();
alert(userName)
```
위 코드에서 changename() 함수가 실행되기 전까지는 userName 변수안의 값이 변하지않는다.<br>

<h3>하지만</h3>

```
let userName = 'Ryu';
function changename() {
    let userName = 'Rim'
    let message = "hello" + userName;
    alert(message);
}
alert(userName);
changename();
alert(userName)
```
위와 같이 changename안에 지역변수로 userName이 선언이 되면 외부변수인 userName값은 바뀌지 않아서<br>
changename()을 실행해도 userName안의 변수값이 그대로 Ryu로 출력이 된다.<br>
함수 안에 변수를 직접 저장하는 방법으로
```
function hello(userName, text){
    alert(text+userName+'!')
}
hello('Ryu', '반갑습니다');
let userName = 'Rim'
hello(userName,'반갑습니다.');
```
다음과 같이 hello함수 내에 userName과 text라는 매개변수값을 저장할 수 있다. 위 코드는<br>
```
function hello(){
    let userName ="Ryu"
    let text = "반갑습니다."
    alert(text+userName+'!')
}
hello();
let userName = 'Rim'
hello();
```
과 다르다. 첫코드는 hello함수에 매개변수로 userName과 text를 저장한뒤에 지역변수로 변환하고 뒤에 코드는 처음부터 함수내에 지역변수로 지정된것이다..<br>
만약 매개변수 두번째 값을 생략하고
```
function hello(userName,text){
    alert(text+userName+'!')
}
hello("Ryu")
```
위와같이 함수를 실행시키면 text값이 undefinded 로 바뀌어서 undefindedRyu! 라고 출력이 된다.<br>
```
function hello(userName,text = anotherFunction()){
    alert(text+userName+'!')
}
hello("Ryu")
```
text값이 없을때는 text = anotherFunction() 으로 인해 hello() 함수가 아닌 anotherFunction()함수가 실행된다.<br>
```
let age = prompt("나이를 알려주세요",18);
function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return confirm('보호자 동의 받았나요?')
    }
}
function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    alert('영화상영')
}
showMovie(age);
```
return을 통해 함수의 실행여부를 따질수도 있다.<br>
위 코드에서 age가 18미만이면 confirm으로 checkAge함수를 실행할지 확인할 수 있고. 그다음 showMovie(age)함수와 연동할 수 있다.<br>
함수의 이름을 지을때는<br>
<li>"show..." - 무언가를 보여줄떄
<li>"get..." – 값을 반환함
<li>"calc..." – 무언가를 계산함
<li>"create..." – 무언가를 생성함
<li>"check..." – 무언가를 확인하고 불린값을 반환함</li>
등 함수명만 보더라도 어떤식으로 작동하는지 알 수 있도록 짓는것이 좋다.

```
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("동의하셨습니다.");
}

function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
}

ask("동의하십니까?", showOk, showCancel);
```
위와 같이 ask함수를 선언하고 ask함수의 question에 yes라고 대답하면 showOk함수가 실행되고 no라고 대답하면 showCancel함수가 실행되는<br>
콜백함수를 실무에서 유용하게 사용할 수 있다.<br>

```
function sum(a, b) {
return a + b;
}
```
위 코드는 함수 선언문으로 함수 선언문은 선언이 되기 전에도 함수를 사용할 수 있다.<br>
```
let sum = function (a, b) {
    return a + b;
};
```
위는 함수 표현식으로 sum 함수가 선언이 된 이후에만 사용이 가능하다.<br>
```
let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");

welcome();
```
화살표 함수를 이용해 함수표현식을 훨씬 간결하게 만들 수 있다.<br>


