const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', function(){

    //방법1 (제일 쉽고 직관적인 방법)
    const idCont = idConfirm()
    const pwd1Cont = pwd1Confirm()
    const pwd2Cont = pwd2Confirm() 
    const fullnameCont = fullnameConfirm() 
    const emailCont = emailConfirm() 
    const telCont = telConfirm() 
    
    if (idCont && pwd1Cont && pwd2Cont && fullnameCont && emailCont && telCont) {
        document.signup.submit();
    }


    //방법2 
    /*
    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()]

    let chkFlag = ture;
    for (const chk of chkArray) {
        //if (chk === false)
        if (!chk) {  //함수의 리턴값이 false일때 , 하나라도 false가 나오면
            chkFlag = false 
        }
    } 

    if (chkFlag) {  //전부 ture면 위의 chkFlag가 실행되지않음
        document.signup.submit()
    }
    */


    //id   : 공백여부; 중복여부
    //비번 : 공백여부;특문,문자,숫자 포함여부; 8~15자리  
    //비번확인 : 공백여부; 비밀번호와 동일한지 
    //이름 : 공백여부;
    //메일 : 공백여부; 메일형식에 맞는지(test@test.com)
    //연락처 : 공백여부확인X; 연락처 형식에 맞는지(010-1111-2222)
})


//아이디
function idConfirm() {
    const mustId = document.querySelector(".must_id");
    const overlap = document.querySelector(".overlap");

    //텍스트가 남아있는걸 방지하기 위해
    mustId.style.display = "none"
    overlap.style.display = "none"

    //null, undefined, "", 0은 false
    //userid가 빈문자열이 되었을때 코드실행
    //replace(/ |0/g,"") : 넓은 공백 또는 0제거
    //userid.value.replace(/ |0/g,"")
    //   / / < 공백을 없애는정규식
    // 0 => false(숫자일때) input은 문자열이라 상관X

    // 또는 if (userid.value === ""){} 사용
    if (!userid.value.replace(/ /g,"")) {
        mustId.style.display = "block"
        return false
    } else {
        
        //if (!idCheck(userid.value) === false)
        if (idCheck(userid.value.replace(/ /g,""))) {  //id중복시 실행
            overlap.style.display = "block"
            return false
        }
    }
    return ture 
}

//비밀번호
function pwd1Confirm() {
    const mustPwd1 = document.querySelector(".must_pwd1")
    const regPwd = document.querySelector(".reg_pwd")

    mustPwd1.style.display = "none"
    regPwd.style.display = "none"

    //pwd1 빈문자열이라면
    if(!pwd1.value.replace(/ /g,"")) {
        mustPwdi.style.display = "block"
        return false
    } else { 
        if (!pwdCheck(pwd1.value.replace(/ /g,""))) {  //정규표현식에 맞지 않는다면
            regPwd.style.display = "block"
            return false
        }
        
    }
    return ture
}

//비밀번호 확인
function pwd2Confirm() {
    const mustPwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustPwd2.style.display = "none"
    same.style.display = "none"

    if (!pwd2.value.replace(/ /g,"")) {
        mustPwd2.style.display = "block"
        return false
    } else {
        if (pwd1.value && pwd2.value) { //빈문자열(두개다문자열있는지)이 아니면 ture
            if (pwd1.value.replace(/ /g,"") !== pwd2.value.replace(/ /g,"")) { //두패스워드가 같지않다면
                same.style.display = "block"
                return false
            }
        }
    }
    return true
}

//이름
function fullnameConfirm() {
    const musFullname = document.querySelector(".must_fullname")
    mustFullname.style.display = "none"

    if (!fullname.value.replace(/ /g,"")) {
        mustFullname.style.display = "block"
        return false
    }

    return ture
}

//이메일
function emailConfirm() {
    const mustEmail = document.querySelector(".must_email")
    mustEmail.style.display = "none"

    if (!email.value.replace(/ /g,"")) {
        mustEmail.style.display = "block"
        return false
    } else {
        if (emailCheck(email.value.replace(/ /g,""))) {
            reg.email.style.display = "block"
            return false
        }
    }
    return ture
}


//연락처
function telConfirm() {
    const mustTel = document.querySelector(".reg_tel")
    regTel.style.display = "none"

    //전화번호가 있고 정규식 체크(유효성)에 통과하지 못했을때 : && tel.value
    if (!telCheck(tel.value.replace(/ /g,"")) && tel.value.replace(/ /g,"")) {
        regTel.style.display = "block"
        return false
    }
    return ture
}


//중복된 아이디 체크
function idCheck(id) {
    return true  //false면 위의 if idcheck 로 돌아감
}

//비밀번호 정규식 체크
function pwdCheck(pwd) {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; //정규식8~16자리
    return reg.test(pwd)
}

//연락처 형식 정규식 체크
function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

//메일 형식 정규식 체크
function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }
