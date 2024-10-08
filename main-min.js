"use strict";
var _createClass = (function () {
  function a(b, c) {
    for (var f, d = 0; d < c.length; d++)
      (f = c[d]),
        (f.enumerable = f.enumerable || !1),
        (f.configurable = !0),
        "value" in f && (f.writable = !0),
        Object.defineProperty(b, f.key, f);
  }
  return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
})();
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(a, b) {
  if (!a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}
function _inherits(a, b) {
  if ("function" != typeof b && null !== b)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof b
    );
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
  })),
    b &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
var projectsJSON = [
    {
      name: "Chambara",
      link: "chambara",
      image: "https://josephboman.com/images/chambara-1.png",
      tags: ["qa", "coder"],
    },
    {
      name: "A Walk in the Park",
      link: "a-walk-in-the-park",
      image: "https://josephboman.com/images/a-walk-in-the-park-4.png",
      tags: ["designer", "coder"],
    },
    {
      name: "MonoVirus",
      link: "monovirus",
      image: "https://josephboman.com/images/monovirus-1.png",
      tags: ["modeler", "coder"],
    },
    {
      name: "Portfolio Website",
      link: "portfolio",
      image: "https://josephboman.com/images/website-1.png",
      tags: ["designer", "coder"],
    },
  ],
  App = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      (d.handleNavigation = d.handleNavigation.bind(d)),
        (d.goBack = d.goBack.bind(d)),
        (d.handleMobileMenu = d.handleMobileMenu.bind(d)),
        (d.registerLink = d.registerLink.bind(d));
      var f = null,
        h = "none",
        j = "home";
      switch (window.location.pathname) {
        case "/":
          (j = "home"), (f = "left");
          break;
        default:
          (j = "404"), (f = "right"), (h = "404");
      }
      d.state = {
        currentPage: j,
        rightBuffer: null,
        bufferType: h,
        activePage: f,
        scrollTarget: 0,
        projects: projectsJSON,
        clearingBuffer: !1,
      };
      return (
        (window.onpopstate = function (l) {
          d.handleBack(l);
        }),
        d
      );
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            if ("right" === this.state.activePage) {
              $(".main-page").css({ display: "none" }),
                $(".right-buffer").css({
                  position: "relative",
                  top: "0px",
                  left: "0%",
                  "box-shadow":
                    "rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px",
                });
              var c = window.location.href.split("/");
              history.replaceState({ page: c[c.length - 1] }, "Right Page", ""),
                (this.state.activeLink = this.state[c[c.length - 1]]);
              var d = this,
                f = "https://josephboman.com/json/" + c[c.length - 1] + ".json";
              $.ajax({
                dataType: "json",
                url: f,
                success: function success(j) {
                  d.setState({ rightBuffer: j, bufferType: j.bufferType }),
                    $("#loader")
                      .delay(500)
                      .fadeOut("slow", function () {
                        $(this).remove();
                      });
                },
                error: function error() {
                  $("#loader")
                    .delay(1e3)
                    .fadeOut("slow", function () {
                      $(this).remove();
                    });
                },
              });
            } else {
              if (-1 != window.location.href.indexOf("#")) {
                var g = "#" + window.location.href.split("#")[1],
                  h = $(g).offset().top - 80;
                (this.state.scrollTarget = h),
                  window.scrollTo(0, h),
                  history.replaceState({ page: g }, "Main Page", "");
              } else history.replaceState({ page: "main" }, "Main Page", "");
              $("#loader")
                .delay(1e3)
                .fadeOut("slow", function () {
                  $(this).remove();
                });
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            NProgress.done();
            var c = this;
            return this.state.clearingBuffer
              ? void (this.state.clearingBuffer = !1)
              : void ("right" === this.state.activePage
                  ? ($(".active").animate({ left: "-100%" }, 1e3),
                    "block" == $(".main-page").css("display")
                      ? $(".right-buffer").animate(
                          { left: "0%" },
                          990,
                          function () {
                            $(".main-page").css({ display: "none" }),
                              $(".right-buffer").css({
                                position: "relative",
                                top: "0px",
                              }),
                              window.scrollTo(0, 0);
                          }
                        )
                      : ($(".right-buffer").css({
                          position: "relative",
                          top: "0px",
                        }),
                        window.scrollTo(0, 0)))
                  : ($(".active").animate({ left: "0%" }, 990, function () {
                      "undefined" != typeof c.state.activeLink &&
                        null !== c.state.activeLink &&
                        c.state.activeLink.setState({ active: !1 });
                    }),
                    $(".right-buffer").animate(
                      { left: "100%" },
                      1e3,
                      function () {
                        $(".right-buffer").css({
                          top: "60px",
                          "box-shadow": "none",
                        }),
                          c.setState({
                            bufferType: "none",
                            rightBuffer: null,
                            clearingBuffer: !0,
                          });
                      }
                    )));
          },
        },
        {
          key: "handleNavigation",
          value: function handleNavigation(c, d, f) {
            var g = $(window).scrollTop();
            $(".right-buffer").css({
              "box-shadow":
                "rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px",
            });
            var k = null,
              l = null,
              j = this;
            "undefined" != typeof this.state.activeLink &&
              null === f &&
              (f = this.state.activeLink),
              "right" === d
                ? $.ajax({
                    dataType: "json",
                    url: "https://josephboman.com/json/" + c + ".json",
                    success: function success(m) {
                      j.setState({
                        currentPage: c,
                        activePage: d,
                        activeLink: f,
                        rightBuffer: m,
                        bufferType: m.bufferType,
                        scrollTop: g,
                      });
                    },
                  })
                : this.setState({
                    currentPage: c,
                    activePage: d,
                    activeLink: f,
                    rightBuffer: this.state.rightBuffer,
                    bufferType: this.state.bufferType,
                    scrollTop: g,
                  });
          },
        },
        {
          key: "handleMobileMenu",
          value: function handleMobileMenu(c, d, f) {
            if (
              (f && this.toggleMobileMenu(),
              $(".modal").css({ display: "none" }),
              $("body").removeClass("modal-open"),
              "right" === d)
            )
              NProgress.start(),
                c !== this.state.currentPage &&
                  (history.pushState({ page: c }, c, c),
                  "undefined" != typeof this.state.activeLink &&
                    null !== this.state.activeLink &&
                    ($(".active").css({ left: "0%" }),
                    this.state.activeLink.setState({ active: !1 })),
                  "undefined" != typeof this.state[c] &&
                    this.state[c].setState({ active: !0 })),
                this.handleNavigation(
                  c,
                  d,
                  "undefined" == typeof this.state[c] ? null : this.state[c]
                );
            else {
              NProgress.start(),
                history.pushState(
                  { page: c },
                  c,
                  "https://josephboman.com/" + c
                ),
                $(".main-page").css({ display: "block" });
              var g = $(c).offset().top - 80;
              if (
                ("#contact" === c && (g = document.body.scrollHeight + 200),
                "right" === this.state.activePage)
              ) {
                this.state.scrollTarget = g;
                var h = $(window).scrollTop();
                $(".right-buffer").css({
                  position: "fixed",
                  top: 60 - h + "px",
                }),
                  $("html, body").animate({ scrollTop: g }, 500),
                  this.handleNavigation(c, d, null);
              } else
                $("html, body").animate({ scrollTop: g }, 500),
                  (this.state.scrollTarget = g),
                  NProgress.done();
            }
          },
        },
        {
          key: "handleBack",
          value: function handleBack(c) {
            if (
              (NProgress.start(),
              "main" == c.state.page || -1 != c.state.page.indexOf("#"))
            ) {
              var d = $(window).scrollTop();
              $(".right-buffer").css({ position: "fixed", top: 60 - d + "px" }),
                $(".main-page").css({ display: "block" }),
                this.setState({ currentPage: "main", activePage: "left" });
            } else {
              var f = $(window).scrollTop();
              "undefined" != typeof this.state.activeLink &&
                null !== this.state.activeLink &&
                this.state.activeLink.setState({ active: !0 });
              var g = this,
                h = "https://josephboman.com/json/" + c.state.page + ".json";
              $.ajax({
                dataType: "json",
                url: h,
                success: function success(l) {
                  g.setState({
                    currentPage: c.state.page,
                    activePage: "right",
                    rightBuffer: l,
                    scrollTop: f,
                    bufferType: l.bufferType,
                  });
                },
                error: function error() {
                  g.setState({
                    currentPage: c.state.page,
                    activePage: "right",
                    scrollTop: f,
                    bufferType: "404",
                  });
                },
              });
            }
          },
        },
        {
          key: "goBack",
          value: function goBack() {
            NProgress.start();
            var c = $(window).scrollTop();
            $(".right-buffer").css({ position: "fixed", top: 60 - c + "px" }),
              $(".main-page").css({ display: "block" }),
              window.scrollTo(0, this.state.scrollTop),
              history.pushState({ page: "main" }, "main-page", "/"),
              this.setState({ currentPage: "main", activePage: "left" });
          },
        },
        {
          key: "toggleMobileMenu",
          value: function toggleMobileMenu() {
            $(".mobile-menu").toggleClass("down");
          },
        },
        {
          key: "registerLink",
          value: function registerLink(c, d) {
            this.state[c] = d;
          },
        },
        {
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              null,
              React.createElement(Header, {
                toggleMobileMenu: this.toggleMobileMenu,
                handleClick: this.handleMobileMenu,
              }),
              React.createElement(MobileMenu, {
                projects: this.state.projects,
                handleClick: this.handleMobileMenu,
              }),
              React.createElement(
                "div",
                { className: "main-page" },
                React.createElement(FrontPage, {
                  projects: this.state.projects,
                  mobileMenu: this.handleMobileMenu,
                  handleClick: this.handleNavigation,
                  registerLink: this.registerLink,
                })
              ),
              React.createElement(RightBuffer, {
                type: this.state.bufferType,
                data: this.state.rightBuffer,
                handleBack: this.goBack,
              }),
              React.createElement(Footer, null)
            );
          },
        },
      ]),
      b
    );
  })(React.Component);
function FrontPage(a) {
  return React.createElement(
    "div",
    null,
    React.createElement(PageBody, {
      topSection: React.createElement(FrontPageTop, null),
      bottomSection: React.createElement(
        "div",
        null,
        React.createElement(About, { handleClick: a.mobileMenu }),
        React.createElement(Projects, {
          projects: a.projects,
          handleClick: a.handleClick,
          registerLink: a.registerLink,
        })
      ),
    })
  );
}
function Header(a) {
  return React.createElement(
    "header",
    { id: "header" },
    React.createElement(
      "nav",
      { className: "nav-bar" },
      React.createElement(
        "a",
        { href: "/" },
        React.createElement("img", {
          src: "https://josephboman.com/images/logo.png",
        }),
        React.createElement(
          "p",
          null,
          React.createElement("span", null, "oseph"),
          " oman"
        )
      ),
      React.createElement(
        "div",
        { className: "desktopMenu" },
        React.createElement(HeaderLink, {
          text: "ABOUT ME",
          image: "https://josephboman.com/images/about.png",
          hoverImage: "https://josephboman.com/images/about-glow.png",
          handleClick: a.handleClick,
          link: "#about",
        }),
        React.createElement(HeaderLink, {
          text: "RESUME",
          image: "https://josephboman.com/images/resume.png",
          hoverImage: "https://josephboman.com/images/resume-glow.png",
          handleClick: a.handleClick,
          link: "resume",
        }),
        React.createElement(HeaderLink, {
          text: "PROJECTS",
          image: "https://josephboman.com/images/projects.png",
          hoverImage: "https://josephboman.com/images/projects-glow.png",
          handleClick: a.handleClick,
          link: "#projects",
        }),
        React.createElement(HeaderLink, {
          text: "CONTACT",
          image: "https://josephboman.com/images/contact.png",
          hoverImage: "https://josephboman.com/images/contact-glow.png",
          handleClick: a.handleClick,
          link: "#contact",
        })
      ),
      React.createElement(
        "svg",
        {
          onClick: a.toggleMobileMenu,
          height: "60",
          width: "80",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
        },
        React.createElement("path", {
          d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z",
        })
      )
    )
  );
}
function Footer() {
  return React.createElement(
    "footer",
    { id: "footer" },
    React.createElement(
      "div",
      { className: "footer" },
      React.createElement(
        "p",
        { className: "copyright" },
        "Created by Joseph Boman - 2017"
      ),
      React.createElement("h4", { id: "contact" }, "Contact Me"),
      React.createElement(
        "div",
        null,
        React.createElement(
          "a",
          {
            className: "text-link email",
            href: "mailto:joseph.j.boman@gmail.com",
          },
          "E-Mail: joseph.j.boman@gmail.com"
        ),
        React.createElement(
          "a",
          {
            className: "text-link linkedIn",
            href: "https://www.linkedin.com/in/joseph-boman-3a579896/",
          },
          "LinkedIn"
        ),
        React.createElement(
          "a",
          {
            className: "text-link gitHub",
            href: "https://github.com/SephHawkins/",
          },
          "GitHub"
        )
      )
    )
  );
}
function PageBody(a) {
  return React.createElement(
    "div",
    { className: "page" },
    React.createElement("div", { className: "page-top" }, a.topSection),
    React.createElement("div", { className: "page-bottom" }, a.bottomSection)
  );
}
function MobileMenu(a) {
  return React.createElement(
    "div",
    { className: "mobile-menu" },
    React.createElement(BasicLink, {
      link: "#about",
      sublink: "false",
      handleClick: a.handleClick,
      name: "ABOUT ME",
    }),
    React.createElement(BasicLink, {
      link: "#projects",
      sublink: "false",
      handleClick: a.handleClick,
      name: "PROJECTS",
    }),
    a.projects.map(function (b) {
      return React.createElement(BasicLink, {
        key: b.name,
        sublink: "true",
        link: b.link,
        handleClick: a.handleClick,
        name: b.name,
      });
    }),
    React.createElement(BasicLink, {
      link: "resume",
      sublink: "false",
      handleClick: a.handleClick,
      name: "RESUME",
    }),
    React.createElement(BasicLink, {
      link: "#contact",
      sublink: "false",
      handleClick: a.handleClick,
      name: "CONTACT",
    })
  );
}
var HeaderLink = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (d.handleClick = d.handleClick.bind(d)), d;
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "handleClick",
          value: function handleClick(c) {
            NProgress.start(),
              c.preventDefault(),
              -1 === this.props.link.indexOf("#")
                ? this.props.handleClick(this.props.link, "right", !1)
                : this.props.handleClick(this.props.link, "left", !1);
          },
        },
        {
          key: "render",
          value: function render() {
            return React.createElement(
              "a",
              {
                href: this.props.link,
                onClick: this.handleClick,
                className: "headerLink",
              },
              React.createElement("img", {
                src: this.props.image,
                className: "headerImg",
              }),
              React.createElement("img", {
                src: this.props.hoverImage,
                className: "headerHoverImg",
              }),
              React.createElement("h5", null, this.props.text)
            );
          },
        },
      ]),
      b
    );
  })(React.Component),
  BasicLink = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (d.handleClick = d.handleClick.bind(d)), d;
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "handleClick",
          value: function handleClick(c) {
            NProgress.start(),
              c.preventDefault(),
              -1 === this.props.link.indexOf("#")
                ? this.props.handleClick(this.props.link, "right", !0)
                : this.props.handleClick(this.props.link, "left", !0);
          },
        },
        {
          key: "render",
          value: function render() {
            return React.createElement(
              "a",
              {
                href: this.props.link,
                className:
                  "text-link" +
                  ("true" === this.props.sublink ? " sub-link" : ""),
                onClick: this.handleClick,
              },
              this.props.name
            );
          },
        },
      ]),
      b
    );
  })(React.Component);
function FrontPageTop() {
  return React.createElement(
    "div",
    null,
    React.createElement("img", {
      className: "front-img",
      src: "https://josephboman.com/images/joseph-boman.png",
    }),
    React.createElement("h1", null, "Joseph Boman"),
    React.createElement("h2", null, "Programmer + Designer")
  );
}
var About = (function (a) {
  function b(c) {
    _classCallCheck(this, b);
    var d = _possibleConstructorReturn(
      this,
      (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
    );
    return (
      (d.toContact = d.toContact.bind(d)), (d.toResume = d.toResume.bind(d)), d
    );
  }
  return (
    _inherits(b, a),
    _createClass(b, [
      {
        key: "toContact",
        value: function toContact(c) {
          NProgress.start(),
            c.preventDefault(),
            history.pushState({ page: "#contact" }, "#contact", "#contact"),
            this.props.handleClick("#contact", "left", !1);
        },
      },
      {
        key: "toResume",
        value: function toResume(c) {
          NProgress.start(),
            c.preventDefault(),
            history.pushState({ page: "resume" }, "Resume", "resume"),
            this.props.handleClick("resume", "right", !1);
        },
      },
      {
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            { id: "about" },
            React.createElement("h3", null, "ABOUT ME"),
            React.createElement(
              "p",
              null,
              "Programming and Games have long been two of my greatest passions, and my skill at them has only increased my interest. Both allow me to be both logical and creative, to solve tricky design and programming problems, and to explore the limits of imagination.",
              React.createElement("br", null),
              React.createElement("br", null),
              "I graduated from USC, where I studied Computer Science (Games), in 2016, and have worked at Kaiser Permanente since then. While at USC, I got the chance to work on several board games and video games, including one that shipped on PS4. I also worked on a couple of research projects, which you can see more about by looking at the project pages or my ",
              React.createElement(
                "a",
                { class: "text-link", href: "resume", onClick: this.toResume },
                "Resume"
              ),
              ".",
              React.createElement("br", null),
              React.createElement("br", null),
              "When I'm not immersed in some form of fictional media or outdoors, I enjoy playing piano, spending time with friends, and learning about whatever topic piques my interest. Exploring created worlds is a great passion of mine, and Earth is no exception; if I have a chance to spend time in nature, I will seize the opportunity. If you are interested in working with me, feel free to ",
              React.createElement(
                "a",
                {
                  class: "text-link",
                  href: "#contact",
                  onClick: this.toContact,
                },
                "contact me"
              ),
              " and I'll get back to you as soon as possible."
            )
          );
        },
      },
    ]),
    b
  );
})(React.Component);
function Projects(a) {
  var b = a.projects;
  return React.createElement(
    "div",
    { id: "projects" },
    React.createElement("h3", null, "PROJECTS"),
    b.map(function (c) {
      return React.createElement(Project, {
        key: c.name,
        handleClick: a.handleClick,
        registerLink: a.registerLink,
        link: c.link,
        name: c.name,
        image: c.image,
        tags: c.tags,
      });
    })
  );
}
var ImageSlideshow = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (
        (d.switchImage = d.switchImage.bind(d)),
        (d.handleClick = d.handleClick.bind(d)),
        (d.state = {
          activeImage: 0,
          cycleImage: !0,
          setInterval: setInterval(d.cycleImage, 6e3, d),
        }),
        d
      );
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            clearInterval(this.state.setInterval);
          },
        },
        {
          key: "handleClick",
          value: function handleClick() {
            this.props.handleClick(this.state.activeImage);
          },
        },
        {
          key: "switchImage",
          value: function switchImage(c, d) {
            $(".circle-img img").animate({ left: -100 * c + "%" }),
              this.setState({ activeImage: c, cycleImage: !d });
          },
        },
        {
          key: "cycleImage",
          value: function cycleImage(c) {
            c.state.cycleImage &&
              c.switchImage(
                (c.state.activeImage + 1) % c.props.images.length,
                !1
              );
          },
        },
        {
          key: "render",
          value: function render() {
            var d = this,
              c = this.props.images;
            return React.createElement(
              "div",
              { className: "img-slideshow" },
              React.createElement(
                "div",
                { className: "circle-img", onClick: this.handleClick },
                c.map(function (f) {
                  return React.createElement("img", {
                    key: f.link,
                    src: f.link,
                    alt: f.alt,
                  });
                })
              ),
              React.createElement(
                "div",
                { className: "img-selector" },
                c.map(function (f, g) {
                  return React.createElement(Dot, {
                    key: f.link + "-dot",
                    number: g,
                    active: g === d.state.activeImage,
                    handleClick: d.switchImage,
                  });
                })
              )
            );
          },
        },
      ]),
      b
    );
  })(React.Component),
  RightBuffer = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (
        (d.state = { activeImage: 0 }), (d.openModal = d.openModal.bind(d)), d
      );
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "openModal",
          value: function openModal(c) {
            this.setState({ activeImage: c }),
              $(".modal").css({ display: "block" }),
              $("body").addClass("modal-open");
            var d = $(".modal-content img").width(),
              g = $(".modal-content").height() / 2;
            $(".modal-content").css({ "margin-top": "-" + g + "px" }),
              50 < $(".modal-content").position().left
                ? $(".modal-content").css({
                    "margin-left": "-" + d / 2 + "px",
                    "max-width": d + "px",
                  })
                : $(".modal-content").css({
                    "margin-left": 0,
                    "max-width": "90%",
                  });
          },
        },
        {
          key: "closeModal",
          value: function closeModal() {
            $(".modal").css({ display: "none" }),
              $("body").removeClass("modal-open");
          },
        },
        {
          key: "render",
          value: function render() {
            switch (this.props.type) {
              case "project":
                return React.createElement(
                  "div",
                  { className: "right-buffer", type: this.props.type },
                  React.createElement(
                    "span",
                    { className: "hidden" },
                    this.props.type
                  ),
                  React.createElement(
                    "div",
                    { className: "modal", onClick: this.closeModal },
                    React.createElement(
                      "div",
                      { className: "modal-content" },
                      React.createElement(
                        "span",
                        { className: "close", onClick: this.closeModal },
                        "\xD7"
                      ),
                      React.createElement("img", {
                        src: this.props.data.images[this.state.activeImage]
                          .link,
                        alt: this.props.data.images[this.state.activeImage].alt,
                      }),
                      React.createElement(
                        "p",
                        { className: "caption" },
                        this.props.data.images[this.state.activeImage].alt
                      )
                    )
                  ),
                  React.createElement(PageBody, {
                    topSection: React.createElement(
                      "div",
                      null,
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      }),
                      React.createElement(ImageSlideshow, {
                        images: this.props.data.images,
                        handleClick: this.openModal,
                      }),
                      React.createElement(
                        "div",
                        {
                          className:
                            "project-header" +
                            (2 < this.props.data.tags.length
                              ? " thin-margin"
                              : " thick-margin"),
                        },
                        React.createElement("h1", null, this.props.data.name),
                        React.createElement(
                          "h2",
                          null,
                          this.props.data.tagline
                        ),
                        this.props.data.tags.map(function (c) {
                          return React.createElement(TagDetail, {
                            key: c.name,
                            name: c.name,
                            text: c.text,
                          });
                        })
                      )
                    ),
                    bottomSection: React.createElement(
                      "div",
                      null,
                      this.props.data.sections.map(function (c) {
                        return React.createElement(ProjectSection, {
                          key: c.name,
                          name: c.name,
                          data: c.details,
                        });
                      }),
                      React.createElement(DownloadLink, {
                        type: this.props.data.downloadType,
                        link: this.props.data.downloadLink,
                      }),
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      })
                    ),
                  })
                );
              case "resume":
                return React.createElement(
                  "div",
                  { className: "right-buffer resume" },
                  React.createElement(
                    "span",
                    { className: "hidden" },
                    this.props.type
                  ),
                  React.createElement(PageBody, {
                    topSection: React.createElement(
                      "div",
                      null,
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      }),
                      React.createElement(
                        "h1",
                        { style: { marginTop: "10px", paddingTop: "20px" } },
                        this.props.data.name
                      ),
                      React.createElement("h2", null, this.props.data.tagline),
                      React.createElement("h4", null, this.props.data.address)
                    ),
                    bottomSection: React.createElement(
                      "div",
                      null,
                      this.props.data.sections.map(function (c) {
                        return React.createElement(ResumeSection, {
                          key: c.name,
                          name: c.name,
                          data: c.data,
                        });
                      }),
                      React.createElement(DownloadLink, {
                        type: "pdf",
                        link: this.props.data.downloadLink,
                      }),
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      })
                    ),
                  })
                );
              case "404":
                return React.createElement(
                  "div",
                  { className: "right-buffer" },
                  React.createElement(
                    "span",
                    { className: "hidden" },
                    this.props.type
                  ),
                  React.createElement(PageBody, {
                    topSection: React.createElement(
                      "div",
                      null,
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      }),
                      React.createElement("img", {
                        className: "img404",
                        src: "https://josephboman.com/images/404.jpg",
                      })
                    ),
                    bottomSection: React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h1",
                        { style: { marginTop: "10px", paddingTop: "20px" } },
                        "404 Error: Page not Found"
                      ),
                      React.createElement(
                        "h2",
                        null,
                        "The page you requested does not exist.",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "Please navigate to another page via the header, back buttons, or another URL"
                      ),
                      React.createElement(BackArrow, {
                        height: "40",
                        width: "40",
                        handleBack: this.props.handleBack,
                      })
                    ),
                  })
                );
              case "none":
                return (
                  (this.state.activeImage = 0),
                  React.createElement(
                    "div",
                    { className: "right-buffer" },
                    React.createElement(
                      "span",
                      { className: "hidden" },
                      this.props.type
                    )
                  )
                );
            }
          },
        },
      ]),
      b
    );
  })(React.Component);
function AddLinks(a) {
  var b = a.split("<a>");
  return React.createElement(
    "p",
    null,
    b.map(function (c, d) {
      if (0 == d % 2) return c;
      var f = c.split("--");
      return React.createElement(
        "a",
        { key: f[0] + f[1], href: f[0], alt: f[1], target: "_blank" },
        f[1]
      );
    })
  );
}
function ProjectSection(a) {
  var b = AddLinks(a.data);
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, a.name),
    b
  );
}
function ResumeSection(a) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      { style: { borderBottom: "#00A56E double 3px" } },
      a.name
    ),
    a.data.map(function (b) {
      return React.createElement(
        "div",
        { key: b.name + b.subname },
        React.createElement(
          "h4",
          null,
          b.name,
          React.createElement("span", { className: "right time" }, b.time),
          React.createElement(
            "span",
            { className: "right longTime" },
            b.longTime
          )
        ),
        React.createElement("h5", null, b.subname),
        React.createElement("p", null, b.details)
      );
    })
  );
}
function BackArrow(a) {
  return React.createElement(
    "div",
    { className: "arrow-button" },
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        height: a.height,
        viewBox: "0 0 512 512",
        width: a.width,
        className: "arrow",
        onClick: a.handleBack,
      },
      React.createElement("polygon", { points: "512,392 0,256 400,256" }),
      React.createElement("polygon", {
        points: "512,120 0,256 100,256 432,170 360,256 400,256",
      })
    )
  );
}
var Dot = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (
        (d.handleClick = d.handleClick.bind(d)),
        (d.state = { number: d.props.number }),
        d
      );
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "handleClick",
          value: function handleClick() {
            this.props.handleClick(this.state.number, !1);
          },
        },
        {
          key: "render",
          value: function render() {
            return React.createElement("span", {
              className: "dot" + (this.props.active ? " current-dot" : ""),
              onClick: this.handleClick,
            });
          },
        },
      ]),
      b
    );
  })(React.Component),
  Project = (function (a) {
    function b(c) {
      _classCallCheck(this, b);
      var d = _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
      );
      return (
        d.props.registerLink(d.props.link, d),
        (d.handleClick = d.handleClick.bind(d)),
        (d.state = { href: d.props.link, active: !1 }),
        d
      );
    }
    return (
      _inherits(b, a),
      _createClass(b, [
        {
          key: "handleClick",
          value: function handleClick(c) {
            NProgress.start(), c.preventDefault();
            $(window).scrollTop();
            history.pushState(
              { page: this.state.href },
              "testing",
              this.state.href
            ),
              this.setState({ active: !0 }),
              this.props.handleClick(this.state.href, "right", this);
          },
        },
        {
          key: "render",
          value: function render() {
            return React.createElement(
              "a",
              {
                href: this.state.href,
                className:
                  "block-link project" + (this.state.active ? " active" : ""),
                onClick: this.handleClick,
              },
              React.createElement(Tags, { tags: this.props.tags }),
              React.createElement(
                "h4",
                {
                  className:
                    10 <= this.props.name.length
                      ? "thin-margin"
                      : "thick-margin",
                },
                this.props.name
              ),
              React.createElement("img", {
                src: this.props.image,
                alt: this.props.name,
              })
            );
          },
        },
      ]),
      b
    );
  })(React.Component);
function DownloadLink(a) {
  var b = null,
    c = null;
  switch (a.type) {
    case "Windows":
      (c = React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "20",
          viewBox: "0 0 88 88",
          width: "20",
          className: "downloadMiniIcon",
        },
        React.createElement("path", {
          d: "M0 12.49l35.7-4.9v34.5H0M40 6.91L87.3 0V41.8H40M0 45.74h35.7v34.6L0 75.34M40 46.2H87.3v41.4L40 80.9",
        })
      )),
        (b = React.createElement("p", null, "Download for Windows"));
      break;
    case "PlayStation":
      (c = React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "20",
          viewBox: "0 0 200 200",
          width: "20",
          className: "downloadMiniIcon",
        },
        React.createElement("path", {
          d: "m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z",
        })
      )),
        (b = React.createElement("p", null, "View on PlayStation Store"));
      break;
    case "Rules":
      (c = React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 88 88",
        width: "20",
        className: "downloadMiniIcon",
      })),
        (b = React.createElement("p", null, "Download the Rules"));
      break;
    case "pdf":
      (c = React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 88 88",
        width: "20",
        className: "downloadMiniIcon",
      })),
        (b = React.createElement("p", null, "Download as PDF"));
      break;
    case "none":
      return React.createElement("div", null);
    default:
      (c = React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 88 88",
        width: "20",
        className: "downloadMiniIcon",
      })),
        (b = React.createElement("p", null, "Download"));
  }
  return React.createElement(
    "a",
    { target: "_blank", href: a.link, className: "block-link downloadLink" },
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        height: "40",
        viewBox: "0 0 512 512",
        width: "40",
        className: "downloadIcon",
      },
      React.createElement("polygon", { points: "512,392 0,256 400,256" }),
      React.createElement("polygon", {
        points: "512,120 0,256 100,256 432,170 360,256 400,256",
      }),
      React.createElement("polygon", {
        points: "0,0 200,0 50,50 20,256 50,462 200,512 0,512",
      })
    ),
    c,
    b
  );
}
function Tags(a) {
  return React.createElement(
    "div",
    { className: "details" },
    React.createElement(
      "div",
      { className: "col-1" },
      React.createElement(Tag, { tag: a.tags[1] }),
      React.createElement(Tag, { tag: a.tags[0] })
    )
  );
}
function Tag(a) {
  return React.createElement(
    "div",
    { className: "tag " + a.tag.split("/")[0] + "-tag" },
    React.createElement("p", null, a.tag.toUpperCase())
  );
}
function TagDetail(a) {
  return React.createElement(
    "div",
    { className: "tag-details " + a.name.split("/")[0] + "-tag" },
    React.createElement("p", null, a.name.toUpperCase() + ": " + a.text)
  );
}
(function () {
  ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("contents")
  );
})();
