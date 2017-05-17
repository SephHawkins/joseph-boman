"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projectsJSON = [{
    name: "Chambara",
    link: "chambara",
    image: "http://josephboman.com/wp-content/uploads/2015/11/Chambara13x9-e1447699049873.png",
    tags: ["qa", "coder"]
}, {
    name: "A Walk in the Park",
    link: "a-walk-in-the-park",
    image: "http://josephboman.com/wp-content/uploads/2015/11/AWITP13x9-e1447699066395.png",
    tags: ["designer", "coder"]
}, {
    name: "MonoVirus",
    link: "monovirus",
    image: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
    tags: ["modeler", "coder"]
}];

var rightBufferDetails = {
    chambara: {
        name: "Chambara",
        tagline: "Two-color Stealth Action PS4 Game",
        about: "Chambara was first created at the Dare to be Digital game jam, and quickly expanded with the goal of releasing on PlayStation 4. The game was developed by a team of around 25 USC Games students.\n\nChambara is, at its heart, a local multiplayer experience, in which players utilize minimally colored levels to hide their character, attempting to use strategy and stealth to trick and defeat their opponent",
        lookBack: "As one of the engineers and the QA lead, my primary goal was finding and fixing bugs. I managed a team of eight QA testers, planning out the testing that they would do, organizing their responses and helping the engineering team to determine and fix the root cause. In addition, I fixed many of the bugs, since I was very familiar with the source code\n\nAs one of the engineers and the QA lead, my primary goal was finding and fixing bugs. I managed a team of eight QA testers, planning out the testing that they would do, organizing their responses and helping the engineering team to determine and fix the root cause. In addition, I fixed many of the bugs, since I was very familiar with the source code\n\nAs one of the engineers and the QA lead, my primary goal was finding and fixing bugs. I managed a team of eight QA testers, planning out the testing that they would do, organizing their responses and helping the engineering team to determine and fix the root cause. In addition, I fixed many of the bugs, since I was very familiar with the source code",
        images: [{
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara13x9-e1447699049873.png",
            alt: "Chambara-1"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara2-13x9-e1447699059560.png",
            alt: "Chambara-2"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara3-13x9-e1447699027993.png",
            alt: "Chambara-3"
        }],
        tags: [{
            name: "coder",
            text: "Built gameplay systems and controller logic in Unity for PS4"
        }, {
            name: "qa",
            text: "Ran a ten person QA team and passed Sony's TRC"
        }],
        downloadType: "PlayStation",
        downloadLink: "https://store.playstation.com/#!/en-us/games/chambara/cid=UP1279-CUSA05224_00-CHAMBARA00000000",
        bufferType: 'project'
    },
    resume: {
        name: "Joseph Boman",
        address: "joseph.j.boman@gmail.com",
        tagline: "Technical Associate at Kaiser Permanente",
        sections: [{
            name: "EDUCATION",
            data: [{
                name: "B.S. in Computer Science (Games)",
                time: "2012-2016",
                longTime: "September 2012 - May 2016\nGPA: 3.92",
                subname: "University of Southern California",
                details: "Viterbi School of Engineering\nW.V.T. Rusch Undergraduate Honors Program"
            }]
        }, {
            name: "WORK EXPERIENCE",
            data: [{
                name: "Technical Associate",
                subname: "Kaiser Permanente - Rotation Program",
                time: "2016-Present",
                longTime: "July 2016 - Present",
                details: "Designed and programmed a visual and functional upgrade to an internal dashboard tool. Built new functionality onto existing Java Web Applications.\n" +
                    "Worked with: Java, PHP, SQL, JavaScript, HTML, CSS, and React",
            }, {
                name: "Undergraduate Researcher",
                subname: "Information Sciences Institute - USC",
                time: "2015",
                longTime: "May 2015 - December 2015",
                details: "Automated the creation and initialization of virutal containers and switches to facilitate the creation of large scale virtual networks.\n" +
                    "Worked with: Chef, Vagrant, OpenvSwitch, Ruby, and Bash",
            }, {
                name: "Undergraduate Researcher",
                subname: "Texas State University",
                time: "2014",
                longTime: "May 2014 - August 2014",
                details: "Created an Internet of Things middleware to draw meaningful conclusions from sensor data. Presented results at the 2014 CollaborateCom CollabCloud Workshop.\n" +
                    "Worked with: Firebase, Phidget Sensors, and Java",
            }]
        }, {
            name: "SELECTED PROJECTS",
            data: [{
                name: "QA Lead and Engineer",
                subname: "Chambara - team ok",
                time: "2015-2016",
                longTime: "August 2015 - May 2016",
                details: "A local multiplayer PS4 stealth-fighting game utilizing a dichromatic scheme. Implemented gameplay logic, developed test suites, managed a ten person QA team, and found and fixed numerous bugs\n" +
                    "Worked with: Unity, PS4 DevKits/TestKits, Slack, Trello, and Perforce",
            }, {
                name: "Engineer and Designer",
                subname: "A Walk in the Park",
                time: "2014",
                longTime: "September 2014 - December 2014",
                details: "A local multiplayer PC cooperative game about a not-quite big enough sidewalk. Designed and programmed gameplay logic, player feedback, and controller support\n" +
                    "Worked with: Unity",
            }, {
                name: "Network Engineer",
                subname: "PrimeEngine",
                time: "2014",
                longTime: "January 2014 - May 2014",
                details: "A game engine built in C++. Programmed server authoritative multiplayer using UDP socket programming and client-side prediction\n" +
                    "Worked with: C++, Lua",
            }, {
                name: "Designer, 3-D Modeler, Engineer",
                subname: "MonoVirus",
                time: "2013",
                longTime: "March 2013 - May 2013",
                details: "A single player procedurally generated dungeon crawler through the human body. Designed and programmed gameplay logic and systems, created 3-D models, and created and programmed UI elements\n" +
                    "Worked with: C#, MonoDevelop, XNA, and GIMP",
            }]
        }, {
            name: "SKILLS",
            data: [{
                name: "Programming Languages",
                subname: "C++, C#, Java, HTML, CSS, JavaScript, PHP, SQL, Python, Ruby, Lua, Shell scripting",
                time: "",
                longTime: "",
                details: "",
            }, {
                name: "Software",
                subname: "Eclipse, Visual Studio, MS Office, Photoshop, GIMP, Maya, Unity, Slack, Trello",
                time: "",
                longTime: "",
                details: "",
            }, {
                name: "Version Control and Other",
                subname: "Git, Perforce, SVN, React, Chef, Spring",
                time: "",
                longTime: "",
                details: "",
            }, {
                name: "Operating Systems",
                subname: "Windows (XP, 7, 8.1, 10), OSX, Linux",
                time: "",
                longTime: "",
                details: "",
            }]
        }, {
            name: "HONORS AND AWARDS",
            data: [{
                name: "Trustee Scholarship - USC",
                subname: "Full Tuition Scholarship to USC",
                time: "",
                longTime: "",
                details: "",
            }, {
                name: "Dean's List - USC",
                subname: "3.5 GPA or higher - awarded every semester from Fall 2012 - Spring 2016",
                time: "",
                longTime: "",
                details: "",
            }, {
                name: "Tau Beta Pi - California Delta Chapter - USC",
                subname: "Engineering Honor society - open to the top 5th of the graduating class",
                time: "",
                longTime: "",
                details: "",
            }]
        }],
        bufferType: 'resume'
    },
    monovirus: {
        name: "MonoVirus",
        tagline: "Action RPG Dungeon Crawler Game",
        about: "MonoVirus was a semester long project that I worked on with three other engineers – Zach Vega-Perkins, Mathew Schacher, and Cherys Fair. Together we wanted to create a dungeon crawler with a bit of a darker twist, much like games like Pandemic.\n\nTo do this, we created a procedurally generated dungeon that gave the appearance of blood vessels, and crafted our player character and our enemy characters as if they were a virus and human cells (respectively).",
        lookBack: "Since the team was composed entirely of engineers, I ended up doing a great deal of design work over the course of the project. I created all of the UI elements in the game, using primarily GIMP, and also created all of the 3D models for the various characters in the game.\n\nDespite that, I still found plenty of time to work with the code, which was a great learning experience for me, as it was my first time working with C#, MonoGame, and XNA.",
        images: [{
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
            alt: "MonoVirus-1"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Monovirus13x9-e1447699039893.png",
            alt: "MonoVirus-2"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus2-13x9-e1447698995565.png",
            alt: "MonoVirus-3"
        }],
        tags: [{
            name: "coder",
            text: "Built in C# using XNA and MonoDevelop"
        }, {
            name: "modeler",
            text: "Made player and enemy models in Maya"
        }, {
            name: "ui/ux",
            text: "Created UI elements using GIMP"
        }],
        downloadType: "Windows",
        downloadLink: "https://docs.google.com/uc?id=0BwZrt8zDIOLPOWQ4MExTWXRYZmc&export=download",
        bufferType: 'project'
    },
    awalkinthepark: {
        name: "A Walk in the Park",
        tagline: "Cooperative Walking Simulator",
        about: "MonoVirus was a semester long project that I worked on with three other engineers – Zach Vega-Perkins, Mathew Schacher, and Cherys Fair. Together we wanted to create a dungeon crawler with a bit of a darker twist, much like games like Pandemic.\n\nTo do this, we created a procedurally generated dungeon that gave the appearance of blood vessels, and crafted our player character and our enemy characters as if they were a virus and human cells (respectively).",
        lookBack: "Since the team was composed entirely of engineers, I ended up doing a great deal of design work over the course of the project. I created all of the UI elements in the game, using primarily GIMP, and also created all of the 3D models for the various characters in the game.\n\nDespite that, I still found plenty of time to work with the code, which was a great learning experience for me, as it was my first time working with C#, MonoGame, and XNA.",
        images: [{
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
            alt: "MonoVirus-1"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Monovirus13x9-e1447699039893.png",
            alt: "MonoVirus-2"
        }, {
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus2-13x9-e1447698995565.png",
            alt: "MonoVirus-3"
        }],
        tags: [{
            name: "coder",
            text: "Built in C# using XNA and MonoDevelop"
        }, {
            name: "modeler",
            text: "Made player and enemy models in Maya"
        }, {
            name: "ui/ux",
            text: "Created UI elements using GIMP"
        }],
        downloadType: "Windows",
        downloadLink: "https://docs.google.com/uc?id=0BwZrt8zDIOLPOWQ4MExTWXRYZmc&export=download",
        bufferType: 'project'
    }
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this2.handleNavigation = _this2.handleNavigation.bind(_this2);
        _this2.goBack = _this2.goBack.bind(_this2);
        _this2.handleMobileMenu = _this2.handleMobileMenu.bind(_this2);
        _this2.registerLink = _this2.registerLink.bind(_this2);
        var activePage = null;
        var rightBuffer = null;
        var bufferType = 'none';
        var currentPage = 'home';
        console.log(window.location.pathname.split('/'));
        switch (window.location.pathname) {
            case '/joseph-boman/':
                currentPage = 'home';activePage = 'left';break;
            case '/joseph-boman/chambara/':
                currentPage = 'chambara';activePage = 'right';rightBuffer = rightBufferDetails['chambara'];bufferType = 'project';break;
            case '/joseph-boman/a-walk-in-the-park/':
                currentPage = 'a-walk-in-the-park';activePage = 'right';rightBuffer = rightBufferDetails['awalkinthepark'];bufferType = 'project';break;
            case '/joseph-boman/monovirus/':
                currentPage = 'monovirus';activePage = 'right';rightBuffer = rightBufferDetails['monovirus'];bufferType = 'project';break;
            case '/joseph-boman/resume/':
                currentPage = 'Chambara';activePage = 'right';rightBuffer = rightBufferDetails['resume'];bufferType = 'resume';break;
            default:
                currentPage = 'home';activePage = 'left';break; //TODO: Redirect to a 404 page
        }
        _this2.state = {
            currentPage: currentPage,
            rightBuffer: rightBuffer,
            bufferType: bufferType,
            activePage: activePage,
            scrollTarget: 0,
            projects: projectsJSON };
        var _this = _this2;
        window.onpopstate = function (event) {
            _this.handleBack(event);
        };
        return _this2;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.state.activePage === 'right') {
                $('.main-page').css({ 'display': 'none' });
                $('.right-buffer').css({ 'position': 'relative', 'top': '0px', 'left': '0%', 'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px' });
                var arr = window.location.href.split('/');
                history.replaceState({ page: arr[arr.length - 2] }, "Right Page", "");
                this.state.activeLink = this.state[arr[arr.length - 2]];
            } else {
                if (window.location.href.indexOf('#') != -1) {
                    var link = '#' + window.location.href.split('#')[1];
                    var scrollTarget = $(link).offset().top - 80;
                    this.state.scrollTarget = scrollTarget;
                    window.scrollTo(0, scrollTarget);
                    history.replaceState({ page: link }, "Main Page", "");
                } else {
                    history.replaceState({ page: 'main' }, "Main Page", "");
                }
            }
            $('#loader').delay(1000).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            NProgress.done();
            var _this = this;
            if (this.state.activePage === 'right') {
                $('.active').animate({ 'left': '-100%' }, 1000);
                $('.right-buffer').animate({ 'left': '0%' }, 990, function () {
                    $('.main-page').css({ 'display': 'none' });
                    $('.right-buffer').css({ 'position': 'relative', 'top': '0px' });
                    window.scrollTo(0, 0);
                });
            } else {
                $('.active').animate({ 'left': '0%' }, 990, function () {
                    _this.state.activeLink.setState({ active: false });
                });
                $('.right-buffer').animate({ 'left': '100%' }, 1000, function () {
                    $('.right-buffer').css({ 'top': '60px', 'box-shadow': 'none' });
                    if (typeof _this.state.scrollTarget !== 'undefined' && _this.state.scrollTarget !== null) {
                        $('html, body').animate({ scrollTop: _this.state.scrollTarget }, 500);
                        //$(window).scrollTop(_this.state.scrollTarget);
                        _this.state.scrollTarget = null;
                    }
                });
            }
        }
    }, {
        key: "handleNavigation",
        value: function handleNavigation(link, moveTo, activeLink) {
            var scrollTop = $(window).scrollTop();
            $('.right-buffer').css({ 'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px' });
            var rightBuffer = null,
                bufferType = null;
            if (typeof rightBufferDetails[link.replace(/-/g, '')] !== 'undefined') {
                // TODO: Replace with AJAX
                rightBuffer = rightBufferDetails[link.replace(/-/g, '')];
                bufferType = rightBufferDetails[link.replace(/-/g, '')].bufferType;
            }
            this.setState({
                currentPage: link,
                activePage: moveTo,
                activeLink: activeLink == null ? this.state.activeLink : activeLink,
                rightBuffer: rightBuffer === null ? this.state.rightBuffer : rightBuffer,
                bufferType: bufferType === null ? this.state.bufferType : bufferType,
                scrollTop: scrollTop
            });
        }
    }, {
        key: "handleMobileMenu",
        value: function handleMobileMenu(link, activePage, mobileLink) {
            if (mobileLink) this.toggleMobileMenu();
            if (activePage === 'right') {
                NProgress.start();
                if (link !== this.state.currentPage) {
                    history.pushState({ page: link }, link, '/joseph-boman/' + link);
                    if (typeof this.state.activeLink !== 'undefined') {
                        $('.active').css({ 'left': '0%' });
                        this.state.activeLink.setState({ active: false });
                    }
                    if (typeof this.state[link] != 'undefined') {
                        this.state[link].setState({ active: true });
                    }
                }
                this.handleNavigation(link, activePage, typeof this.state[link] != 'undefined' ? this.state[link] : null);
            } else {
                NProgress.start();
                history.pushState({ page: link }, link, '/joseph-boman/' + link);
                $('.main-page').css({ 'display': 'block' });
                var scrollTarget = $(link).offset().top - 80;
                if (link === '#contact') scrollTarget = document.body.scrollHeight;
                if (this.state.activePage === 'right') {
                    this.state.scrollTarget = scrollTarget;
                    var windowTop = $(window).scrollTop();
                    $('.right-buffer').css({ 'position': 'fixed', 'top': 60 - windowTop + "px" });
                    //window.scrollTo(0, scrollTarget);
                    this.handleNavigation(link, activePage, null);
                } else {
                    $('html, body').animate({ scrollTop: scrollTarget }, 500);
                    //window.scrollTo(0, scrollTarget);
                    this.state.scrollTarget = scrollTarget;
                    NProgress.done();
                }
            }
        }
    }, {
        key: "handleBack",
        value: function handleBack(event) {
            NProgress.start();
            if (event.state.page == 'main' || event.state.page.indexOf('#') != -1) {
                var windowTop = $(window).scrollTop();
                $('.right-buffer').css({ 'position': 'fixed', 'top': 60 - windowTop + "px" });
                $('.main-page').css({ 'display': 'block' });
                //$(window).scrollTop(this.state.scrollTarget);
                this.setState({
                    currentPage: 'main',
                    activePage: 'left'
                });
            } else {
                var scrollTop = $(window).scrollTop();
                if (event.state.page !== 'resume') this.state.activeLink.setState({ active: true });
                var _rightBuffer = null,
                    _bufferType = null;
                _rightBuffer = rightBufferDetails[event.state.page.replace(/-/g, '')]; // TODO: Replace with AJAX
                _bufferType = rightBufferDetails[event.state.page.replace(/-/g, '')].bufferType;
                // if(event.state.page == 'chambara') {// TODO: Replace this with AJAX
                //     rightBuffer = chambara;
                //     bufferType = 'project'
                // } else {
                //     rightBuffer = resume;
                //     bufferType = 'resume';
                // }
                this.setState({
                    currentPage: event.state.page,
                    activePage: 'right',
                    rightBuffer: _rightBuffer,
                    scrollTop: scrollTop,
                    bufferType: _bufferType
                });
            }
        }
    }, {
        key: "goBack",
        value: function goBack() {
            NProgress.start();
            var windowTop = $(window).scrollTop();
            $('.right-buffer').css({ 'position': 'fixed', 'top': 60 - windowTop + "px" });
            $('.main-page').css({ 'display': 'block' });
            //$(window).scrollTop(this.state.scrollTarget);
            history.pushState({ page: 'main' }, 'main-page', '/joseph-boman/');
            this.setState({
                currentPage: 'main',
                activePage: 'left'
            });
        }
    }, {
        key: "toggleMobileMenu",
        value: function toggleMobileMenu() {
            $('.mobile-menu').toggleClass('down');
        }
    }, {
        key: "registerLink",
        value: function registerLink(name, object) {
            this.state[name] = object;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { toggleMobileMenu: this.toggleMobileMenu, handleClick: this.handleMobileMenu }),
                React.createElement(MobileMenu, { projects: this.state.projects, handleClick: this.handleMobileMenu }),
                React.createElement(
                    "div",
                    { className: "main-page" },
                    React.createElement(FrontPage, { projects: this.state.projects, handleClick: this.handleNavigation, registerLink: this.registerLink })
                ),
                React.createElement(RightBuffer, { type: this.state.bufferType, data: this.state.rightBuffer, handleBack: this.goBack }),
                React.createElement(Footer, null)
            );
        }
    }]);

    return App;
}(React.Component);

function FrontPage(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(PageBody, { topSection: React.createElement(FrontPageTop, null), bottomSection: React.createElement(
                "div",
                null,
                React.createElement(About, { handleClick: props.handleClick }),
                React.createElement(Projects, { projects: props.projects, handleClick: props.handleClick, registerLink: props.registerLink })
            ) })
    );
}

function Header(props) {
    return React.createElement(
        "header",
        { id: "header" },
        React.createElement(
            "nav",
            { className: "nav-bar" },
            React.createElement(
                "a",
                { href: "/" },
                React.createElement("img", { src: "http://josephboman.com/wp-content/themes/sephhawkins/images/logo-min.png" }),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "span",
                        null,
                        "oseph"
                    ),
                    " oman"
                )
            ),
            React.createElement(
                "div",
                { className: "desktopMenu" },
                React.createElement(HeaderLink, { text: "ABOUT ME", image: "http://josephboman.com/wp-content/themes/sephhawkins/images/about-2-none.png", hoverImage: "http://josephboman.com/wp-content/themes/sephhawkins/images/about-2.png", handleClick: props.handleClick, link: "#about" }),
                React.createElement(HeaderLink, { text: "RESUME", image: "http://josephboman.com/wp-content/themes/sephhawkins/images/coding-none.png", hoverImage: "http://josephboman.com/wp-content/themes/sephhawkins/images/coding.png", handleClick: props.handleClick, link: "resume" }),
                React.createElement(HeaderLink, { text: "PROJECTS", image: "http://josephboman.com/wp-content/themes/sephhawkins/images/video-game.png", hoverImage: "http://josephboman.com/wp-content/themes/sephhawkins/images/video-game-controller.png", handleClick: props.handleClick, link: "#projects" }),
                React.createElement(HeaderLink, { text: "CONTACT", image: "http://josephboman.com/wp-content/themes/sephhawkins/images/d20-none.png", hoverImage: "http://josephboman.com/wp-content/themes/sephhawkins/images/d20-2.png", handleClick: props.handleClick, link: "#contact" })
            ),
            React.createElement(
                "svg",
                { onClick: props.toggleMobileMenu, height: "60", width: "80", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" })
            )
        )
    );
}

function Footer(props) {
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
            React.createElement(
                "h4",
                { id: "contact" },
                "Contact Me"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { className: "text-link email", href: "mailto:joseph.j.boman@gmail.com" },
                    "E-Mail: joseph.j.boman@gmail.com"
                ),
                React.createElement(
                    "a",
                    { className: "text-link linkedIn", href: "#" },
                    "LinkedIn"
                ),
                React.createElement(
                    "a",
                    { className: "text-link gitHub", href: "#" },
                    "GitHub"
                )
            )
        )
    );
}

function PageBody(props) {
    return React.createElement(
        "div",
        { className: "page" },
        React.createElement(
            "div",
            { className: "page-top" },
            props.topSection
        ),
        React.createElement(
            "div",
            { className: "page-bottom" },
            props.bottomSection
        )
    );
}

function MobileMenu(props) {
    return React.createElement(
        "div",
        { className: "mobile-menu" },
        React.createElement(BasicLink, { link: "#about", sublink: "false", handleClick: props.handleClick, name: "ABOUT ME" }),
        React.createElement(BasicLink, { link: "#projects", sublink: "false", handleClick: props.handleClick, name: "PROJECTS" }),
        props.projects.map(function (project) {
            return React.createElement(BasicLink, { key: project.name, sublink: "true", link: project.link, handleClick: props.handleClick, name: project.name });
        }),
        React.createElement(BasicLink, { link: "resume", sublink: "false", handleClick: props.handleClick, name: "RESUME" }),
        React.createElement(BasicLink, { link: "#contact", sublink: "false", handleClick: props.handleClick, name: "CONTACT" })
    );
}

var HeaderLink = function (_React$Component2) {
    _inherits(HeaderLink, _React$Component2);

    function HeaderLink(props) {
        _classCallCheck(this, HeaderLink);

        var _this3 = _possibleConstructorReturn(this, (HeaderLink.__proto__ || Object.getPrototypeOf(HeaderLink)).call(this, props));

        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(HeaderLink, [{
        key: "handleClick",
        value: function handleClick(e) {
            NProgress.start();
            e.preventDefault();
            if (this.props.link.indexOf('#') !== -1) {
                this.props.handleClick(this.props.link, 'left', false);
            } else {
                this.props.handleClick(this.props.link, 'right', false);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: this.props.link, onClick: this.handleClick, className: "headerLink" },
                React.createElement("img", { src: this.props.image, className: "headerImg" }),
                React.createElement("img", { src: this.props.hoverImage, className: "headerHoverImg" }),
                React.createElement(
                    "h5",
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return HeaderLink;
}(React.Component);

var BasicLink = function (_React$Component3) {
    _inherits(BasicLink, _React$Component3);

    function BasicLink(props) {
        _classCallCheck(this, BasicLink);

        var _this4 = _possibleConstructorReturn(this, (BasicLink.__proto__ || Object.getPrototypeOf(BasicLink)).call(this, props));

        _this4.handleClick = _this4.handleClick.bind(_this4);
        return _this4;
    }

    _createClass(BasicLink, [{
        key: "handleClick",
        value: function handleClick(e) {
            NProgress.start();
            e.preventDefault();
            if (this.props.link.indexOf('#') !== -1) {
                this.props.handleClick(this.props.link, 'left', true);
            } else {
                this.props.handleClick(this.props.link, 'right', true);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: this.props.link, className: "text-link" + (this.props.sublink === "true" ? ' sub-link' : ''), onClick: this.handleClick },
                this.props.name
            );
        }
    }]);

    return BasicLink;
}(React.Component);

function FrontPageTop(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("img", { className: "front-img", src: "http://josephboman.com/wp-content/themes/sephhawkins/images/joseph-boman.png" }),
        React.createElement(
            "h1",
            null,
            "Joseph Boman"
        ),
        React.createElement(
            "h2",
            null,
            "Programmer + Designer"
        )
    );
}

var About = function (_React$Component4) {
    _inherits(About, _React$Component4);

    function About(props) {
        _classCallCheck(this, About);

        var _this5 = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

        _this5.handleClick = _this5.handleClick.bind(_this5);
        return _this5;
    }

    _createClass(About, [{
        key: "handleClick",
        value: function handleClick(e) {
            NProgress.start();
            e.preventDefault();
            var scrollTop = $(window).scrollTop();
            //$(window).scrollTop(0);
            history.pushState({ page: 'resume' }, 'Resume', '/joseph-boman/resume');
            //$(window).scrollTop(scrollTop);
            this.props.handleClick('resume', "right", this);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "about" },
                React.createElement(
                    "h3",
                    null,
                    "ABOUT ME"
                ),
                React.createElement(
                    "p",
                    null,
                    "This is the part where I talk about myself. There's a few lines about things I enjoy and what I've done in the past. And maybe there's a link to my resume in here. ",
                    React.createElement(
                        "a",
                        { className: "text-link", href: "/joseph-boman/resume", onClick: this.handleClick },
                        "Resume"
                    ),
                    " And that's about it"
                )
            );
        }
    }]);

    return About;
}(React.Component);

function Projects(props) {
    var projects = props.projects;
    return React.createElement(
        "div",
        { id: "projects" },
        React.createElement(
            "h3",
            null,
            "PROJECTS"
        ),
        projects.map(function (project) {
            return React.createElement(Project, { key: project.name, handleClick: props.handleClick, registerLink: props.registerLink, link: project.link, name: project.name, image: project.image, tags: project.tags });
        })
    );
}

var ImageSlideshow = function (_React$Component5) {
    _inherits(ImageSlideshow, _React$Component5);

    function ImageSlideshow(props) {
        _classCallCheck(this, ImageSlideshow);

        var _this6 = _possibleConstructorReturn(this, (ImageSlideshow.__proto__ || Object.getPrototypeOf(ImageSlideshow)).call(this, props));

        _this6.switchImage = _this6.switchImage.bind(_this6);
        _this6.state = {
            activeImage: 0
        };
        return _this6;
    }

    _createClass(ImageSlideshow, [{
        key: "switchImage",
        value: function switchImage(activeImage) {
            var leftValue = -100 * activeImage + "%";
            $('.circle-img img').animate({ 'left': leftValue });
            this.setState({
                activeImage: activeImage
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            var images = this.props.images;
            return React.createElement(
                "div",
                { className: "img-slideshow" },
                React.createElement(
                    "div",
                    { className: "circle-img" },
                    images.map(function (image, index) {
                        return React.createElement("img", { key: image.link, src: image.link, alt: image.alt });
                    })
                ),
                React.createElement(
                    "div",
                    { className: "img-selector" },
                    images.map(function (image, index) {
                        return React.createElement(Dot, { key: image.link + '-dot', number: index, active: index === _this7.state.activeImage ? true : false, handleClick: _this7.switchImage });
                    })
                )
            );
        }
    }]);

    return ImageSlideshow;
}(React.Component);

var RightBuffer = function (_React$Component6) {
    _inherits(RightBuffer, _React$Component6);

    function RightBuffer(props) {
        _classCallCheck(this, RightBuffer);

        return _possibleConstructorReturn(this, (RightBuffer.__proto__ || Object.getPrototypeOf(RightBuffer)).call(this, props));
    }

    _createClass(RightBuffer, [{
        key: "render",
        value: function render() {
            switch (this.props.type) {
                case "project":
                    return React.createElement(
                        "div",
                        { className: "right-buffer" },
                        React.createElement(PageBody, { topSection: React.createElement(
                                "div",
                                null,
                                React.createElement(BackArrow, { height: "40", width: "40", handleBack: this.props.handleBack }),
                                React.createElement(ImageSlideshow, { images: this.props.data.images }),
                                React.createElement(
                                    "div",
                                    { className: "project-header" + (this.props.data.tags.length > 2 ? " thin-margin" : " thick-margin") },
                                    React.createElement(
                                        "h1",
                                        null,
                                        this.props.data.name
                                    ),
                                    React.createElement(
                                        "h2",
                                        null,
                                        this.props.data.tagline
                                    ),
                                    this.props.data.tags.map(function (detail) {
                                        return React.createElement(TagDetail, { key: detail.name, name: detail.name, text: detail.text });
                                    })
                                )
                            ),
                            bottomSection: React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "h3",
                                    null,
                                    "ABOUT"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    this.props.data.about
                                ),
                                React.createElement(
                                    "h3",
                                    null,
                                    "LOOKING BACK"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    this.props.data.lookBack
                                ),
                                React.createElement(DownloadLink, { type: this.props.data.downloadType, link: this.props.data.downloadLink }),
                                React.createElement(BackArrow, { height: "40", width: "40", handleBack: this.props.handleBack })
                            ) })
                    );
                case "resume":
                    return React.createElement(
                        "div",
                        { className: "right-buffer" },
                        React.createElement(PageBody, { topSection: React.createElement(
                                "div",
                                null,
                                React.createElement(BackArrow, { height: "40", width: "40", handleBack: this.props.handleBack }),
                                React.createElement(
                                    "h1",
                                    { style: { marginTop: "10px", paddingTop: "20px" } },
                                    this.props.data.name
                                ),
                                React.createElement(
                                    "h2",
                                    null,
                                    this.props.data.tagline
                                ),
                                React.createElement(
                                    "h4",
                                    null,
                                    this.props.data.address
                                )
                            ),
                            bottomSection: React.createElement(
                                "div",
                                null,
                                this.props.data.sections.map(function (section) {
                                    return React.createElement(ResumeSection, { key: section.name, name: section.name, data: section.data });
                                }),
                                React.createElement(DownloadLink, { type: "pdf", link: this.props.data.downloadLink }),
                                React.createElement(BackArrow, { height: "40", width: "40", handleBack: this.props.handleBack })
                            ) })
                    );
                case "none":
                    return React.createElement("div", { className: "right-buffer" });
            }
        }
    }]);

    return RightBuffer;
}(React.Component);

function ResumeSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            props.name
        ),
        props.data.map(function (section) {
            return React.createElement(
                "div",
                { key: section.name },
                React.createElement(
                    "h4",
                    null,
                    section.name,
                    React.createElement(
                        "span",
                        { className: "right time" },
                        section.time
                    ),
                    React.createElement(
                        "span",
                        { className: "right longTime" },
                        section.longTime
                    )
                ),
                React.createElement(
                    "h5",
                    null,
                    section.subname
                ),
                React.createElement(
                    "p",
                    null,
                    section.details
                )
            );
        })
    );
}

function BackArrow(props) {
    return React.createElement(
        "div",
        { className: "arrow-button" },
        React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", height: props.height, viewBox: "0 0 512 512", width: props.width, className: "arrow", onClick: props.handleBack },
            React.createElement("polygon", { points: "512,392 0,256 400,256" }),
            React.createElement("polygon", { points: "512,120 0,256 100,256 432,170 360,256 400,256" })
        )
    );
}

var Dot = function (_React$Component7) {
    _inherits(Dot, _React$Component7);

    function Dot(props) {
        _classCallCheck(this, Dot);

        var _this9 = _possibleConstructorReturn(this, (Dot.__proto__ || Object.getPrototypeOf(Dot)).call(this, props));

        _this9.handleClick = _this9.handleClick.bind(_this9);
        _this9.state = {
            number: _this9.props.number
        };
        return _this9;
    }

    _createClass(Dot, [{
        key: "handleClick",
        value: function handleClick(e) {
            this.props.handleClick(this.state.number);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("span", { className: 'dot' + (this.props.active ? ' current-dot' : ''), onClick: this.handleClick });
        }
    }]);

    return Dot;
}(React.Component);

var Project = function (_React$Component8) {
    _inherits(Project, _React$Component8);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this10 = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this10.props.registerLink(_this10.props.link, _this10);
        _this10.handleClick = _this10.handleClick.bind(_this10);
        _this10.state = {
            href: _this10.props.link,
            active: false
        };
        return _this10;
    }

    _createClass(Project, [{
        key: "handleClick",
        value: function handleClick(e) {
            NProgress.start();
            e.preventDefault();
            var scrollTop = $(window).scrollTop();
            history.pushState({ page: this.state.href }, 'testing', this.state.href);
            this.setState({ active: true });
            this.props.handleClick(this.state.href, "right", this);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "/joseph-boman/" + this.state.href, className: "block-link project" + (this.state.active ? " active" : ""), onClick: this.handleClick },
                React.createElement(Tags, { tags: this.props.tags }),
                React.createElement(
                    "h4",
                    { className: this.props.name.length >= 10 ? 'thin-margin' : 'thick-margin' },
                    this.props.name
                ),
                React.createElement("img", { src: this.props.image, alt: this.props.name })
            );
        }
    }]);

    return Project;
}(React.Component);

function DownloadLink(props) {
    var linkText = null;
    var miniIcon = null;
    switch (props.type) {
        case "Windows":
            miniIcon = React.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", height: "20", viewBox: "0 0 88 88", width: "20", className: "downloadMiniIcon" },
                React.createElement("path", { d: "M0 12.49l35.7-4.9v34.5H0M40 6.91L87.3 0V41.8H40M0 45.74h35.7v34.6L0 75.34M40 46.2H87.3v41.4L40 80.9" })
            );
            linkText = React.createElement(
                "p",
                null,
                "Download for Windows"
            );
            break;
        case "PlayStation":
            miniIcon = React.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", height: "20", viewBox: "0 0 200 200", width: "20", className: "downloadMiniIcon" },
                React.createElement("path", { d: "m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z" })
            );
            linkText = React.createElement(
                "p",
                null,
                "View on PlayStation Store"
            );
            break;
        case "Rules":
            miniIcon = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", viewBox: "0 0 88 88", width: "20", className: "downloadMiniIcon" });
            linkText = React.createElement(
                "p",
                null,
                "Download the Rules"
            );
            break;
        case "pdf":
            miniIcon = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", viewBox: "0 0 88 88", width: "20", className: "downloadMiniIcon" });
            linkText = React.createElement(
                "p",
                null,
                "Download as PDF"
            );
            break;
        default:
            miniIcon = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", viewBox: "0 0 88 88", width: "20", className: "downloadMiniIcon" });
            linkText = React.createElement(
                "p",
                null,
                "Download"
            );
    }
    return React.createElement(
        "a",
        { target: "_blank", href: props.link, className: "block-link downloadLink" },
        React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 0 512 512", width: "40", className: "downloadIcon" },
            React.createElement("polygon", { points: "512,392 0,256 400,256" }),
            React.createElement("polygon", { points: "512,120 0,256 100,256 432,170 360,256 400,256" }),
            React.createElement("polygon", { points: "0,0 200,0 50,50 20,256 50,462 200,512 0,512" })
        ),
        miniIcon,
        linkText
    );
}

function Tags(props) {
    return React.createElement(
        "div",
        { className: "details" },
        React.createElement(
            "div",
            { className: "col-1" },
            React.createElement(Tag, { tag: props.tags[1] }),
            React.createElement(Tag, { tag: props.tags[0] })
        )
    );
}

function Tag(props) {
    return React.createElement(
        "div",
        { className: 'tag ' + props.tag.split('/')[0] + '-tag' },
        React.createElement(
            "p",
            null,
            props.tag.toUpperCase()
        )
    );
}

function TagDetail(props) {
    return React.createElement(
        "div",
        { className: 'tag-details ' + props.name.split('/')[0] + '-tag' },
        React.createElement(
            "p",
            null,
            props.name.toUpperCase() + ": " + props.text
        )
    );
}

(function () {
    ReactDOM.render(React.createElement(App, null), document.getElementById('contents'));
})();
