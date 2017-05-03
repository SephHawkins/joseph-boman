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
    downloadLink: "Windows"

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
                    <nav className="nav-bar">
                        <a href="/">
                            <img src="http://josephboman.com/wp-content/themes/sephhawkins/images/logo-min.png" />
                            <p><span>oseph</span> oman</p>
                        </a>
                        <svg height="60" width="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
                        </svg>
                    </nav>
                </header>
                <div className='main-page'>
                    <FrontPage projects={projectsJSON} handleClick={this.handleNavigation} />
                </div>
                <RightBuffer type="project" data={project} handleBack={this.goBack} />
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

class RightBuffer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='right-buffer'>
                <BackArrow height="40" width="40" handleBack={this.props.handleBack} />
                <ImageSlideshow images={this.props.data.images} />
                <h1>{this.props.data.name}</h1>
                <h2>{this.props.data.tagline}</h2>
                {this.props.data.tags.map(detail => <TagDetail key={detail.name} name={detail.name} text={detail.text} />)}
                <div className='text-body'>
                    <h3>ABOUT</h3>
                    <p>{this.props.data.about}</p>
                    <h3>LOOKING BACK</h3>
                    <p>{this.props.data.lookBack}</p>
                    <DownloadLink type={this.props.data.downloadLink} />
                </div>
            </div>
        );
    }
}

function BackArrow(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 0 512 512" width={props.width} className='arrow' onClick={props.handleBack}>
            <polygon points="512,392 0,256 400,256"></polygon>
            <polygon points="512,120 0,256 100,256 432,170 360,256 400,256"></polygon>
        </svg>
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

function DownloadLink(props) {
    let linkText = null;
    let miniIcon = null;
    switch(props.type){
        case "Windows":
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 88 88" width="15" className="downloadMiniIcon">
                <path d="M0 12.49l35.7-4.9v34.5H0M40 6.91L87.3 0V41.8H40M0 45.74h35.7v34.6L0 75.34M40 46.2H87.3v41.4L40 80.9"></path>
                </svg>;
            linkText = <p>Download for Windows</p>;
            break;
        default:
            miniIcon = <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 88 88" width="15" className="downloadMiniIcon">
            </svg>;
            linkText = <p>Download</p>;
    }
    return (
        <a href="link" className="downloadLink">
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
    history.replaceState({page: 'main'}, "Main Page", "");
    ReactDOM.render(
        <App />,
        document.getElementById('contents')
    );
})();
