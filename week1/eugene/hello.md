# [2.1 Hello, world!](https://ko.javascript.info/hello-world)

* 웹페이지에 자바스크립트 코드를 추가하기위해 `<script>`태그를 사용한다.
* type과 language 속성은 필수가 아니다.
```
<script type=text/javascript>
<script language=...>
```
* 외부스크립트 파일은 `<script src="위치"></script>`와 같이 삽입한다.
* 내부스크립트가 먼저실행되고 외부스크립트가 실행된다.
* node.js와 같은 서버사이드환경에서 스크립트를 실행하고싶다면 `node 파일명.js`를 입력한다.
* 스크립트를 별도의 파일에 작성하면 브라우저가 스크립트를 다운받아 cache에 저장하기때문에 브라우저는 페이지가 바뀔 때마다 스크립트를 새로 다운받지않고 캐시로부터 스크립트를 가져와 사용한다. 때문에 성능상의 이점이 있다.