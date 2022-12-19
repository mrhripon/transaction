document.addEventListener("DOMContentLoaded", function (e) {
  // Script for hamburger menu/mobile menu
  jQuery(".hamburger_menu").on("click", function (e) {
    e.preventDefault();
    jQuery(this).toggleClass("toggled");
    jQuery('.mobile_nav_menu').toggleClass('show');
    jQuery('body').toggleClass('fix');
  });

  // Script for custom collapse 
  if (document.querySelector(".dropdown-trigger") !== null) {
    const triggers = document.querySelectorAll(".dropdown-trigger");

    triggers.forEach((each) => {
      each.addEventListener("click", function (event) {
        event.preventDefault();
        const dropdownParent = each.parentElement;
        dropdownParent.classList.toggle("active");
        const dropContent =
          dropdownParent.querySelector(".dropdown-content");
        if (dropContent === undefined || dropContent === null) return;
        if (dropContent.style.maxHeight) {
          dropContent.style.maxHeight = null;
        } else {
          dropContent.style.maxHeight = `${dropContent.scrollHeight}px`;
        }
      });
    });
  }


  var t = document.getElementById("regions-map");
  if (t) {
    var a = t.querySelectorAll(".region-group"),
      o = function e() {
        a.forEach(function (e) {
          e.classList.remove("region-group_hover");
        });
      };
    t.querySelectorAll(".pin").forEach(function (e) {
      (e.querySelector(".pin-wrapper").style.animationDelay = "".concat(
        1200 + e.getBoundingClientRect().top,
        "ms"
      )),
        e.addEventListener("mouseenter", function (e) {
          o(),
            e.target
              .closest(".region-group")
              .classList.add("region-group_hover");
        }),
        e.addEventListener("click", function (e) {
          var t = e.target.closest(".region-group").id;
          window.open(
            window.regulations_map.find(function (e) {
              return e.id_map === t;
            }).link,
            "_blank"
          );
        }),
        e.addEventListener("mouseleave", o);
    });
    var i = !1,
      s = function e() {
        t.getBoundingClientRect().y < 500 &&
          (t.classList.add("regions-map-animate"),
            i ||
            ((i = !0),
              window.removeEventListener("scroll", e),
              setTimeout(function () {
                t.querySelector("#us").classList.add("region-group_hover");
              }, 3e3)));
      };
    window.addEventListener("scroll", s), s();
  }
});
("use strict");
jQuery(function (e) {
  e(".btn_subscribe").click(function (t) {
    t.preventDefault();
    var a = e("#subscribe_form");
    return (
      e("#subscribe_email").val().length > 1 &&
      e.ajax({
        url: crystal_var.ajax_url,
        type: a.attr("method"),
        data: a.serialize(),
        beforeSend: function e() {
          a.addClass("loading");
        },
        success: function e(t) {
          return a.removeClass("loading"), a[0].reset(), !1;
        },
        error: function e(t) {
          a.removeClass("loading"), console.log("AJAX Error : ", t);
        },
      }),
      !1
    );
  }),
    e("#btn_question").click(function (t) {
      t.preventDefault();
      let a = e("#question_form");
      return (
        e("#question_text").val().length > 1 &&
        e.ajax({
          url: crystal_var.ajax_url,
          type: a.attr("method"),
          data: a.serialize(),
          beforeSend: function e() {
            a.addClass("loading");
          },
          success: function e(t) {
            return (
              a.removeClass("loading"), a[0].reset(), location.reload(), !1
            );
          },
          error: function e(t) {
            a.removeClass("loading"), console.log("AJAX Error : ", t);
          },
        }),
        !1
      );
    });
  let t = e(".event_page--show_past_btn"),
    a = e(".event_page--past_list"),
    o = e(".event_page--show_upcoming_btn"),
    i = e(".event_page--upcoming_list"),
    s = e(".event_page--team_item__image .img--events_team_circle");
  s.hover(
    function () {
      s.css("opacity", "0.6"), e(this).css("opacity", "1");
    },
    function () {
      s.css("opacity", "");
    }
  ),
    o.click(function (e) {
      t.removeClass("active"),
        a.removeClass("active"),
        o.addClass("active"),
        i.addClass("active");
    }),
    t.click(function (e) {
      o.removeClass("active"),
        i.removeClass("active"),
        t.addClass("active"),
        a.addClass("active");
    });
  let n = e(".team_page--toggle_group_btn"),
    r = e(".team_page--toggle_group_container"),
    l = e(".team_page--loop_item"),
    c = e("body .popup_window"),
    d = e(".close_overlay"),
    u = e(".close_people_popup");
  function v() {
    let t = e("body .popup_window .people_info_container");
    c.removeClass("opened").css({ zIndex: -9, opacity: 0 }),
      l.removeClass("active"),
      setTimeout(function () {
        t.remove();
      }, 700);
  }
  n.click(function (t) {
    let a = e(this).attr("data-tab-id"),
      o = e('.team_page--toggle_group_container[data-tab-id="' + a + '"]');
    n.removeClass("active"),
      r.removeClass("active"),
      e(this).addClass("active"),
      o.addClass("active");
  }),
    l.click(function (t) {
      var a, o;
      e(this).addClass("active");
      (a = e(this).attr("data-item")),
        e.ajax({
          type: "POST",
          url: crystal_var.ajax_url,
          data: { action: "popup_team_single", teamID: a },
          beforeSend: function () {
            c.addClass("loading");
          },
          success: function t(a) {
            return (
              c.removeClass("loading"), e(".content_container").html(a), !1
            );
          },
          error: function e(t) {
            console.log("AJAX Error : ", t);
          },
        }),
        (o = t).preventDefault(),
        c
          .addClass("opened")
          .css({ top: 0, zIndex: 999 })
          .animate({ opacity: 1 }, 400);
    }),
    u.click(function (e) {
      v(e);
    }),
    d.click(function (e) {
      v(e);
    }),
    e(document).keyup(function (e) {
      (27 === e.keyCode || 8 === e.keyCode) && v();
    }),
    e(".default-slider").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !1,
      autoplaySpeed: 5e3,
      autoplay: !1,
      slidesToShow: 2,
      nextArrow: '<div class="prev-arrow"><div>',
      prevArrow: '<div class="next-arrow"><div>',
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 720, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    e(window).on("scroll", function () {
      let t = e("header.header");
      e(window).scrollTop() > 0 ? t.addClass("fixed") : t.removeClass("fixed");
    });
  let g = e(".btn_toggle_switcher"),
    p = e(".btn_toggle_switcher__container");
  g.click(function (t) {
    let a = e(this).attr("data-toggle-id"),
      o = e('.btn_toggle_switcher__container[data-toggle-id="' + a + '"]');
    g.removeClass("active"),
      p.removeClass("active"),
      e(this).addClass("active"),
      o.addClass("active");
  });
  var m = e(".blog_filter_cat-toggle"),
    f = e(".blog_search-toggle");
  m.click(function (t) {
    var a = e(".js-toggle_visibility_cat");
    a.hasClass("active") ? a.removeClass("active") : a.addClass("active");
  }),
    f.click(function (t) {
      var a = e(this).parents(".blog_search-container"),
        o = e(".blog_filter_cat-btn");
      a.hasClass("active") ? a.removeClass("active") : a.addClass("active"),
        o.hasClass("till_md:hide")
          ? o.show(400).removeClass("till_md:hide")
          : o.hide(400).addClass("till_md:hide");
    });
});
