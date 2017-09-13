/**
 * Created by cpc on 2017/9/7.
 */

    $(".part-2 ul li ").on("mouseover", " a", function (e) {
        e.preventDefault();
        $(this).addClass("active").parent().siblings().children(".active").removeClass("active")
        var id=$(this).attr("href");
        console.log(id);
        $(id).addClass("showl").siblings(".showl").removeClass("showl");
    });
