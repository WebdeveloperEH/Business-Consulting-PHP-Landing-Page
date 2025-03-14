/*===============================
	Lightbox JS
================================*/

/**!
 * lightgallery.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N;
 * @license GPLv3
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    (t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (t.Lightgallery = e());
  }
})(function () {
  var e, t, s;
  return (function e(t, s, l) {
    function i(r, d) {
      if (!s[r]) {
        if (!t[r]) {
          var a = "function" == typeof require && require;
          if (!d && a) return a(r, !0);
          if (o) return o(r, !0);
          var n = new Error("Cannot find module '" + r + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        var u = (s[r] = { exports: {} });
        t[r][0].call(
          u.exports,
          function (e) {
            var s = t[r][1][e];
            return i(s ? s : e);
          },
          u,
          u.exports,
          e,
          t,
          s,
          l
        );
      }
      return s[r].exports;
    }
    for (
      var o = "function" == typeof require && require, r = 0;
      r < l.length;
      r++
    )
      i(l[r]);
    return i;
  })(
    {
      1: [
        function (t, s, l) {
          !(function (t, s) {
            if ("function" == typeof e && e.amd) e(["exports"], s);
            else if ("undefined" != typeof l) s(l);
            else {
              var i = { exports: {} };
              s(i.exports), (t.lgUtils = i.exports);
            }
          })(this, function (e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (window.getAttribute = function (e) {
                return window[e];
              }),
              (window.setAttribute = function (e, t) {
                window[e] = t;
              }),
              (document.getAttribute = function (e) {
                return document[e];
              }),
              (document.setAttribute = function (e, t) {
                document[e] = t;
              });
            var t = {
              wrap: function e(t, s) {
                if (t) {
                  var l = document.createElement("div");
                  (l.className = s),
                    t.parentNode.insertBefore(l, t),
                    t.parentNode.removeChild(t),
                    l.appendChild(t);
                }
              },
              addClass: function e(t, s) {
                t &&
                  (t.classList ? t.classList.add(s) : (t.className += " " + s));
              },
              removeClass: function e(t, s) {
                t &&
                  (t.classList
                    ? t.classList.remove(s)
                    : (t.className = t.className.replace(
                        new RegExp(
                          "(^|\\b)" + s.split(" ").join("|") + "(\\b|$)",
                          "gi"
                        ),
                        " "
                      )));
              },
              hasClass: function e(t, s) {
                return t.classList
                  ? t.classList.contains(s)
                  : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className);
              },
              setVendor: function e(t, s, l) {
                t &&
                  ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l),
                  (t.style["webkit" + s] = l),
                  (t.style["moz" + s] = l),
                  (t.style["ms" + s] = l),
                  (t.style["o" + s] = l));
              },
              trigger: function e(t, s) {
                var l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                if (t) {
                  var i = new CustomEvent(s, { detail: l });
                  t.dispatchEvent(i);
                }
              },
              Listener: { uid: 0 },
              on: function e(s, l, i) {
                s &&
                  l.split(" ").forEach(function (e) {
                    var l = s.getAttribute("lg-event-uid") || "";
                    t.Listener.uid++,
                      (l += "&" + t.Listener.uid),
                      s.setAttribute("lg-event-uid", l),
                      (t.Listener[e + t.Listener.uid] = i),
                      s.addEventListener(e.split(".")[0], i, !1);
                  });
              },
              off: function e(s, l) {
                if (s) {
                  var i = s.getAttribute("lg-event-uid");
                  if (i) {
                    i = i.split("&");
                    for (var o = 0; o < i.length; o++)
                      if (i[o]) {
                        var r = l + i[o];
                        if ("." === r.substring(0, 1))
                          for (var d in t.Listener)
                            t.Listener.hasOwnProperty(d) &&
                              d.split(".").indexOf(r.split(".")[1]) > -1 &&
                              (s.removeEventListener(
                                d.split(".")[0],
                                t.Listener[d]
                              ),
                              s.setAttribute(
                                "lg-event-uid",
                                s
                                  .getAttribute("lg-event-uid")
                                  .replace("&" + i[o], "")
                              ),
                              delete t.Listener[d]);
                        else
                          s.removeEventListener(r.split(".")[0], t.Listener[r]),
                            s.setAttribute(
                              "lg-event-uid",
                              s
                                .getAttribute("lg-event-uid")
                                .replace("&" + i[o], "")
                            ),
                            delete t.Listener[r];
                      }
                  }
                }
              },
              param: function e(t) {
                return Object.keys(t)
                  .map(function (e) {
                    return (
                      encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    );
                  })
                  .join("&");
              },
            };
            e.default = t;
          });
        },
        {},
      ],
      2: [
        function (t, s, l) {
          !(function (s, i) {
            if ("function" == typeof e && e.amd) e(["./lg-utils"], i);
            else if ("undefined" != typeof l) i(t("./lg-utils"));
            else {
              var o = { exports: {} };
              i(s.lgUtils), (s.lightgallery = o.exports);
            }
          })(this, function (e) {
            "use strict";
            function t(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function s(e, t) {
              if (
                ((this.el = e),
                (this.s = i({}, o, t)),
                this.s.dynamic &&
                  "undefined" !== this.s.dynamicEl &&
                  this.s.dynamicEl.constructor === Array &&
                  !this.s.dynamicEl.length)
              )
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
              return (
                (this.modules = {}),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.hideBartimeout = !1),
                (this.isTouch = "ontouchstart" in document.documentElement),
                this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                (this.items = []),
                this.s.dynamic
                  ? (this.items = this.s.dynamicEl)
                  : "this" === this.s.selector
                  ? this.items.push(this.el)
                  : "" !== this.s.selector
                  ? this.s.selectWithin
                    ? (this.items = document
                        .querySelector(this.s.selectWithin)
                        .querySelectorAll(this.s.selector))
                    : (this.items = this.el.querySelectorAll(this.s.selector))
                  : (this.items = this.el.children),
                (this.___slide = ""),
                (this.outer = ""),
                this.init(),
                this
              );
            }
            var l = t(e),
              i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                };
            !(function () {
              function e(e, t) {
                t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                var s = document.createEvent("CustomEvent");
                return (
                  s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
                );
              }
              return (
                "function" != typeof window.CustomEvent &&
                ((e.prototype = window.Event.prototype),
                void (window.CustomEvent = e))
              );
            })(),
              (window.utils = l.default),
              (window.lgData = { uid: 0 }),
              (window.lgModules = {});
            var o = {
              mode: "lg-slide",
              cssEasing: "ease",
              easing: "linear",
              speed: 600,
              height: "100%",
              width: "100%",
              addClass: "",
              startClass: "lg-start-zoom",
              backdropDuration: 150,
              hideBarsDelay: 6e3,
              useLeft: !1,
              closable: !0,
              loop: !0,
              escKey: !0,
              keyPress: !0,
              controls: !0,
              slideEndAnimatoin: !0,
              hideControlOnEnd: !1,
              mousewheel: !1,
              getCaptionFromTitleOrAlt: !0,
              appendSubHtmlTo: ".lg-sub-html",
              subHtmlSelectorRelative: !1,
              preload: 1,
              showAfterLoad: !0,
              selector: "",
              selectWithin: "",
              nextHtml: "",
              prevHtml: "",
              index: !1,
              iframeMaxWidth: "100%",
              download: !0,
              counter: !0,
              appendCounterTo: ".lg-toolbar",
              swipeThreshold: 50,
              enableSwipe: !0,
              enableDrag: !0,
              dynamic: !1,
              dynamicEl: [],
              galleryId: 1,
            };
            (s.prototype.init = function () {
              var e = this;
              e.s.preload > e.items.length && (e.s.preload = e.items.length);
              var t = window.location.hash;
              if (
                (t.indexOf("lg=" + this.s.galleryId) > 0 &&
                  ((e.index = parseInt(t.split("&slide=")[1], 10)),
                  l.default.addClass(document.body, "lg-from-hash"),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }))),
                e.s.dynamic)
              )
                l.default.trigger(this.el, "onBeforeOpen"),
                  (e.index = e.s.index || 0),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }));
              else
                for (var s = 0; s < e.items.length; s++)
                  !(function (t) {
                    l.default.on(e.items[t], "click.lgcustom", function (s) {
                      s.preventDefault(),
                        l.default.trigger(e.el, "onBeforeOpen"),
                        (e.index = e.s.index || t),
                        l.default.hasClass(document.body, "lg-on") ||
                          (e.build(e.index),
                          l.default.addClass(document.body, "lg-on"));
                    });
                  })(s);
            }),
              (s.prototype.build = function (e) {
                var t = this;
                t.structure();
                for (var s in window.lgModules)
                  t.modules[s] = new window.lgModules[s](t.el);
                t.slide(e, !1, !1),
                  t.s.keyPress && t.keyPress(),
                  t.items.length > 1 &&
                    (t.arrow(),
                    setTimeout(function () {
                      t.enableDrag(), t.enableSwipe();
                    }, 50),
                    t.s.mousewheel && t.mousewheel()),
                  t.counter(),
                  t.closeGallery(),
                  l.default.trigger(t.el, "onAfterOpen"),
                  l.default.on(
                    t.outer,
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      l.default.removeClass(t.outer, "lg-hide-items"),
                        clearTimeout(t.hideBartimeout),
                        (t.hideBartimeout = setTimeout(function () {
                          l.default.addClass(t.outer, "lg-hide-items");
                        }, t.s.hideBarsDelay));
                    }
                  );
              }),
              (s.prototype.structure = function () {
                var e = "",
                  t = "",
                  s = 0,
                  i = "",
                  o,
                  r = this;
                for (
                  document.body.insertAdjacentHTML(
                    "beforeend",
                    '<div class="lg-backdrop"></div>'
                  ),
                    l.default.setVendor(
                      document.querySelector(".lg-backdrop"),
                      "TransitionDuration",
                      this.s.backdropDuration + "ms"
                    ),
                    s = 0;
                  s < this.items.length;
                  s++
                )
                  e += '<div class="lg-item"></div>';
                if (
                  (this.s.controls &&
                    this.items.length > 1 &&
                    (t =
                      '<div class="lg-actions"><div class="lg-prev lg-icon">' +
                      this.s.prevHtml +
                      '</div><div class="lg-next lg-icon">' +
                      this.s.nextHtml +
                      "</div></div>"),
                  ".lg-sub-html" === this.s.appendSubHtmlTo &&
                    (i = '<div class="lg-sub-html"></div>'),
                  (o =
                    '<div class="lg-outer ' +
                    this.s.addClass +
                    " " +
                    this.s.startClass +
                    '"><div class="lg" style="width:' +
                    this.s.width +
                    "; height:" +
                    this.s.height +
                    '"><div class="lg-inner">' +
                    e +
                    '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
                    t +
                    i +
                    "</div></div>"),
                  document.body.insertAdjacentHTML("beforeend", o),
                  (this.outer = document.querySelector(".lg-outer")),
                  (this.___slide = this.outer.querySelectorAll(".lg-item")),
                  this.s.useLeft
                    ? (l.default.addClass(this.outer, "lg-use-left"),
                      (this.s.mode = "lg-slide"))
                    : l.default.addClass(this.outer, "lg-use-css3"),
                  r.setTop(),
                  l.default.on(
                    window,
                    "resize.lg orientationchange.lg",
                    function () {
                      setTimeout(function () {
                        r.setTop();
                      }, 100);
                    }
                  ),
                  l.default.addClass(this.___slide[this.index], "lg-current"),
                  this.doCss()
                    ? l.default.addClass(this.outer, "lg-css3")
                    : (l.default.addClass(this.outer, "lg-css"),
                      (this.s.speed = 0)),
                  l.default.addClass(this.outer, this.s.mode),
                  this.s.enableDrag &&
                    this.items.length > 1 &&
                    l.default.addClass(this.outer, "lg-grab"),
                  this.s.showAfterLoad &&
                    l.default.addClass(this.outer, "lg-show-after-load"),
                  this.doCss())
                ) {
                  var d = this.outer.querySelector(".lg-inner");
                  l.default.setVendor(
                    d,
                    "TransitionTimingFunction",
                    this.s.cssEasing
                  ),
                    l.default.setVendor(
                      d,
                      "TransitionDuration",
                      this.s.speed + "ms"
                    );
                }
                setTimeout(function () {
                  l.default.addClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  );
                }),
                  setTimeout(function () {
                    l.default.addClass(r.outer, "lg-visible");
                  }, this.s.backdropDuration),
                  this.s.download &&
                    this.outer
                      .querySelector(".lg-toolbar")
                      .insertAdjacentHTML(
                        "beforeend",
                        '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                      ),
                  (this.prevScrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop);
              }),
              (s.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                  var e = window.innerHeight,
                    t = (e - parseInt(this.s.height, 10)) / 2,
                    s = this.outer.querySelector(".lg");
                  e >= parseInt(this.s.height, 10)
                    ? (s.style.top = t + "px")
                    : (s.style.top = "0px");
                }
              }),
              (s.prototype.doCss = function () {
                var e = function e() {
                  var t = [
                      "transition",
                      "MozTransition",
                      "WebkitTransition",
                      "OTransition",
                      "msTransition",
                      "KhtmlTransition",
                    ],
                    s = document.documentElement,
                    l = 0;
                  for (l = 0; l < t.length; l++) if (t[l] in s.style) return !0;
                };
                return !!e();
              }),
              (s.prototype.isVideo = function (e, t) {
                if (!e)
                  throw new Error(
                    "Make sure that slide " + t + " has an image/video src"
                  );
                var s;
                if (
                  ((s = this.s.dynamic
                    ? this.s.dynamicEl[t].html
                    : this.items[t].getAttribute("data-html")),
                  !e && s)
                )
                  return { html5: !0 };
                var l = e.match(
                    /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                  ),
                  i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                  o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                  r = e.match(
                    /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                  );
                return l
                  ? { youtube: l }
                  : i
                  ? { vimeo: i }
                  : o
                  ? { dailymotion: o }
                  : r
                  ? { vk: r }
                  : void 0;
              }),
              (s.prototype.counter = function () {
                this.s.counter &&
                  this.outer
                    .querySelector(this.s.appendCounterTo)
                    .insertAdjacentHTML(
                      "beforeend",
                      '<div id="lg-counter"><span id="lg-counter-current">' +
                        (parseInt(this.index, 10) + 1) +
                        '</span> / <span id="lg-counter-all">' +
                        this.items.length +
                        "</span></div>"
                    );
              }),
              (s.prototype.addHtml = function (e) {
                var t = null,
                  s;
                if (
                  (this.s.dynamic
                    ? (t = this.s.dynamicEl[e].subHtml)
                    : ((s = this.items[e]),
                      (t = s.getAttribute("data-sub-html")),
                      this.s.getCaptionFromTitleOrAlt &&
                        !t &&
                        ((t = s.getAttribute("title")),
                        t &&
                          s.querySelector("img") &&
                          (t = s.querySelector("img").getAttribute("alt")))),
                  "undefined" != typeof t && null !== t)
                ) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.s.subHtmlSelectorRelative && !this.s.dynamic
                        ? s.querySelector(t).innerHTML
                        : document.querySelector(t).innerHTML);
                } else t = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo
                  ? (this.outer.querySelector(
                      this.s.appendSubHtmlTo
                    ).innerHTML = t)
                  : this.___slide[e].insertAdjacentHTML("beforeend", t),
                  "undefined" != typeof t &&
                    null !== t &&
                    ("" === t
                      ? l.default.addClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )
                      : l.default.removeClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )),
                  l.default.trigger(this.el, "onAfterAppendSubHtml", {
                    index: e,
                  });
              }),
              (s.prototype.preload = function (e) {
                var t = 1,
                  s = 1;
                for (
                  t = 1;
                  t <= this.s.preload && !(t >= this.items.length - e);
                  t++
                )
                  this.loadContent(e + t, !1, 0);
                for (s = 1; s <= this.s.preload && !(e - s < 0); s++)
                  this.loadContent(e - s, !1, 0);
              }),
              (s.prototype.loadContent = function (e, t, s) {
                var i = this,
                  o = !1,
                  r,
                  d,
                  a,
                  n,
                  u,
                  c,
                  g = function e(t) {
                    for (var s = [], l = [], i = 0; i < t.length; i++) {
                      var o = t[i].split(" ");
                      "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]);
                    }
                    for (var r = window.innerWidth, a = 0; a < s.length; a++)
                      if (parseInt(s[a], 10) > r) {
                        d = l[a];
                        break;
                      }
                  };
                if (i.s.dynamic) {
                  if (
                    (i.s.dynamicEl[e].poster &&
                      ((o = !0), (a = i.s.dynamicEl[e].poster)),
                    (c = i.s.dynamicEl[e].html),
                    (d = i.s.dynamicEl[e].src),
                    i.s.dynamicEl[e].responsive)
                  ) {
                    var f = i.s.dynamicEl[e].responsive.split(",");
                    g(f);
                  }
                  (n = i.s.dynamicEl[e].srcset), (u = i.s.dynamicEl[e].sizes);
                } else {
                  if (
                    (i.items[e].getAttribute("data-poster") &&
                      ((o = !0), (a = i.items[e].getAttribute("data-poster"))),
                    (c = i.items[e].getAttribute("data-html")),
                    (d =
                      i.items[e].getAttribute("href") ||
                      i.items[e].getAttribute("data-src")),
                    i.items[e].getAttribute("data-responsive"))
                  ) {
                    var h = i.items[e]
                      .getAttribute("data-responsive")
                      .split(",");
                    g(h);
                  }
                  (n = i.items[e].getAttribute("data-srcset")),
                    (u = i.items[e].getAttribute("data-sizes"));
                }
                var m = !1;
                i.s.dynamic
                  ? i.s.dynamicEl[e].iframe && (m = !0)
                  : "true" === i.items[e].getAttribute("data-iframe") &&
                    (m = !0);
                var p = i.isVideo(d, e);
                if (!l.default.hasClass(i.___slide[e], "lg-loaded")) {
                  if (m)
                    i.___slide[e].insertAdjacentHTML(
                      "afterbegin",
                      '<div class="lg-video-cont" style="max-width:' +
                        i.s.iframeMaxWidth +
                        '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                        d +
                        '"  allowfullscreen="true"></iframe></div></div>'
                    );
                  else if (o) {
                    var v = "";
                    (v =
                      p && p.youtube
                        ? "lg-has-youtube"
                        : p && p.vimeo
                        ? "lg-has-vimeo"
                        : "lg-has-html5"),
                      i.___slide[e].insertAdjacentHTML(
                        "beforeend",
                        '<div class="lg-video-cont ' +
                          v +
                          ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                          a +
                          '" /></div></div>'
                      );
                  } else
                    p
                      ? (i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                        ),
                        l.default.trigger(i.el, "hasVideo", {
                          index: e,
                          src: d,
                          html: c,
                        }))
                      : i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                            d +
                            '" /></div>'
                        );
                  if (
                    (l.default.trigger(i.el, "onAferAppendSlide", { index: e }),
                    (r = i.___slide[e].querySelector(".lg-object")),
                    u && r.setAttribute("sizes", u),
                    n)
                  ) {
                    r.setAttribute("srcset", n);
                    try {
                      picturefill({ elements: [r[0]] });
                    } catch (e) {
                      console.error(
                        "Make sure you have included Picturefill version 2"
                      );
                    }
                  }
                  ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e),
                    l.default.addClass(i.___slide[e], "lg-loaded");
                }
                l.default.on(
                  i.___slide[e].querySelector(".lg-object"),
                  "load.lg error.lg",
                  function () {
                    var t = 0;
                    s &&
                      !l.default.hasClass(document.body, "lg-from-hash") &&
                      (t = s),
                      setTimeout(function () {
                        l.default.addClass(i.___slide[e], "lg-complete"),
                          l.default.trigger(i.el, "onSlideItemLoad", {
                            index: e,
                            delay: s || 0,
                          });
                      }, t);
                  }
                ),
                  p &&
                    p.html5 &&
                    !o &&
                    l.default.addClass(i.___slide[e], "lg-complete"),
                  t === !0 &&
                    (l.default.hasClass(i.___slide[e], "lg-complete")
                      ? i.preload(e)
                      : l.default.on(
                          i.___slide[e].querySelector(".lg-object"),
                          "load.lg error.lg",
                          function () {
                            i.preload(e);
                          }
                        ));
              }),
              (s.prototype.slide = function (e, t, s) {
                for (var i = 0, o = 0; o < this.___slide.length; o++)
                  if (l.default.hasClass(this.___slide[o], "lg-current")) {
                    i = o;
                    break;
                  }
                var r = this;
                if (!r.lGalleryOn || i !== e) {
                  var d = this.___slide.length,
                    a = r.lGalleryOn ? this.s.speed : 0,
                    n = !1,
                    u = !1;
                  if (!r.lgBusy) {
                    if (this.s.download) {
                      var c;
                      (c = r.s.dynamic
                        ? r.s.dynamicEl[e].downloadUrl !== !1 &&
                          (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src)
                        : "false" !==
                            r.items[e].getAttribute("data-download-url") &&
                          (r.items[e].getAttribute("data-download-url") ||
                            r.items[e].getAttribute("href") ||
                            r.items[e].getAttribute("data-src"))),
                        c
                          ? (document
                              .getElementById("lg-download")
                              .setAttribute("href", c),
                            l.default.removeClass(r.outer, "lg-hide-download"))
                          : l.default.addClass(r.outer, "lg-hide-download");
                    }
                    if (
                      (l.default.trigger(r.el, "onBeforeSlide", {
                        prevIndex: i,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      }),
                      (r.lgBusy = !0),
                      clearTimeout(r.hideBartimeout),
                      ".lg-sub-html" === this.s.appendSubHtmlTo &&
                        setTimeout(function () {
                          r.addHtml(e);
                        }, a),
                      this.arrowDisable(e),
                      t)
                    ) {
                      var g = e - 1,
                        f = e + 1;
                      0 === e && i === d - 1
                        ? ((f = 0), (g = d - 1))
                        : e === d - 1 && 0 === i && ((f = 0), (g = d - 1)),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-prev-slide"),
                          "lg-prev-slide"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-current"),
                          "lg-current"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-next-slide"),
                          "lg-next-slide"
                        ),
                        l.default.addClass(r.___slide[g], "lg-prev-slide"),
                        l.default.addClass(r.___slide[f], "lg-next-slide"),
                        l.default.addClass(r.___slide[e], "lg-current");
                    } else {
                      l.default.addClass(r.outer, "lg-no-trans");
                      for (var h = 0; h < this.___slide.length; h++)
                        l.default.removeClass(
                          this.___slide[h],
                          "lg-prev-slide"
                        ),
                          l.default.removeClass(
                            this.___slide[h],
                            "lg-next-slide"
                          );
                      e < i
                        ? ((u = !0),
                          0 !== e || i !== d - 1 || s || ((u = !1), (n = !0)))
                        : e > i &&
                          ((n = !0),
                          e !== d - 1 || 0 !== i || s || ((u = !0), (n = !1))),
                        u
                          ? (l.default.addClass(
                              this.___slide[e],
                              "lg-prev-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-next-slide"
                            ))
                          : n &&
                            (l.default.addClass(
                              this.___slide[e],
                              "lg-next-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-prev-slide"
                            )),
                        setTimeout(function () {
                          l.default.removeClass(
                            r.outer.querySelector(".lg-current"),
                            "lg-current"
                          ),
                            l.default.addClass(r.___slide[e], "lg-current"),
                            l.default.removeClass(r.outer, "lg-no-trans");
                        }, 50);
                    }
                    r.lGalleryOn
                      ? (setTimeout(function () {
                          r.loadContent(e, !0, 0);
                        }, this.s.speed + 50),
                        setTimeout(function () {
                          (r.lgBusy = !1),
                            l.default.trigger(r.el, "onAfterSlide", {
                              prevIndex: i,
                              index: e,
                              fromTouch: t,
                              fromThumb: s,
                            });
                        }, this.s.speed))
                      : (r.loadContent(e, !0, r.s.backdropDuration),
                        (r.lgBusy = !1),
                        l.default.trigger(r.el, "onAfterSlide", {
                          prevIndex: i,
                          index: e,
                          fromTouch: t,
                          fromThumb: s,
                        })),
                      (r.lGalleryOn = !0),
                      this.s.counter &&
                        document.getElementById("lg-counter-current") &&
                        (document.getElementById(
                          "lg-counter-current"
                        ).innerHTML = e + 1);
                  }
                }
              }),
              (s.prototype.goToNextSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index + 1 < t.___slide.length
                    ? (t.index++,
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = 0),
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-right-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-right-end");
                      }, 400)));
              }),
              (s.prototype.goToPrevSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index > 0
                    ? (t.index--,
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = t.items.length - 1),
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-left-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-left-end");
                      }, 400)));
              }),
              (s.prototype.keyPress = function () {
                var e = this;
                this.items.length > 1 &&
                  l.default.on(window, "keyup.lg", function (t) {
                    e.items.length > 1 &&
                      (37 === t.keyCode &&
                        (t.preventDefault(), e.goToPrevSlide()),
                      39 === t.keyCode &&
                        (t.preventDefault(), e.goToNextSlide()));
                  }),
                  l.default.on(window, "keydown.lg", function (t) {
                    e.s.escKey === !0 &&
                      27 === t.keyCode &&
                      (t.preventDefault(),
                      l.default.hasClass(e.outer, "lg-thumb-open")
                        ? l.default.removeClass(e.outer, "lg-thumb-open")
                        : e.destroy());
                  });
              }),
              (s.prototype.arrow = function () {
                var e = this;
                l.default.on(
                  this.outer.querySelector(".lg-prev"),
                  "click.lg",
                  function () {
                    e.goToPrevSlide();
                  }
                ),
                  l.default.on(
                    this.outer.querySelector(".lg-next"),
                    "click.lg",
                    function () {
                      e.goToNextSlide();
                    }
                  );
              }),
              (s.prototype.arrowDisable = function (e) {
                if (!this.s.loop && this.s.hideControlOnEnd) {
                  var t = this.outer.querySelector(".lg-next"),
                    s = this.outer.querySelector(".lg-prev");
                  e + 1 < this.___slide.length
                    ? (t.removeAttribute("disabled"),
                      l.default.removeClass(t, "disabled"))
                    : (t.setAttribute("disabled", "disabled"),
                      l.default.addClass(t, "disabled")),
                    e > 0
                      ? (s.removeAttribute("disabled"),
                        l.default.removeClass(s, "disabled"))
                      : (t.setAttribute("disabled", "disabled"),
                        l.default.addClass(t, "disabled"));
                }
              }),
              (s.prototype.setTranslate = function (e, t, s) {
                this.s.useLeft
                  ? (e.style.left = t)
                  : l.default.setVendor(
                      e,
                      "Transform",
                      "translate3d(" + t + "px, " + s + "px, 0px)"
                    );
              }),
              (s.prototype.touchMove = function (e, t) {
                var s = t - e;
                Math.abs(s) > 15 &&
                  (l.default.addClass(this.outer, "lg-dragging"),
                  this.setTranslate(this.___slide[this.index], s, 0),
                  this.setTranslate(
                    document.querySelector(".lg-prev-slide"),
                    -this.___slide[this.index].clientWidth + s,
                    0
                  ),
                  this.setTranslate(
                    document.querySelector(".lg-next-slide"),
                    this.___slide[this.index].clientWidth + s,
                    0
                  ));
              }),
              (s.prototype.touchEnd = function (e) {
                var t = this;
                "lg-slide" !== t.s.mode &&
                  l.default.addClass(t.outer, "lg-slide");
                for (var s = 0; s < this.___slide.length; s++)
                  l.default.hasClass(this.___slide[s], "lg-current") ||
                    l.default.hasClass(this.___slide[s], "lg-prev-slide") ||
                    l.default.hasClass(this.___slide[s], "lg-next-slide") ||
                    (this.___slide[s].style.opacity = "0");
                setTimeout(function () {
                  l.default.removeClass(t.outer, "lg-dragging"),
                    e < 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToNextSlide(!0)
                      : e > 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToPrevSlide(!0)
                      : Math.abs(e) < 5 &&
                        l.default.trigger(t.el, "onSlideClick");
                  for (var s = 0; s < t.___slide.length; s++)
                    t.___slide[s].removeAttribute("style");
                }),
                  setTimeout(function () {
                    l.default.hasClass(t.outer, "lg-dragging") ||
                      "lg-slide" === t.s.mode ||
                      l.default.removeClass(t.outer, "lg-slide");
                  }, t.s.speed + 100);
              }),
              (s.prototype.enableSwipe = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1;
                if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                  for (var o = 0; o < e.___slide.length; o++)
                    l.default.on(e.___slide[o], "touchstart.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        e.lgBusy ||
                        (s.preventDefault(),
                        e.manageSwipeClass(),
                        (t = s.targetTouches[0].pageX));
                    });
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "touchmove.lg", function (o) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (o.preventDefault(),
                        (s = o.targetTouches[0].pageX),
                        e.touchMove(t, s),
                        (i = !0));
                    });
                  for (var d = 0; d < e.___slide.length; d++)
                    l.default.on(e.___slide[d], "touchend.lg", function () {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (i
                          ? ((i = !1), e.touchEnd(s - t))
                          : l.default.trigger(e.el, "onSlideClick"));
                    });
                }
              }),
              (s.prototype.enableDrag = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1,
                  o = !1;
                if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "mousedown.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        ((l.default.hasClass(s.target, "lg-object") ||
                          l.default.hasClass(s.target, "lg-video-play")) &&
                          (s.preventDefault(),
                          e.lgBusy ||
                            (e.manageSwipeClass(),
                            (t = s.pageX),
                            (i = !0),
                            (e.outer.scrollLeft += 1),
                            (e.outer.scrollLeft -= 1),
                            l.default.removeClass(e.outer, "lg-grab"),
                            l.default.addClass(e.outer, "lg-grabbing"),
                            l.default.trigger(e.el, "onDragstart"))));
                    });
                  l.default.on(window, "mousemove.lg", function (r) {
                    i &&
                      ((o = !0),
                      (s = r.pageX),
                      e.touchMove(t, s),
                      l.default.trigger(e.el, "onDragmove"));
                  }),
                    l.default.on(window, "mouseup.lg", function (r) {
                      o
                        ? ((o = !1),
                          e.touchEnd(s - t),
                          l.default.trigger(e.el, "onDragend"))
                        : (l.default.hasClass(r.target, "lg-object") ||
                            l.default.hasClass(r.target, "lg-video-play")) &&
                          l.default.trigger(e.el, "onSlideClick"),
                        i &&
                          ((i = !1),
                          l.default.removeClass(e.outer, "lg-grabbing"),
                          l.default.addClass(e.outer, "lg-grab"));
                    });
                }
              }),
              (s.prototype.manageSwipeClass = function () {
                var e = this.index + 1,
                  t = this.index - 1,
                  s = this.___slide.length;
                this.s.loop &&
                  (0 === this.index
                    ? (t = s - 1)
                    : this.index === s - 1 && (e = 0));
                for (var i = 0; i < this.___slide.length; i++)
                  l.default.removeClass(this.___slide[i], "lg-next-slide"),
                    l.default.removeClass(this.___slide[i], "lg-prev-slide");
                t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"),
                  l.default.addClass(this.___slide[e], "lg-next-slide");
              }),
              (s.prototype.mousewheel = function () {
                var e = this;
                l.default.on(e.outer, "mousewheel.lg", function (t) {
                  t.deltaY &&
                    (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                    t.preventDefault());
                });
              }),
              (s.prototype.closeGallery = function () {
                var e = this,
                  t = !1;
                l.default.on(
                  this.outer.querySelector(".lg-close"),
                  "click.lg",
                  function () {
                    e.destroy();
                  }
                ),
                  e.s.closable &&
                    (l.default.on(e.outer, "mousedown.lg", function (e) {
                      t = !!(
                        l.default.hasClass(e.target, "lg-outer") ||
                        l.default.hasClass(e.target, "lg-item") ||
                        l.default.hasClass(e.target, "lg-img-wrap")
                      );
                    }),
                    l.default.on(e.outer, "mouseup.lg", function (s) {
                      (l.default.hasClass(s.target, "lg-outer") ||
                        l.default.hasClass(s.target, "lg-item") ||
                        (l.default.hasClass(s.target, "lg-img-wrap") && t)) &&
                        (l.default.hasClass(e.outer, "lg-dragging") ||
                          e.destroy());
                    }));
              }),
              (s.prototype.destroy = function (e) {
                var t = this;
                if (
                  (e || l.default.trigger(t.el, "onBeforeClose"),
                  (document.body.scrollTop = t.prevScrollTop),
                  (document.documentElement.scrollTop = t.prevScrollTop),
                  e)
                ) {
                  if (!t.s.dynamic)
                    for (var s = 0; s < this.items.length; s++)
                      l.default.off(this.items[s], ".lg"),
                        l.default.off(this.items[s], ".lgcustom");
                  var i = t.el.getAttribute("lg-uid");
                  delete window.lgData[i], t.el.removeAttribute("lg-uid");
                }
                l.default.off(this.el, ".lgtm");
                for (var o in window.lgModules)
                  t.modules[o] && t.modules[o].destroy();
                (this.lGalleryOn = !1),
                  clearTimeout(t.hideBartimeout),
                  (this.hideBartimeout = !1),
                  l.default.off(window, ".lg"),
                  l.default.removeClass(document.body, "lg-on"),
                  l.default.removeClass(document.body, "lg-from-hash"),
                  t.outer && l.default.removeClass(t.outer, "lg-visible"),
                  l.default.removeClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  ),
                  setTimeout(function () {
                    try {
                      t.outer && t.outer.parentNode.removeChild(t.outer),
                        document.querySelector(".lg-backdrop") &&
                          document
                            .querySelector(".lg-backdrop")
                            .parentNode.removeChild(
                              document.querySelector(".lg-backdrop")
                            ),
                        e || l.default.trigger(t.el, "onCloseAfter");
                    } catch (e) {}
                  }, t.s.backdropDuration + 50);
              }),
              (window.lightGallery = function (e, t) {
                if (e)
                  try {
                    if (e.getAttribute("lg-uid"))
                      try {
                        window.lgData[e.getAttribute("lg-uid")].init();
                      } catch (e) {
                        console.error(
                          "lightGallery has not initiated properly"
                        );
                      }
                    else {
                      var l = "lg" + window.lgData.uid++;
                      (window.lgData[l] = new s(e, t)),
                        e.setAttribute("lg-uid", l);
                    }
                  } catch (e) {
                    console.error("lightGallery has not initiated properly");
                  }
              });
          });
        },
        { "./lg-utils": 1 },
      ],
    },
    {},
    [2]
  )(2);
});
