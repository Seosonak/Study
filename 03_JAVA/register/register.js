const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', function(){
    
    //id   : 공백여부; 중복여부

    //비번 : 공백여부;특문,문자,숫자 포함여부; 8~15자리
    //비번확인 : 공백여부; 비밀번호와 동일한지 
    //이름 : 공백여부;
    //메일 : 공백여부; 메일형식에 맞는지(test@test.com)
    //연락처 : 공백여부확인X; 연락처 형식에 맞는지(010-1111-2222)
})

function idConfirm() {
    if (!userid.value) {}
}
function pwd1Confirm() {}
function pwd2Confirm() {}
function fullnameConfirm() {}
function emailConfirm() {}
function telConfirm() {}