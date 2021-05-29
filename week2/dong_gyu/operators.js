// alert( null || 0 || 1 );

// alert( 1 && 0 );
// alert( 1 && null && 0);

// alert( alert(1) || alert(3) || 2323 ); // alert 메서드는 undefinde를 반환하기때문

// alert( alert(1) && alert(2) );

// let age = prompt("당신의 나이는?", '');
// if (14 <= age && age <= 90){
//     alert("14세 이상 90세 이하군요");
// } else {
//     alert("14세 미만 90세 초과시군요");
// }

// let age = prompt("당신의 나이는?", '');

// if (age < 14 || age > 90) {
//     alert("14세 이상 90세 이하군요");
// } else {
//     alert("14세 미만 90세 초과시군요");
// }

let username = prompt("사용자 이름을 말씀해주세요.", '');

if (username == "Admin") {
    let passworld = prompt("비밀번호를 말씀해주세요", '')
    if (passworld == 'TheMaster') {
        alert('환영합니다!')
    } else if (passworld != 'TheMaster' && passworld != '' & passworld != null) {
        alert('인증에 실패하였습니다.')
    } else if (passworld == '' || passworld == null) {
        alert('취소되었습니다.')
    }
} else if (username != 'Admin' && username != '' && username != null) {
    alert("사용자를 알 수 없습니다.")
} else if (username == '' || username == null) {
    alert("취소되었습니다.")
}