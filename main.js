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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.state = {
            currentPage: 'Home'
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        NProgress.set(0.5);
        $('.active').animate({'left': '-100%'}, 1500);
        $('.right-buffer').animate({'left': '0%'}, 1500, function(){
            NProgress.done();
        });
    }

    handleNavigation(link, moveTo) {
        this.setState({
            currentPage: link,
            activePage: moveTo
        });
    }

    render() {
        return (
            <div>
                <div className='main-page'>
                    <FrontPage projects={projectsJSON} handleClick={this.handleNavigation} />
                </div>
                <div className='right-buffer'>
                    <h1>{this.state.currentPage}</h1>
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

class Project extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            href: "project/" + this.props.link,
            active: false
        }
    }

    handleClick(e){
        NProgress.start();
        e.preventDefault();
        history.pushState('', 'testing', this.state.href);
        this.setState({active: true});
        this.props.handleClick(this.state.href, "right");
    }

    render() {
        return (
            <a href={"project/" + this.props.link} className={"project" + ((this.state.active) ? " active" : "")} onClick={this.handleClick}>
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
(function() {
    ReactDOM.render(
        <App />,
        document.getElementById('contents')
    );
})();

window.onpopstate = function(event){
    history.pushState('', 'testing', '');
}
