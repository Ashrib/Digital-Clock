function clock() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var month = time.getMonth();
    var day = time.getDay();
    var date = time.getDate();
//   Get Month name
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentMonth = months[month];
    var halfOfMonth = currentMonth.slice(0,3);
//   Get Day name
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = days[day];
//   Converting Hours 24 to 12
    if(hr == 0){
        hr = 12;
    };
    if(hr>12){
        hr = hr-12;
    };
//   For AM/PM and 01 format
    hr = (hr < 10) ? "0" + hr:hr;
    min = (min < 10) ? "0" + min:min;
    sec = (sec < 10) ? "0" + sec:sec;
    var pm = (hr >= 12) ?"AM":"PM";

    var timeForm = hr +" : "+ min +" : " + sec;
    document.getElementById("time").innerText = timeForm;
    document.getElementById("pm").innerText = pm;
    document.getElementById("month").innerText = halfOfMonth+",";
    document.getElementById("day").innerText = currentDay;
    document.getElementById("date").innerText = date;

    setTimeout(clock,1000);
};
clock();