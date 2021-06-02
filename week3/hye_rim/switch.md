# [# switch문](https://ko.javascript.info/switch)
* 특정 변수를 다양한 상황에서 비교할 수 있게 해준다.
* 비교하려는 값과 case 문 값의 형의 값이 같아야 case문이 실행된다. 


## 문법
```javascript
switch(x) {
  case 'value1': // if (x === 'value1')
    ...
    [break]
    
  case 'value2':
    ...
    [break]
    
  default:
    ...
    [break]
```

### 여러 개의 "case"문 묶기
```javascript
// case 3와 case 5는 묶을 수 있다.
let a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}
```

### 내가 활용한 예시
포트폴리오 사이트 만들며 사용했었음. 하지만 `e.target`을 이용한 코드가 훨씬 간단해 아래 첫 번째 코드는 실제 사용하지 않음
```javascript
// 버린 코드
const menuBtns = document.querySelectorAll(".navbar__menu__item");

menuBtns.forEach((menuBtn, index) => {

  menuBtn.addEventListener("click", (e) => {

    switch (index) {

      case 0:

        home.scrollIntoView({ behavior: "smooth" });

        break;

      case 1:

        about.scrollIntoView({ behavior: "smooth" });

        break;

      case 2:

        skills.scrollIntoView({ behavior: "smooth" });

        break;

      case 3:

        work.scrollIntoView({ behavior: "smooth" });

        break;

      case 4:

        testimonials.scrollIntoView({ behavior: "smooth" });

        break;

      case 5:

        contact.scrollIntoView({ behavior: "smooth" });

        break;

    }

  });

});
```
```javascript
// 적용 코드
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const dataLink = target.dataset.link;
  
  navbarMenu.classList.remove("open");
  scrollIntoView(dataLink);
  selectNavItem(target);
});
```

## 과제
### 'switch'문을 'if'으로 변환하기
```javascipt
let browser;

if (browser === 'Edge') {
    alert("Edge를 사용하고 계시네요!")
} else if (browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.')
} else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!')
}
```
### 'if'문을 'switch'문으로 변환하기
```javascipt
let a = +prompt('a?', '')

switch(a) {
    case 0:
        alert(0)
        break

    case 1:
        alert(1)
        break

    case 2:
    case 3:
        alert('2,3')
}
```
