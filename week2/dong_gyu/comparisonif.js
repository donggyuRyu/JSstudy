// alert("Zapple">"Apple");
// alert("zapple">"azpple");

// alert(undefined != 0);

// let age = prompt('당신의 나이는?', '');
// let urage = (age > 18) ? alert("곧 성인이네요 호호") : alert("아직 어리시네용 호호");

// let age = prompt('당신의 나이는?', '');
// let urage2 = (age < 6 ) ? "어린이집도 못가겠네~" : 
//             (age < 19) ? "대학교 가야겠네" : 
//             (age < 26) ? "취직 해야겠네~" : 
//             "제가 뭐라 드릴말씀이...";

// alert(urage2)

// if ("0") {
//     alert( 'Hello' );
//   }

// let jsOfficialName = prompt("자바스크립트의 '공식' 이름은 무엇일까요? ",'');

// if (jsOfficialName === "ECMAScript") {
//     alert("Right!")
// } else {
//     alert("모르셨나요? 정답은 ECMAScript 입니다!")
// }

let numberpick = prompt("숫자하나만 입력해주세용", '');

if (numberpick > 0) {
    alert("1");
} else if (numberpick < 0) {
    alert("-1");
} else if (numberpick == 0) {
    alert("0");
}

let result = (a + b < 4) ? "미만" : "이상";

let message = (login == "직원") ? '안녕하세요' :
            (login == '임원') ? '환영합니다' :
            (login == '') ? '로그인이 필요합니다.' :
            ' ';