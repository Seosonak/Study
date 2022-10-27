/*1. pc버전 서브메뉴 관련*/
const menu = document.querySelector('.menu__main') //전체메뉴
const subMenu = document.querySelectorAll('.list__drop') //하위메뉴
const panel = document.querySelector('.header__panel') //하위메뉴 나올때 나오는 판넬
const header = document.querySelector('.header') //전체헤더

//하위메뉴 보여줌
menu.addEventListener('mouseover', function(){
    panel.style.display = 'block';
    subMenu.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})

//하위메뉴 숨김
header.addEventListener('mouseout', function(){
    panel.style.display = 'none'
    subMenu.forEach(function(subMenu){
        subMenu.style.display = 'none'
    })
})

panel.addEventListener('mouseout', function(){

})

/*2. 모바일 버전 메뉴 보이기, 숨기기*/

const Mhamburger = document.querySelector('.mobile.hamburger') //햄버거
const Mclose = document.querySelector('.mobile.close') //닫기버튼
const Mnav = document.querySelector('.header__Mnav') //모바일 메뉴 전체

Mhamburger.addEventListener('click', function(){
    Mnav.style.display = 'block';
})

Mclose.addEventListener('click',function(){
    Mnav.style.display = 'none'
})


/*3. 모바일 하위 메뉴 보이기, 숨기기*/

function showHide(e) {
    const MListDrop = e.children[2]; //내가 선택한 메뉴의 하위메뉴
    const displayAttr = window.getComputedStyle(MListDrop).display
    
    if (displayAttr === 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
}




/*4. width가 767px이상일때 모바일메뉴 보임 방지*/

/* 
    과부하 방지
    https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event 
*/

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    let winWidth = window.innerWidth;

    // 태블릿 사이즈 부터
    if (winWidth >= 767){
        Mnav.style.display = 'none';
    }
});