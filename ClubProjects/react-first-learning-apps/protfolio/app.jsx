const Protofolio = function () {

    return (
        <div tabIndex="1">
            <Header />
            <About />
            <Projects />
            <Skills />
            <Resources />
            <Message />
            <Contact />
            <Copyright />
        </div>
    );
}

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <h1>About Me</h1>
                <img src="./images/avator.png" alt="profile-image" height="300px" />
                <p>
                    Software Engineer with over 1 year of experience. Skilled in front end technologies like HTML, CSS, Javascript, jQuery, Bootstrap, SCSS.
                    <br />
                    And also skilled in React library.
                    Skilled in Designing, Developing and Testing React Components.
                </p>
            </div>
        );
    }
}

class Resource extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="resource">
                <div className="title">{this.props.title}</div>
                <div className="description">
                    {this.props.description}
                </div>
            </li>
        );
    }

}

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: []
        }
    }

    componentDidMount() {
        this.setState({
            resources: Seed.resources
        });
    }

    render() {
        return (
            <div id="resources" tabIndex="2">
                <h2>Resources</h2>
                <ul>
                    {this.state.resources.map((resource) => {
                        return (<Resource title={resource.title} description={resource.description} />)
                    })}
                </ul>
            </div>
        );
    }
}



class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }


    componentDidMount() {
        this.setState({
            projects: Seed.projects
        });
    }

    render() {
        return (
            <div id="projects">
                {this.state.projects.map((project) => {
                    return <Project key={project.id} title={project.title} image={project.image} description={project.description} />
                })}
            </div>
        );
    }
}


/**
 * 
 * const style = {backgroundSize : cover};
 * 
 */



class Project extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        // const projectBackgroundStyle = { background: `url(${this.props.image}) no-repeat`,backgroundSize : "contain" };
        return (
            <div className="project" >
                <div className="title">{this.props.title}</div>
                <div className="projectData">
                    <div class="projectImg"><img src={this.props.image} alt={this.props.title} title={this.props.title} height="150px" /></div>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
}

const Skills = function () {
    return (<div id="skills">
        <h1>Skills</h1>
        <ul>
            <li>
                <p>Front-end Skills</p>
                <ul>
                    <li>HTML</li>
                    <li>XML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
            </li>
            <li>
                <p>Back-end Skills</p>
                <ul>
                    <li>SQL and No Sql DB</li>
                    <li>nodeJS</li>
                    <li>ExpressJS</li>
                </ul>
            </li>
            <li>
                <p>Miscellinous Skills</p>
                <ul>
                    <li>Regex</li>
                    <li>VSCode</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </li>
        </ul>
    </div>);
}


class Contact extends React.Component {
    render() {
        return (
            <div id="contacts">
                <div className="mail"><a href="mailto:abhi.gowda28@gmail.com"><i class="fa fa-envelope-o"> Abhishek Gowda</i></a></div>
                <div className="linkedin"><i class="fa fa-linkedin"> Connect</i></div>
                <div className="fb"><i class="fa fa-facebook"> Message</i></div>
                <div className="twitter"> <i class="fa fa-twitter"> Post</i></div>
            </div>
        );
    }
}

const Header = () => {
    return (
        <header>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </header>
    );
}

const Message = function (props) {

    return (
        <div className="msg">
            <div className="name">
                <label htmlFor="msg-name"> What is your name ? </label>
                <input id="msg-name" required={true} placeholder="Enter your name" />
            </div>
            <div className="email">
                <label htmlFor="msg-email"> How can I contact you ? </label>
                <input id="msg-email" type="email" required={true} placeholder="contact email ID" />
            </div>
            <div className="description">
                <label htmlFor="msg-description"> Leave a Message </label>
                <textarea id="msg-description" placeholder="Add a message"></textarea>
            </div>
            <button><i class="fa fa-paper-plane"> Send Message</i></button>
        </div>
    );
};

class Copyright extends React.Component {
    render() {
        return (
            <div className="copyright">&copy; {this.getYear()} Abhishek Gowda</div>
        );
    }

    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

}

ReactDOM.render(<Protofolio />, document.getElementById("app"));