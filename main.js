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
        this.state = {
            currentPage: 'Home'
        }
        var _this = this;
        window.onpopstate = function(event) {
            _this.handleBack(event);
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        NProgress.done();
        var _this = this;
        if(this.state.activePage === 'right'){
            $('.active').animate({'left': '-100%'}, 1000);
            $('.right-buffer').animate({'left': '0%'}, 990, function(){
                $('.main-page').css({'display': 'none'});
                $('.right-buffer').css({'position': 'absolute', 'top': '0px'});
                $('html,body').scrollTop(0);
            });
        } else {
            $('.active').animate({'left': '0%'}, 990, function(){
                _this.state.activeLink.setState({active: false});
            });
            $('.right-buffer').animate({'left': '100%'}, 1000, function(){
                $('.right-buffer').css({'top': '60px'});
            });
        }
    }

    handleNavigation(link, moveTo, activeLink) {
        this.setState({
            currentPage: link,
            activePage: moveTo,
            activeLink: activeLink
        });
    }

    handleBack(event) {
        NProgress.start();
        if(event.state.page=='main'){
            var windowTop = $(window).scrollTop();
            $('.right-buffer').css({'position': 'fixed', 'top': (60 - windowTop) + "px"});
            $('.main-page').css({'display': 'block'});
            var newTop = $('.active').offset().top;
            $('html,body').scrollTop(newTop);
            this.setState({
                currentPage: '',
                activePage: 'left'
            });
        }
    }

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div>
                <header id="header">
                    <nav id="nav-bar">
                        <a href="/">
                            <img src="http://josephboman.com/wp-content/themes/sephhawkins/images/logo-min.png" />
                            <p><span>oseph</span> oman</p>
                        </a>
                        <svg height="60" width="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
                        </svg>
                    </nav>
                </header>
                <div className='main-page'>
                    <FrontPage projects={projectsJSON} handleClick={this.handleNavigation} />
                </div>
                <div className='right-buffer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 512 512" width="40" className='arrow' onClick={this.goBack}>
                        <polygon points="512,392 0,256 400,256"></polygon>
                        <polygon points="512,120 0,256 100,256 432,170 360,256 400,256"></polygon>
                    </svg>
                    <ImageSlideshow images={images} />
                    <h1>MonoVirus</h1>
                    <h2>Action RPG Dungeon Crawler Game</h2>
                    {tagDetails.map(detail => <TagDetail key={detail.name} name={detail.name} text={detail.text} />)}
                </div>
            </div>
        );
    }
}

function FrontPage(props){
    return (
        <div>
            <FrontPageTop />
            <Projects projects={props.projects} handleClick={props.handleClick} />
        </div>
    );
}

function FrontPageTop(props){
    return (
        <div className="front-page-top">
            <img src='http://josephboman.com/wp-content/themes/sephhawkins/images/joseph-boman.png' />
            <h1>Joseph Boman</h1>
            <h2>Programmer + Designer</h2>
        </div>
    );
}

function Projects(props){
    const projects = props.projects;
    return (
        <div className='projects'>
            <h3>PROJECTS</h3>
            {projects.map(project => <Project key={project.name} handleClick={props.handleClick} link={project.link} name={project.name} image={project.image} tags={project.tags} />)}
        </div>
    );
}

class ImageSlideshow extends React.Component {
    constructor(props){
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            activeImage: 0,
            images: this.props.images,
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
        const images = this.state.images;
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
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            href: this.props.link,
            active: false,
        }
    }

    handleClick(e){
        NProgress.start();
        e.preventDefault();
        history.pushState({page: 'main'}, 'testing', this.state.href);
        this.setState({active: true});
        this.props.handleClick(this.state.href, "right", this);
    }

    render() {
        return (
            <a href={"/project/" + this.state.href} className={"project" + ((this.state.active) ? " active" : "")} onClick={this.handleClick}>
                <Tags tags={this.props.tags} />
                <h4 style={{marginTop: ((this.props.name.length >= 10 ) ? '20px' : '40px')}}>{this.props.name}</h4>
                <img src={this.props.image} alt={this.props.name} />
                <img className='arrow' src="https://d30y9cdsu7xlg0.cloudfront.net/png/196764-200.png" alt='arrow' />
            </a>
        );
    }
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
    history.replaceState({page: 'main'}, "Main Page", "");
    ReactDOM.render(
        <App />,
        document.getElementById('contents')
    );
})();
