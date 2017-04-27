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
    }

    componentDidMount() {
        $('.loader').fadeOut(function(){
            $('.loader').css("left", "100%");
            $('.loader').fadeIn();
        });
    }

    componentDidUpdate() {
        $('.loader').fadeOut(function(){
            $('.loader').css("left", "100%");
            $('.loader').fadeIn();
        });
    }

    render() {
        return (
            <FrontPage projects={projectsJSON} />
        );
    }
}

function FrontPage(props){
    return (
        <div>
            <FrontPageTop />
            <Projects projects={props.projects} />
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
            {projects.map(project => <Project key={project.name} link={project.link} name={project.name} image={project.image} tags={project.tags} />)}
        </div>
    );
}

function Project(props){
    return (
        <a href={"project/" + props.link} className="project">
            <Tags tags={props.tags} />
            <h4 style={{marginTop: ((props.name.length >= 10 ) ? '20px' : '40px')}}>{props.name}</h4>
            <img src={props.image} alt={props.name} />
            <img className='arrow' src="https://d30y9cdsu7xlg0.cloudfront.net/png/196764-200.png" alt='arrow' />
        </a>
    );
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

$('.project').click(function(e){
    e.preventDefault();
    console.log($(this).attr('href'));
    history.pushState('', 'testing', $(this).attr('href'));
    $(this).animate({"left": "-100%"});
    $('.loader').animate({"left": "0%"});
});
