var projectsJSON = [
    {
        name: "Chambara",
        link: "chambara",
        image: "https://s.aolcdn.com/hss/storage/midas/bbb2a9e25ec0f36f3cbf6c35135be19f/204153271/0Wxvj1e.jpg",
        tags: ["qa","coder"]
    },
    {
        name: "A Walk in the Park",
        link: "a-walk-in-the-park",
        image: "http://josephboman.com/wp-content/uploads/2015/11/AWITP13x9-e1447699066395.png",
        tags: ["designer","coder"]
    },
    {
        name: "MonoVirus",
        link: "monovirus",
        image: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
        tags: ["modeler", "coder"]
    }
];

var project = {
    name: "MonoVirus",
    tagline: "Action RPG Dungeon Crawler Game",
    about: "MonoVirus was a semester long project that I worked on with three other engineers – Zach Vega-Perkins, Mathew Schacher, and Cherys Fair. Together we wanted to create a dungeon crawler with a bit of a darker twist, much like games like Pandemic.\n\nTo do this, we created a procedurally generated dungeon that gave the appearance of blood vessels, and crafted our player character and our enemy characters as if they were a virus and human cells (respectively).",
    lookBack: "Since the team was composed entirely of engineers, I ended up doing a great deal of design work over the course of the project. I created all of the UI elements in the game, using primarily GIMP, and also created all of the 3D models for the various characters in the game.\n\nDespite that, I still found plenty of time to work with the code, which was a great learning experience for me, as it was my first time working with C#, MonoGame, and XNA.",
    images: [
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
            alt: "MonoVirus-1"
        },
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Monovirus13x9-e1447699039893.png",
            alt: "MonoVirus-2"
        },
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus2-13x9-e1447698995565.png",
            alt: "MonoVirus-3"
        }
    ],
    tags: [
        {
            name: "coder",
            text: "Built in C# using XNA and MonoDevelop"
        },
        {
            name: "modeler",
            text: "Made player and enemy models in Maya"
        },
        {
            name: "ui/ux",
            text: "Created UI elements using GIMP"
        }
    ],
    downloadType: "Windows",
    downloadLink: "https://docs.google.com/uc?id=0BwZrt8zDIOLPOWQ4MExTWXRYZmc&export=download"
}
var chambara = {
    name: "Chambara",
    tagline: "Two-color Stealth Action PS4 Game",
    about: "Chambara was first created at the Dare to be Digital game jam, and quickly expanded with the goal of releasing on PlayStation 4. The game was developed by a team of around 25 USC Games students.\n\nChambara is, at its heart, a local multiplayer experience, in which players utilize minimally colored levels to hide their character, attempting to use strategy and stealth to trick and defeat their opponent",
    lookBack: "As one of the engineers and the QA lead, my primary goal was finding and fixing bugs. I managed a team of eight QA testers, planning out the testing that they would do, organizing their responses and helping the engineering team to determine and fix the root cause. In addition, I fixed many of the bugs, since I was very familiar with the source code",
    images: [
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara13x9-e1447699049873.png",
            alt: "Chambara-1"
        },
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara2-13x9-e1447699059560.png",
            alt: "Chambara-2"
        },
        {
            link: "http://josephboman.com/wp-content/uploads/2015/11/Chambara3-13x9-e1447699027993.png",
            alt: "Chambara-3"
        }
    ],
    tags: [
        {
            name: "coder",
            text: "Built gameplay systems and controller logic in Unity for PS4"
        },
        {
            name: "qa",
            text: "Ran a ten person QA team and passed Sony's TRC"
        }
    ],
    downloadType: "PlayStation",
    downloadLink: "https://store.playstation.com/#!/en-us/games/chambara/cid=UP1279-CUSA05224_00-CHAMBARA00000000"
}

var resume = {
    name: "Joseph Boman",
    tagline: "Technical Associate at Kaiser Permanente",
    sections: [
        {
            name: "EDUCATION",
            data: [
                {
                    name: "University of Southern California",
                    time: "2012-2016",
                    subname: "B.S. in Computer Science (Games)",
                    details: ""
                }
            ]
        },
        {
            name: "WORK EXPERIENCE",
            data: [
                {
                    name: "Technical Associate",
                    subname: "Kaiser Permanente",
                    time: "2016-Present",
                    details: "Rotation Program at Kaiser Permanente. Rotated through four teams over two years"
                },
                {
                    name: "Undergraduate Researcher",
                    subname: "Information Sciences Institute",
                    time: "2015-2016",
                    details: "Worked on various Dev-Ops roles at USC's ISI. Worked under Ted Faber. Cool stuff"
                }
            ]
        },
        {
            name: "PROJECTS",
            data: [
                {
                    name: "Chambara",
                    subname: "team ok",
                    time: "2016",
                    details: "Did a bunch of work for QA stuff. Had a fun time. Tons of fun."
                },
                {
                    name: "MonoVirus",
                    subname: "",
                    time: "2015",
                    details: "Writing stuff for all of these for testing is hard. Should've just lorum ipsemed it."
                }
            ]
        }
    ]
}
var images = [
    {
        link: "http://josephboman.com/wp-content/uploads/2015/11/MonoVirus3-13x9-e1447698985342.png",
        alt: "Chambara-1"
    },
    {
        link: "http://josephboman.com/wp-content/uploads/2015/11/AWITP13x9-e1447699066395.png",
        alt: "Chambara-2"
    },
    {
        link: "https://s.aolcdn.com/hss/storage/midas/bbb2a9e25ec0f36f3cbf6c35135be19f/204153271/0Wxvj1e.jpg",
        alt: "Chambara-3"
    }
];

var tagDetails = [
    {
        name: "coder",
        text: "Built in C# using XNA and MonoDevelop"
    },
    {
        name: "modeler",
        text: "Made player and enemy models in Maya"
    },
    {
        name: "ui/ux",
        text: "Created UI elements using GIMP"
    }
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
        this.registerLink = this.registerLink.bind(this);
        var activePage = 'left';
        var rightBuffer = project;
        if(window.location.href.indexOf('chambara') > -1) { // TODO: Generalize this check
            activePage = 'right';
            rightBuffer = chambara;
        }
        this.state = {
            currentPage: 'Home',
            rightBuffer: rightBuffer,
            bufferType: 'project', // TODO: This should be defined by the URL
            activePage: activePage,
            scrollTarget: 0
        }
        var _this = this;
        window.onpopstate = function(event) {
            _this.handleBack(event);
        }
    }

    componentDidMount() {
        if(this.state.activePage === 'right'){
            $('.main-page').css({'display': 'none'});
            $('.right-buffer').css({'position': 'relative', 'top': '0px', 'left': '0%', 'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px'});
            var arr = window.location.href.split('/');
            console.log(arr);
            history.replaceState({page: arr[arr.length - 2]}, "Right Page", "");
            this.state.activeLink = this.state[arr[arr.length - 2]];
        } else {
            history.replaceState({page: 'main'}, "Main Page", "");
        }
    }

    componentDidUpdate() {
        NProgress.done();
        var _this = this;
        if(this.state.activePage === 'right'){
            $('.active').animate({'left': '-100%'}, 1000);
            $('.right-buffer').animate({'left': '0%'}, 990, function(){
                $('.main-page').css({'display': 'none'});
                $('.right-buffer').css({'position': 'relative', 'top': '0px'});
                $(window).scrollTop(0);
            });
        } else {
            $('.active').animate({'left': '0%'}, 990, function(){
                _this.state.activeLink.setState({active: false});
            });
            $('.right-buffer').animate({'left': '100%'}, 1000, function(){
                $('.right-buffer').css({'top': '60px', 'box-shadow': 'none'});
                if(_this.state.scrollTarget !== 0) {
                    $(window).scrollTop(_this.state.scrollTarget);
                    _this.state.scrollTarget = 0;
                }
            });
        }
    }

    handleNavigation(link, moveTo, activeLink) {
        var scrollTop = $(window).scrollTop();
        $('.right-buffer').css({'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px'});
        let rightBuffer = null, bufferType = null;
        if(link == 'resume') {// TODO: Replace this with AJAX
            rightBuffer = resume;
            bufferType = 'resume';
        }
        else {
            rightBuffer = chambara;
            bufferType = 'project';
        }
        this.setState({
            currentPage: link,
            activePage: moveTo,
            activeLink: activeLink,
            rightBuffer: rightBuffer,
            bufferType: bufferType,
            scrollTop: scrollTop
        });
    }

    handleMobileMenu(link, activePage) {
        this.toggleMobileMenu();
        if(activePage === 'right'){
            NProgress.start();
            if(link !== this.state.currentPage)
                history.pushState({page: link}, link, '/joseph-boman/' + link);
            this.handleNavigation(link, activePage, this.state[link]);
        } else {
            NProgress.start();
            history.pushState({page: link}, link, '/joseph-boman/' + link);
            var scrollTarget = $(link).offset().top - 80;
            if(this.state.activePage === 'right'){
                this.state.scrollTarget = scrollTarget;
                $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
                $('.main-page').css({'display': 'block'});
                this.handleNavigation(link, activePage, this.state[link]);
            } else {
                $(window).scrollTop(scrollTarget);
            }
        }
}

    handleBack(event) {
        NProgress.start();
        if(event.state.page=='main'){
            var windowTop = $(window).scrollTop();
            $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
            $('.main-page').css({'display': 'block'});
            $(window).scrollTop(this.state.scrollTop);
            this.setState({
                currentPage: 'main',
                activePage: 'left'
            });
        } else {
            var scrollTop = $(window).scrollTop();
            this.state.activeLink.setState({active: true});
            let rightBuffer = null;
            if(event.state.page == 'chambara') // TODO: Replace this with AJAX
                rightBuffer = chambara;
            else
                rightBuffer = project;
            this.setState({
                currentPage: event.state.page,
                activePage: 'right',
                rightBuffer: rightBuffer,
                scrollTop: scrollTop
            });
        }
    }

    goBack() {
        NProgress.start();
        var windowTop = $(window).scrollTop();
        $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
        $('.main-page').css({'display': 'block'});
        $(window).scrollTop(this.state.scrollTop);
        history.pushState({page: 'main'}, 'main-page', '/joseph-boman/');
        this.setState({
            currentPage: 'main',
            activePage: 'left'
        });
    }

    toggleMobileMenu() {
        $('.mobile-menu').toggleClass('down');
    }

    registerLink(name, object){
        this.state[name] = object;
    }

    render() {
        return (
            <div>
                <header id="header">
                    <nav className="nav-bar">
                        <a href="/">
                            <img src="http://josephboman.com/wp-content/themes/sephhawkins/images/logo-min.png" />
                            <p><span>oseph</span> oman</p>
                        </a>
                        <svg onClick={this.toggleMobileMenu} height="60" width="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
                        </svg>
                    </nav>
                </header>
                <MobileMenu projects={projectsJSON} handleClick={this.handleMobileMenu} />
                <div className='main-page'>
                    <FrontPage projects={projectsJSON} handleClick={this.handleNavigation} registerLink={this.registerLink} />
                </div>
                <RightBuffer type={this.state.bufferType} data={this.state.rightBuffer} handleBack={this.goBack} />
                <footer id="footer">
                    <p className='copyright'>Created by Joseph Boman</p>
                    <h4>Contact Me</h4>
                    <a className='email' href="mailto:joseph.j.boman@gmail.com">E-Mail: joseph.j.boman@gmail.com</a>
                    <a className='linkedIn' href='#'>LinkedIn</a>
                    <a className='gitHub' href='#'>GitHub</a>
                </footer>
            </div>
        );
    }
}

function FrontPage(props){
    return (
        <div>
            <PageBody topSection={<FrontPageTop />} bottomSection={<div><About handleClick={props.handleClick} /><Projects projects={props.projects} handleClick={props.handleClick} registerLink={props.registerLink} /></div>} />
        </div>
    );
}

function PageBody(props){
    return (
        <div className='page'>
            <div className='page-top'>
                {props.topSection}
            </div>
            <div className='page-bottom'>
                {props.bottomSection}
            </div>
        </div>
    );
}

function MobileMenu(props) {
    return (
        <div className="mobile-menu">
            <BasicLink link='#about' sublink="false" handleClick={props.handleClick} name="ABOUT" />
            <BasicLink link='#projects' sublink="false" handleClick={props.handleClick} name="PROJECTS" />
            {props.projects.map(project => <BasicLink key={project.name} sublink="true" link={project.link} handleClick={props.handleClick} name={project.name} />)}
            <BasicLink link='resume' sublink="false" handleClick={props.handleClick} name="RESUME" />
            <BasicLink link='#contact' sublink="false" handleClick={props.handleClick} name="CONTACT" />
        </div>
    );
}
class BasicLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        NProgress.start();
        e.preventDefault();
        if(this.props.link.indexOf('#') !== -1){
            this.props.handleClick(this.props.link, 'left');
        } else {
            this.props.handleClick(this.props.link, 'right');
        }
    }

    render() {
        return (
            <a href={this.props.link} className={(this.props.sublink === "true") ? 'sub-link' : ''} onClick={this.handleClick}>{this.props.name}</a>
        )
    }
}

function FrontPageTop(props){
    return (
        <div>
            <img className='front-img' src='http://josephboman.com/wp-content/themes/sephhawkins/images/joseph-boman.png' />
            <h1>Joseph Boman</h1>
            <h2>Programmer + Designer</h2>
        </div>
    );
}

class About extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        NProgress.start();
        e.preventDefault();
        var scrollTop = $(window).scrollTop();
        $(window).scrollTop(0);
        history.pushState({page: 'resume'}, 'Resume', '/joseph-boman/resume');
        $(window).scrollTop(scrollTop);
        this.props.handleClick('resume', "right", this);
    }

    render() {
        return (
        <div id='about'>
            <h3>ABOUT ME</h3>
            <p>This is the part where I talk about myself. There's a few lines about things I enjoy and what I've done in the past. And maybe there's a link to my resume in here. <a href='/joseph-boman/resume' onClick={this.handleClick}>Resume</a> And that's about it</p>
        </div>
        );
    }
}

function Projects(props){
    const projects = props.projects;
    return (
        <div id='projects'>
            <h3>PROJECTS</h3>
            {projects.map(project => <Project key={project.name} handleClick={props.handleClick} registerLink={props.registerLink} link={project.link} name={project.name} image={project.image} tags={project.tags} />)}
        </div>
    );
}

class ImageSlideshow extends React.Component {
    constructor(props){
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            activeImage: 0,
        }
    }

    switchImage(activeImage){
        var leftValue = (-100) * activeImage + "%";
        $('.circle-img img').animate({'left': leftValue});
        this.setState({
            activeImage: activeImage
        });
    }

    render() {
        const images = this.props.images;
        return (
            <div>
                <div className="circle-img">
                    {images.map((image, index) => <img key={image.link} src={image.link} alt={image.alt} />)}
                </div>
                <div className="img-selector">
                    {images.map((image, index) => <Dot key={image.link + '-dot'} number={index} active={(index === this.state.activeImage) ? true : false} handleClick={this.switchImage} />)}
                </div>
            </div>
        );
    }
}

class RightBuffer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        switch(this.props.type) {
            case "project":
            return (
                <div className='right-buffer'>
                    <PageBody topSection={<div>
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                        <ImageSlideshow images={this.props.data.images} />
                        <h1>{this.props.data.name}</h1>
                        <h2>{this.props.data.tagline}</h2>
                        {this.props.data.tags.map(detail => <TagDetail key={detail.name} name={detail.name} text={detail.text} />)}
                    </div>}
                    bottomSection={<div>
                        <h3>ABOUT</h3>
                        <p>{this.props.data.about}</p>
                        <h3>LOOKING BACK</h3>
                        <p>{this.props.data.lookBack}</p>
                        <DownloadLink type={this.props.data.downloadType} link={this.props.data.downloadLink} />
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                    </div>} />
                </div>
            );
            case "resume":
            return (
                <div className='right-buffer'>
                    <PageBody topSection={<div>
                    <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                    <h1 style={{marginTop: "10px", paddingTop: "20px"}}>{this.props.data.name}</h1>
                    <h2>{this.props.data.tagline}</h2>
                    </div>}
                    bottomSection={<div>
                        {this.props.data.sections.map(section => <ResumeSection key={section.name} name={section.name} data={section.data} />)}
                        <DownloadLink type="pdf" link={this.props.data.downloadLink} />
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                        </div>} />
                </div>
            );
        }
    }
}

function ResumeSection(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            {props.data.map(section => <div key={section.name}><h4>{section.name}<span className='right'>{section.time}</span></h4><h5>{section.subname}</h5><p>{section.details}</p></div>)}
        </div>
    );
}

function BackArrow(props) {
    return (
        <div className='arrow-button'>
            <svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 0 512 512" width={props.width} className='arrow' onClick={props.handleBack}>
                <polygon points="512,392 0,256 400,256"></polygon>
                <polygon points="512,120 0,256 100,256 432,170 360,256 400,256"></polygon>
            </svg>
        </div>
    );
}

class Dot extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            number: this.props.number
        }
    }

    handleClick(e){
        this.props.handleClick(this.state.number);
    }

    render() {
        return (
            <span className={'dot' + ((this.props.active) ? ' current-dot' : '')} onClick={this.handleClick}></span>
        );
    }
}

class Project extends React.Component {
    constructor(props){
        super(props);
        this.props.registerLink(this.props.link, this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            href: this.props.link,
            active: false,
        }
    }

    handleClick(e){
        NProgress.start();
        e.preventDefault();
        var scrollTop = $(window).scrollTop();
        $(window).scrollTop(0);
        history.pushState({page: this.state.href}, 'testing', this.state.href);
        $(window).scrollTop(scrollTop);
        this.setState({active: true});
        this.props.handleClick(this.state.href, "right", this);
    }

    render() {
        return (
            <a href={"/joseph-boman/" + this.state.href} className={"project" + ((this.state.active) ? " active" : "")} onClick={this.handleClick}>
                <Tags tags={this.props.tags} />
                <h4 style={{marginTop: ((this.props.name.length >= 10 ) ? '20px' : '40px')}}>{this.props.name}</h4>
                <img src={this.props.image} alt={this.props.name} />
                <img className='arrow' src="https://d30y9cdsu7xlg0.cloudfront.net/png/196764-200.png" alt='arrow' />
            </a>
        );
    }
}

function DownloadLink(props) {
    let linkText = null;
    let miniIcon = null;
    switch(props.type){
        case "Windows":
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 88 88" width="20" className="downloadMiniIcon">
                <path d="M0 12.49l35.7-4.9v34.5H0M40 6.91L87.3 0V41.8H40M0 45.74h35.7v34.6L0 75.34M40 46.2H87.3v41.4L40 80.9"></path>
                </svg>;
            linkText = <p>Download for Windows</p>;
            break;
        case "PlayStation":
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 200 200" width="20" className="downloadMiniIcon">
                        <path d="m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z">
                        </path>
                    </svg>;
            linkText = <p>View on PlayStation Store</p>;
            break;
        case "Rules":
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 88 88" width="20" className="downloadMiniIcon">
            </svg>;
            linkText = <p>Download the Rules</p>;
            break;
        case "pdf":
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 88 88" width="20" className="downloadMiniIcon">
            </svg>;
            linkText = <p>Download as PDF</p>;
            break;
        default:
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 88 88" width="20" className="downloadMiniIcon">
            </svg>;
            linkText = <p>Download</p>;
    }
    return (
        <a target="_blank" href={props.link} className="downloadLink">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 512 512" width="40" className="downloadIcon">
                <polygon points="512,392 0,256 400,256"></polygon>
                <polygon points="512,120 0,256 100,256 432,170 360,256 400,256"></polygon>
                <polygon points="0,0 200,0 50,50 20,256 50,462 200,512 0,512"></polygon>
            </svg>
            {miniIcon}
            {linkText}
        </a>
    )
}

function Tags(props){
    return (
        <div className='details'>
            <div className='col-1'>
                <Tag tag={props.tags[1]} />
                <Tag tag={props.tags[0]} />
            </div>
        </div>
    );
}

function Tag(props){
    return (
        <div className={'tag ' + props.tag.split('/')[0] + '-tag'}>
            <p>{props.tag.toUpperCase()}</p>
        </div>
    );
}

function TagDetail(props){
    return (
        <div className={'tag-details ' + props.name.split('/')[0] + '-tag'}>
            <p>{props.name.toUpperCase() + ": " + props.text}</p>
        </div>
    );
}

(function() {
    ReactDOM.render(
        <App />,
        document.getElementById('contents')
    );
})();
