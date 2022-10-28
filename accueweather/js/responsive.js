//모바일 햄버거 버튼 클릭시
$(".hamburger").click(function(){
    $(".mobile.hamburger").hide()  //hide() : 해당요소디스플레이none으로 바꾼다
    $(".mobile.close").show() //show(): 디스플레이 block

    $("mobile_menu").empty() //모바일메뉴하위태그 초기화
    var nav = $(".nav").clone()

    $("#mobile_menu").append(nav) //append :선택한요소의 하위에 집어넣음
    $("#mobile_menu").show() 
})

//모바일 햄버거 닫기
$(".close").click(function(){
    $(".mobile.hamburger").show()  
    $(".mobile.close").hide()
    $("#mobile_menu").hide()
})   


//브라우저 리사이징될때 모바일메뉴보이는 버그방지

$(window).resize(function(){
    var width = $(window).width()

    if(width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show()  
            $(".mobile.close").hide()
            $("#mobile_menu").hide()
        }
    }
})