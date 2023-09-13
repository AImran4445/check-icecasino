window.onload = function() {
    var s = $("html"),
        t = $(".preloader"),
        n = $(".curr_lang"),
        e = localStorage.lang,
        c = $("#wheel-spinner").data("path"),
        a = ["en", "de", "ru", "pl", "no", "dk", "cz", "ro", "ee", "lv", "lt", "el", "hu", "jp", "pt", "es", "vn", "th", "ph"],
        o = new URLSearchParams(window.location.search).get("lang"),
        l = (new URLSearchParams(window.location.search).get("cc") || "").toLowerCase(),
        r = $(".popup_overlay"),
        i = $("#popup_window_1"),
        d = $("#popup_window_2"),
        _ = $("#popup_window_3");
    if ("en" === e || "en" === o || !e) {
        for (b = 0; b < a.length; b++) s.removeClass(a[b]);
        s.addClass("en"), e = "en"
    }
    for (v = 0; v < a.length; v++)
        if (e === a[v] || o === a[v]) {
            for (b = 0; b < a.length; b++) s.removeClass(a[b]);
            s.addClass(a[v]), e = a[v]
        }
    var u = 0;
    for (v = 0; v < a.length; v++) e === a[v] && (u = 1);
    0 === u && (s.addClass("en"), e = "en");
    var g = ["cl", "ar", "ec"];
    if ("es" === e) {
        for (b = 0; b < a.length; b++) s.removeClass(a[b]);
        for (let a = 0; a < g.length; a++) l === g[a] && s.addClass("es cur_" + g[a])
    }
    document.getElementById("wheel-spinner-img").src = c + "/wheel_" + e + ".png", document.getElementById("text-img").src = c + "/text-" + e + ".png", a.forEach(function(a) {
        s.removeClass(a).addClass(e)
    }), $('.lang_list_item[data-lang="' + e + '"]').addClass("curr").siblings().removeClass("curr"), n.html($('.lang_list_item[data-lang="' + e + '"]').html()), setTimeout(function() {
        t.fadeOut(), setTimeout(function() {
            s.addClass("hide")
        }, 120)
    }, 120);
    var h = $(".wheel_btn"),
        p = $(".wheel_spinner");
    h.click(function() {
        h.hasClass("spin") && (h.removeClass("spin").addClass("disabled"), p.addClass("wheel_spinner_animated_1").removeClass("wheel_spinner_animated"), setTimeout(function() {
            localStorage.currentSpin_7110 = "7110_spin", $(".bonus_1").fadeIn(), r.fadeIn(), d.fadeIn()
        }, 4500))
    }), "7110_spin" === localStorage.currentSpin_7110 && ($(".bonus_1").fadeIn(), r.fadeIn(), d.fadeIn(), p.removeClass("wheel_spinner_animated").css("transform", "rotate(720deg)"), h.removeClass("spin").addClass("disabled")), "7110_game_2" === localStorage.is_game_2_7110 && (r.fadeIn(), d.fadeIn(), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn(), i.css("display", "none"), $(".scratch_outer").append("<img src='" + c + "/scratch-anim.gif'class='scratch_action'>")), "7110_true" === localStorage.pre_final_step_7110 && (i.css("display", "none"), d.css("display", "none"), r.css("display", "none"), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn(), $(".scratch_outer").append("<img src='" + c + "/scratch-anim.gif'class='scratch_action'>")), "7110_true" === localStorage.final_step_7110 && (localStorage.is_game_2_7110 = "", localStorage.currentSpin_7110 = "", r.fadeIn(), _.fadeIn(), i.css("display", "none"), d.css("display", "none"), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), $(".bonus_1").fadeIn(), $(".bonus_2").fadeIn());
    var m = $(".lang_switcher"),
        f = $(".lang_list"),
        C = $(".lang_list_item");
    m.click(function() {
        f.toggleClass("act")
    }), C.click(function() {
        t.fadeIn(), s.removeClass("hide"), setTimeout(function() {
            t.fadeOut(), s.addClass("hide")
        }, 200);
        var a = $(this).data("lang"),
            e = $(".lang_list_item").map(function(a, e) {
                return $(e).data("lang")
            }).toArray().join(" ");
        s.removeClass(e).addClass(a), localStorage.lang = a, document.getElementById("wheel-spinner-img").src = c + "/wheel_" + a + ".png", document.getElementById("text-img").src = c + "/text-" + a + ".png", $('.lang_list_item[data-lang="' + a + '"]').addClass("curr").siblings().removeClass("curr"), n.html($(this).html())
    }), $(document).mouseup(function(a) {
        m.is(a.target) || 0 !== m.has(a.target).length || f.removeClass("act")
    }), $("#popup_btn_1").click(function() {
        i.fadeOut(), r.fadeOut()
    }), $("#popup_btn_2").click(function() {
        d.fadeOut(), r.fadeOut(), $("#popup_window_2").fadeOut(), $("#game_1").css("display", "none"), $("#game_2").css("display", "block"), localStorage.is_game_2_7110 = "7110_game_2", $(".scratch_outer").append("<img src='" + c + "/scratch-anim.gif'class='scratch_action'>")
    }), $(".scratch_outer").mouseenter(function() {
        $(this).addClass("scratch_outer_hover")
    }), $(".scratch_outer").mouseleave(function() {
        $(this).removeClass("scratch_outer_hover"), $(this).find(".scratch_hover").addClass("scratch_hover_mouseleave")
    }), $(".scratch_outer").click(function() {
        $(this).addClass("scratch_outer_action_1");
        var a = $(this).find(".scratch_action").attr("src") + "?a=" + Math.random();
        $(this).find(".scratch_action").attr("src", a), i.css("display", "none"), d.css("display", "none"), localStorage.is_game_2_7110 = "", localStorage.currentSpin_7110 = "", localStorage.pre_final_step_7110 = "7110_true", $(this).siblings().addClass("scratch_outer_second_bonus"), $(this).hasClass("scratch_outer_second_bonus") && ($(this).css("pointer-events", "none").siblings().css("pointer-events", "none"), setTimeout(function() {
            $(".bonus_2").fadeIn(), r.fadeIn(), _.fadeIn()
        }, 1500), localStorage.final_step_7110 = "7110_true")
    });
    var v, b, w = document.getElementsByClassName("scratch");
    for (v = 0; v < w.length; v++) w[v].addEventListener("click", function() {
        localStorage.scratch_bonus_7110 ? localStorage.scratch_bonus_7110 = localStorage.scratch_bonus_7110 + " " + this.getAttribute("data-scratch") : localStorage.scratch_bonus_7110 = this.getAttribute("data-scratch")
    });
    if (localStorage.scratch_bonus_7110) {
        var S = localStorage.scratch_bonus_7110.split(" ");
        for (b = 0; b < S.length; b++)
            for (v = 0; v < w.length; v++) S[b] === w[v].getAttribute("data-scratch") && w[v].classList.add("used");
        for (b = 0; b < w.length; b++) 0 == w[b].classList.contains("used") && w[b].classList.add("scratch_outer_second_bonus")
    }
};