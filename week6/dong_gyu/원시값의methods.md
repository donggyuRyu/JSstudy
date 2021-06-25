str.toUpperCase()는 호출될때 문자열 str을 모두 대문자로 바꾸어준다.<br>
n.toFixed(2)는 n을 소수점 2번째자리까지 반올림하여 반환한다.<br>
자바스크립트에선 String/Number/Boolean을 생성자로 사용하지 않는다.<br>
```
alert(null.test); 
```
null/undefined는 메서드가 없다 위 alert는 error가 뜬다. <br>

```
let str = "Hello";

str.test = 5;

alert(str.test);
```

다음코드는 엄격모드에선 error가 발생한다. str이 프로퍼티에 접근하기 위해 래퍼객체가 만들어지는데 엄격모드에선 래퍼객체를 수정할수 없기 때문에 error가 발생한다.<br>
비 엄격모드에선 str.test가 추가되지만 래퍼객체가 바로 삭제되기 때문에 alert창에서 str.test값을 찾을수 없어 undefined가 반환된다.
