var projectsJSON = [
    {
        name: "Chambara",
        image: "https://s.aolcdn.com/hss/storage/midas/bbb2a9e25ec0f36f3cbf6c35135be19f/204153271/0Wxvj1e.jpg",
        tags: ["qa","coder"]
    },
    {
        name: "A Walk in the Park",
        image: "https://s.aolcdn.com/hss/storage/midas/bbb2a9e25ec0f36f3cbf6c35135be19f/204153271/0Wxvj1e.jpg",
        tags: ["designer","coder"]
    }

];

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
            <img src='http://josephboman.com/wp-content/themes/sephhawkins/images/joseph-boman.png'>
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
            {projects.map(project => <Project key={project.name} image={project.image} tags={project.tags} />)}
        </div>
    );
}

function Project(props){
    return (
        <a href="#" className="project">
            <Tags tags={props.tags} />
            <h4>{props.key}</h4>
            <img src={props.image} alt={props.key} />
            <img className='arrow' src="https://d30y9cdsu7xlg0.cloudfront.net/png/196764-200.png" alt='arrow' />
        </a>
    );
}

function Tags(props){
    if(props.tags.length > 2){
        return (
            <div className='details'>
                <div className='col-1'>
                    <Tag tag={props.tags[0]} />
                    <Tag tag={props.tags[1]} />
                </div>
                <div className='col-2'>
                    <Tag tag={props.tags[2]} />
                    <Tag tag={props.tags[3]} />
                </div>
            </div>
        );
    } else {
        return (
            <div className='details'>
                <div className='col-1'>
                    <Tag tag={props.tags[0]} />
                    <Tag tag={props.tags[1]} />
                </div>
            </div>
        );
    }
}

function Tag(props){
    return (
        <div className={'tag ' + props.tag + '-tag'}>
            <p>{props.tag.toUpperCase()}</p>
        </div>
    );
}

ReactDOM.render(
    <FrontPage projects={projectsJSON} />,
    document.getElementById('contents')
);
