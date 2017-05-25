var projectsJSON = [
    {
        name: "Chambara",
        link: "chambara",
        image: "http://josephboman.com/images/chambara-1.png",
        tags: ["qa","coder"]
    },
    {
        name: "A Walk in the Park",
        link: "a-walk-in-the-park",
        image: "http://josephboman.com/images/a-walk-in-the-park-4.png",
        tags: ["designer","coder"]
    },
    {
        name: "MonoVirus",
        link: "monovirus",
        image: "http://josephboman.com/images/monovirus-1.png",
        tags: ["modeler", "coder"]
    },
    {
        name: "Portfolio Website",
        link: "portfolio",
        image: "http://josephboman.com/images/website-1.png",
        tags: ["designer","coder"]
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
        this.registerLink = this.registerLink.bind(this);
        var activePage = null;
        var rightBuffer = null;
        var bufferType = 'none';
        var currentPage = 'home';
        switch(window.location.pathname){
            case '/': currentPage = 'home'; activePage = 'left'; break;
            default: currentPage = '404'; activePage = 'right'; bufferType='404'; break;
        }
        this.state = {
            currentPage: currentPage,
            rightBuffer: rightBuffer,
            bufferType: bufferType,
            activePage: activePage,
            scrollTarget: 0,
            projects: projectsJSON,
            clearingBuffer: false
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
            history.replaceState({page: arr[arr.length - 1]}, "Right Page", "");
            this.state.activeLink = this.state[arr[arr.length - 1]];
            var _this = this;
            var url = "http://josephboman.com/json/" + arr[arr.length - 1] + ".json";
            $.ajax({
              dataType: 'json',
              url: url,
              success: function(data){
                  _this.setState({
                      rightBuffer: data,
                      bufferType: data.bufferType,
                  });
                  $('#loader').delay(500).fadeOut('slow', function(){
                      $(this).remove();
                  });
              },
              error: function(data){
                  $('#loader').delay(1000).fadeOut('slow', function(){
                      $(this).remove();
                  });
              }
            });
        } else {
            if(window.location.href.indexOf('#') != -1){
                var link = '#' + window.location.href.split('#')[1];
                var scrollTarget = $(link).offset().top - 80;
                this.state.scrollTarget = scrollTarget;
                window.scrollTo(0, scrollTarget);
                history.replaceState({page: link}, "Main Page", "");
            } else {
                history.replaceState({page: 'main'}, "Main Page", "");
            }
            $('#loader').delay(1000).fadeOut('slow', function(){
                $(this).remove();
            });
        }
    }

    componentDidUpdate() {
        NProgress.done();
        var _this = this;
        if(this.state.clearingBuffer){
            this.state.clearingBuffer = false;
            return;
        }
        if(this.state.activePage === 'right'){
            $('.active').animate({'left': '-100%'}, 1000);
            if($('.main-page').css('display') == 'block'){
                $('.right-buffer').animate({'left': '0%'}, 990, function(){
                    $('.main-page').css({'display': 'none'});
                    $('.right-buffer').css({'position': 'relative', 'top': '0px'});
                    window.scrollTo(0, 0);
                });
            } else {
                $('.right-buffer').css({'position': 'relative', 'top': '0px'});
                window.scrollTo(0, 0);
            }
        } else {
            $('.active').animate({'left': '0%'}, 990, function(){
                if(typeof _this.state.activeLink !== 'undefined' && _this.state.activeLink !== null)
                    _this.state.activeLink.setState({active: false});
            });
            $('.right-buffer').animate({'left': '100%'}, 1000, function(){
                $('.right-buffer').css({'top': '60px', 'box-shadow': 'none'});
                _this.setState({
                    bufferType: 'none',
                    rightBuffer: null,
                    clearingBuffer: true
                });
            });
        }
    }

    handleNavigation(link, moveTo, activeLink) {
        var scrollTop = $(window).scrollTop();
        $('.right-buffer').css({'box-shadow': 'rgba(0, 0, 0, 0.247059) 0px 14px 28px, rgba(0, 0, 0, 0.219608) 0px 10px 10px'});
        let rightBuffer = null, bufferType = null;
        var url = "http://josephboman.com/json/" + link + ".json";
        var _this = this;
        if(typeof this.state.activeLink !== 'undefined' && activeLink === null){
            activeLink = this.state.activeLink;
        }
        if(moveTo === 'right'){
            $.ajax({
              dataType: 'json',
              url: url,
              success: function(data){
                  _this.setState({
                      currentPage: link,
                      activePage: moveTo,
                      activeLink: activeLink,
                      rightBuffer: data,
                      bufferType: data.bufferType,
                      scrollTop: scrollTop
                  });
              }
            });
        } else {
            this.setState({
                currentPage: link,
                activePage: moveTo,
                activeLink: activeLink,
                rightBuffer: (rightBuffer === null ? this.state.rightBuffer : rightBuffer),
                bufferType: (bufferType === null ? this.state.bufferType : bufferType),
                scrollTop: scrollTop
            });
        }
    }

    handleMobileMenu(link, activePage, mobileLink) {
        if(mobileLink)
            this.toggleMobileMenu();
        $('.modal').css({"display":"none"});
        $('body').removeClass("modal-open");
        if(activePage === 'right'){
            NProgress.start();
            if(link !== this.state.currentPage) {
                history.pushState({page: link}, link, link);
                if(typeof this.state.activeLink !== 'undefined' && this.state.activeLink !== null) {
                    $('.active').css({'left': '0%'});
                    this.state.activeLink.setState({active: false});
                }
                if(typeof this.state[link] != 'undefined') {
                    this.state[link].setState({active: true});
                }
            }
            this.handleNavigation(link, activePage, ((typeof this.state[link] != 'undefined') ? this.state[link] : null));
        } else {
            NProgress.start();
            history.pushState({page: link}, link, "http://josephboman.com/" + link);
            $('.main-page').css({'display': 'block'});
            var scrollTarget = $(link).offset().top - 80;
            if(link === '#contact')
                scrollTarget = document.body.scrollHeight + 200;
            if(this.state.activePage === 'right'){
                this.state.scrollTarget = scrollTarget;
                var windowTop = $(window).scrollTop();
                $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
                $('html, body').animate({scrollTop: scrollTarget}, 500);
                this.handleNavigation(link, activePage, null);
            } else {
                $('html, body').animate({scrollTop: scrollTarget}, 500);
                this.state.scrollTarget = scrollTarget;
                NProgress.done();
            }
        }
}

    handleBack(event) {
        NProgress.start();
        if(event.state.page=='main' || event.state.page.indexOf('#') != -1){
            var windowTop = $(window).scrollTop();
            $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
            $('.main-page').css({'display': 'block'});
            this.setState({
                currentPage: 'main',
                activePage: 'left'
            });
        } else {
            var scrollTop = $(window).scrollTop();
            if(typeof this.state.activeLink !== 'undefined' && this.state.activeLink !== null)
                this.state.activeLink.setState({active: true});
            let rightBuffer = null, bufferType = null;
            var _this = this;
            var url = "http://josephboman.com/json/" + event.state.page + ".json";
            $.ajax({
              dataType: 'json',
              url: url,
              success: function(data){
                  _this.setState({
                      currentPage: event.state.page,
                      activePage: 'right',
                      rightBuffer: data,
                      scrollTop: scrollTop,
                      bufferType: data.bufferType
                  });
              },
              error: function(data){
                  _this.setState({
                      currentPage: event.state.page,
                      activePage: 'right',
                      scrollTop: scrollTop,
                      bufferType: '404'
                  });
              }
            });
        }
    }

    goBack() {
        NProgress.start();
        var windowTop = $(window).scrollTop();
        $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
        $('.main-page').css({'display': 'block'});
        window.scrollTo(0, this.state.scrollTop);
        history.pushState({page: 'main'}, 'main-page', '/');
        this.setState({
            currentPage: 'main',
            activePage: 'left',
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
                <Header toggleMobileMenu={this.toggleMobileMenu} handleClick={this.handleMobileMenu} />
                <MobileMenu projects={this.state.projects} handleClick={this.handleMobileMenu} />
                <div className='main-page'>
                    <FrontPage projects={this.state.projects} mobileMenu={this.handleMobileMenu} handleClick={this.handleNavigation} registerLink={this.registerLink} />
                </div>
                <RightBuffer type={this.state.bufferType} data={this.state.rightBuffer} handleBack={this.goBack} />
                <Footer />
            </div>
        );
    }
}

function FrontPage(props){
    return (
        <div>
            <PageBody topSection={<FrontPageTop />} bottomSection={<div><About handleClick={props.mobileMenu} /><Projects projects={props.projects} handleClick={props.handleClick} registerLink={props.registerLink} /></div>} />
        </div>
    );
}

function Header(props){
    return (
        <header id="header">
            <nav className="nav-bar">
                <a href="/">
                    <img src="http://josephboman.com/images/logo.png" />
                    <p><span>oseph</span> oman</p>
                </a>
                <div className="desktopMenu">
                    <HeaderLink text="ABOUT ME" image="http://josephboman.com/images/about.png" hoverImage="http://josephboman.com/images/about-glow.png" handleClick={props.handleClick} link="#about" />
                    <HeaderLink text="RESUME" image="http://josephboman.com/images/resume.png" hoverImage="http://josephboman.com/images/resume-glow.png" handleClick={props.handleClick} link="resume" />
                    <HeaderLink text="PROJECTS" image="http://josephboman.com/images/projects.png" hoverImage="http://josephboman.com/images/projects-glow.png" handleClick={props.handleClick} link="#projects" />
                    <HeaderLink text="CONTACT" image="http://josephboman.com/images/contact.png" hoverImage="http://josephboman.com/images/contact-glow.png" handleClick={props.handleClick} link="#contact" />
                </div>
                <svg onClick={props.toggleMobileMenu} height="60" width="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
                </svg>
            </nav>
        </header>
    );
}

function Footer(props){
    return (
        <footer id="footer">
            <div className="footer">
                <p className='copyright'>Created by Joseph Boman - 2017</p>
                <h4 id='contact'>Contact Me</h4>
                <div>
                    <a className='text-link email' href='mailto:joseph.j.boman@gmail.com'>E-Mail: joseph.j.boman@gmail.com</a>
                    <a className='text-link linkedIn' href='https://www.linkedin.com/in/joseph-boman-3a579896/'>LinkedIn</a>
                    <a className='text-link gitHub' href='https://github.com/SephHawkins/'>GitHub</a>
                </div>
            </div>
        </footer>
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
            <BasicLink link='#about' sublink="false" handleClick={props.handleClick} name="ABOUT ME" />
            <BasicLink link='#projects' sublink="false" handleClick={props.handleClick} name="PROJECTS" />
            {props.projects.map(project => <BasicLink key={project.name} sublink="true" link={project.link} handleClick={props.handleClick} name={project.name} />)}
            <BasicLink link='resume' sublink="false" handleClick={props.handleClick} name="RESUME" />
            <BasicLink link='#contact' sublink="false" handleClick={props.handleClick} name="CONTACT" />
        </div>
    );
}

class HeaderLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        NProgress.start();
        e.preventDefault();
        if(this.props.link.indexOf('#') !== -1){
            this.props.handleClick(this.props.link, 'left', false);
        } else {
            this.props.handleClick(this.props.link, 'right', false);
        }
    }

    render() {
        return (
            <a href={this.props.link} onClick={this.handleClick} className='headerLink'>
                <img src={this.props.image} className='headerImg' />
                <img src={this.props.hoverImage} className='headerHoverImg' />
                <h5>{this.props.text}</h5>
            </a>
        )
    }
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
            this.props.handleClick(this.props.link, 'left', true);
        } else {
            this.props.handleClick(this.props.link, 'right', true);
        }
    }

    render() {
        return (
            <a href={this.props.link} className={"text-link" + ((this.props.sublink === "true") ? ' sub-link' : '')} onClick={this.handleClick}>{this.props.name}</a>
        )
    }
}

function FrontPageTop(props){
    return (
        <div>
            <img className='front-img' src='http://josephboman.com/images/joseph-boman.png' />
            <h1>Joseph Boman</h1>
            <h2>Programmer + Designer</h2>
        </div>
    );
}

class About extends React.Component{
    constructor(props){
        super(props);
        this.toContact = this.toContact.bind(this);
        this.toResume = this.toResume.bind(this);
    }

    toContact(e){
        NProgress.start();
        e.preventDefault();
        history.pushState({page: '#contact'}, '#contact', '#contact');
        this.props.handleClick('#contact', "left", false);
    }

    toResume(e){
        NProgress.start();
        e.preventDefault();
        history.pushState({page: 'resume'}, 'Resume', 'resume');
        this.props.handleClick('resume', "right", false);
    }

    render() {
        return (
        <div id='about'>
            <h3>ABOUT ME</h3>
            <p>Programming and Games have long been two of my greatest passions, and my skill at them has only increased my interest. Both allow me to be both logical and creative, to solve tricky design and programming problems, and to explore the limits of imagination.<br /><br />I graduated from USC, where I studied Computer Science (Games), in 2016, and have worked at Kaiser Permanente since then. While at USC, I got the chance to work on several board games and video games, including one that shipped on PS4. I also worked on a couple of research projects, which you can see more about by looking at the project pages or my <a class="text-link" href="resume" onClick={this.toResume}>Resume</a>.<br /><br />When I'm not immersed in some form of fictional media or outdoors, I enjoy playing piano, spending time with friends, and learning about whatever topic piques my interest. Exploring created worlds is a great passion of mine, and Earth is no exception; if I have a chance to spend time in nature, I will seize the opportunity. If you are interested in working with me, feel free to <a class="text-link" href="#contact" onClick={this.toContact}>contact me</a> and I'll get back to you as soon as possible.</p>
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
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            activeImage: 0,
            cycleImage: true,
            setInterval: setInterval(this.cycleImage, 6000, this)
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.setInterval);
    }

    handleClick(){
        this.props.handleClick(this.state.activeImage);
    }

    switchImage(activeImage, stopCycle){
        var leftValue = (-100) * activeImage + "%";
        $('.circle-img img').animate({'left': leftValue});
        this.setState({
            activeImage: activeImage,
            cycleImage: (!stopCycle)
        });
    }

    cycleImage(slideshow){
        if(slideshow.state.cycleImage) {
            slideshow.switchImage((slideshow.state.activeImage + 1) % slideshow.props.images.length, false);
        }
    }

    render() {
        const images = this.props.images;
        return (
            <div className="img-slideshow">
                <div className="circle-img" onClick={this.handleClick}>
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
        this.state = {
            activeImage: 0
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal(activeImage){
        this.setState({
            activeImage: activeImage
        });
        $('.modal').css({display:"block"});
        $('body').addClass('modal-open');
        var width = $('.modal-content img').width();
        var leftMargin = width/2;
        var topMargin = $('.modal-content').height()/2;
        $('.modal-content').css({
            "margin-top": "-" + topMargin + "px"
        });
        if($('.modal-content').position().left > 50){
            $('.modal-content').css({
                "margin-left": "-" + leftMargin + "px",
                "max-width": width + "px"
            });
        } else {
            $('.modal-content').css({
                "margin-left": 0,
                "max-width": "90%"
            });
        }
    }

    closeModal(){
        $('.modal').css({display:"none"});
        $('body').removeClass('modal-open');
    }

    render() {
        switch(this.props.type) {
            case "project":
            return (
                <div className='right-buffer' type={this.props.type}>
                    <span className='hidden'>{this.props.type}</span>
                    <div className='modal' onClick={this.closeModal}>
                        <div className='modal-content'>
                            <span className='close' onClick={this.closeModal}>×</span>
                            <img src={this.props.data.images[this.state.activeImage].link} alt={this.props.data.images[this.state.activeImage].alt} />
                            <p className='caption'>{this.props.data.images[this.state.activeImage].alt}</p>
                        </div>
                    </div>
                    <PageBody topSection={<div>
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                        <ImageSlideshow images={this.props.data.images} handleClick={this.openModal} />
                        <div className={"project-header" + ((this.props.data.tags.length > 2) ? " thin-margin" : " thick-margin")}>
                            <h1>{this.props.data.name}</h1>
                            <h2>{this.props.data.tagline}</h2>
                            {this.props.data.tags.map(detail => <TagDetail key={detail.name} name={detail.name} text={detail.text} />)}
                        </div>
                    </div>}
                    bottomSection={<div>
                        {this.props.data.sections.map(section => <ProjectSection key={section.name} name={section.name} data={section.details} />)}
                        <DownloadLink type={this.props.data.downloadType} link={this.props.data.downloadLink} />
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                    </div>} />
                </div>
            );
            case "resume":
            return (
                <div className='right-buffer resume'>
                    <span className='hidden'>{this.props.type}</span>
                    <PageBody topSection={<div>
                    <BackArrow height="40" width="40" handleBack={this.props.handleBack}/>
                    <h1 style={{marginTop: "10px", paddingTop: "20px"}}>{this.props.data.name}</h1>
                    <h2>{this.props.data.tagline}</h2>
                    <h4>{this.props.data.address}</h4>
                    </div>}
                    bottomSection={<div>
                        {this.props.data.sections.map(section => <ResumeSection key={section.name} name={section.name} data={section.data} />)}
                        <DownloadLink type="pdf" link={this.props.data.downloadLink} />
                        <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                        </div>} />
                </div>
            );
            case "404":
			return (
                <div className='right-buffer'>
                    <span className='hidden'>{this.props.type}</span>
					<PageBody topSection={<div>
                    <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                    <img className='img404' src="http://josephboman.com/images/404.jpg" />
                    </div>}
                    bottomSection={<div>
                    <h1 style={{marginTop: "10px", paddingTop: "20px"}}>404 Error: Page not Found</h1>
                    <h2>The page you requested does not exist.<br /><br />Please navigate to another page via the header, back buttons, or another URL</h2>
                    <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                    </div>} />
				</div>
			);
            case "none":
            this.state.activeImage = 0;
            return (
                <div className='right-buffer'>
                    <span className='hidden'>{this.props.type}</span>
                </div>
            );
        }
    }
}

function AddLinks(data) {
    var arr = data.split('<a>');
    return (
        <p>
            {arr.map(function(stringPart, index) {
                if(index % 2 === 0)
                    return stringPart;
                else {
                    var arr = stringPart.split("--");
                    return (
                        <a key={arr[0] + arr[1]} href={arr[0]} alt={arr[1]} target="_blank">{arr[1]}</a>
                    );
                }
            })}
        </p>
    );
}

function ProjectSection(props){
    var sectionText = AddLinks(props.data);
    return (
        <div>
            <h3>{props.name}</h3>
            {sectionText}
        </div>
    );
}

function ResumeSection(props) {
    return (
        <div>
            <h3 style={{borderBottom: "#00A56E double 3px"}}>{props.name}</h3>
            {props.data.map(section => <div key={section.name + section.subname}><h4>{section.name}<span className='right time'>{section.time}</span><span className='right longTime'>{section.longTime}</span></h4><h5>{section.subname}</h5><p>{section.details}</p></div>)}
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
        this.props.handleClick(this.state.number, false);
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
        history.pushState({page: this.state.href}, 'testing', this.state.href);
        this.setState({active: true});
        this.props.handleClick(this.state.href, "right", this);
    }

    render() {
        return (
            <a href={this.state.href} className={"block-link project" + ((this.state.active) ? " active" : "")} onClick={this.handleClick}>
                <Tags tags={this.props.tags} />
                <h4 className={((this.props.name.length >= 10 ) ? 'thin-margin' : 'thick-margin')}>{this.props.name}</h4>
                <img src={this.props.image} alt={this.props.name} />
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
        case "none":
            return (
                <div></div>
            );
        default:
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 88 88" width="20" className="downloadMiniIcon">
            </svg>;
            linkText = <p>Download</p>;
    }
    return (
        <a target="_blank" href={props.link} className="block-link downloadLink">
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
