$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr('id');
        var value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);
    })

    $(".trashBtn").on("click", function () {
        var time = $(this).parent().remove();
    })

    var interval = setInterval(setTime, 1000);
    function setTime() {
        var today = new Date();
        var date = today.getFullYear() + '-' +(today.getMonth()+1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // console.log(date)
        // console.log(time)
        $("p.lead2").empty();
        $("p.lead2").text("Date: " + date);
        $("p.lead2").append("&nbsp;&nbsp;&nbsp;&nbsp;" + "Time: " + time);
    }

    function hourUpdater() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {

            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past")
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        });
    }

    hourUpdater();
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})