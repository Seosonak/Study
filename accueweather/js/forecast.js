var url = "https://api.openweathermap.org/data/2.5/weather"
url += "?appid=86f5ac6344ccf10c3e5fe09bb548dd96"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

//현재날씨의 모든정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url

    $.ajax({
        type: "GET", //서버에 get방식으로 요청함
        url: openWeatherAPI += city,
        dataType: "json", //받아올 데이터 타입
        async: false, //비동기X -> false를 찍어서 동기로 되게 만듦 : 결과데이터를 리턴시키기 위해서
        success: function(data) { //API call 성공시
            //console.log(data.main.temp)
            //console.log(data.weather[0].description)
            //console.log(data.wind.speed)
            //console.log(data.dt)
            //console.log(data.weather[0],icon)

            dataObj = data;
        },
        error: function(requset, status, error) { //API call실패시
            console.log("code:" + requset, status);
            console.log("message:" + requset.responseText);
            console.log("error:" + error)
        }

    });

    return dataObj;
}




//지역별 현재 온도 얻어오기
function getCurrentTemp(city) {
    var temp = {}
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            temp.celsius  = Math.floor(data.main.temp)
            temp.icon = data.weather[0].icon
        },
        error: function(requset, status, error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        },

    })
  
    return temp
}

