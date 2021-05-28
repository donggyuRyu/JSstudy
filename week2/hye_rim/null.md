# [2.12 null 병합 연산자 '??'](https://ko.javascript.info/nullish-coalescing-operator)

> a ?? b

* `a`가 `null`도 아니고 `undefined`도 아니면 `a`
* 그 외의 경우는 `b`
* `x = (a !== null && a !== undefined) ? a : b;`

## ??와 ||의 차이
* `||`는 첫 번째 *truthy* 값을 반환합니다.
* `??`는 첫 번째 *정의된(defined)* 값을 반환합니다.
```javascriipt
let height = 0;

alert(height || 100); // (false || true) => 100
alert(height ?? 100); // 0
```

## 제약
1. 우선순위가 낮아 사용시 `()`를 추가하는게 좋음
2. `&&`나 `||`와 함께 사용 못함 (안정성 이슈)
    - 사용시 에러 발생 `let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'
`
    - 사용 원한다면 괄호 사용해야 함
