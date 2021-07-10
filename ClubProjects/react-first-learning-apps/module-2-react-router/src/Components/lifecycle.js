import React from 'react';


const generateRandomText = () => {
    const alphabets = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", " "];
    var i = 0;
    var text = alphabets[Math.floor(Math.random() * alphabets.length)];
    const maxCount = Math.random() * 100;
    while (i < maxCount) {
        text += alphabets[Math.floor(Math.random() * alphabets.length)].toLocaleLowerCase();
        i++;
    }
    return text;
}

class Lifecycle extends React.Component{
    // 1. GET DEFAULT STATE
    constructor(props){
        super(props);

    // 2. SET INITIAL STATE
        this.state={
            title : "React Tutorials",
            body: "Learning react Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorum architecto asperiores fugit in ipsam facilis, doloremque eius, autem possimus quas facere temporibus? Nemo libero similique placeat impedit aut obcaecati adipisci ratione nam minima quae pariatur est odit ipsa corrupti exercitationem quis dolorum voluptatem, voluptate praesentium tenetur qui magni sequi. Modi ab assumenda sapiente quaerat dolor distinctio doloremque molestias nobis molestiae odio. Pariatur ipsum inventore ipsam porro officia nam sequi, amet harum ipsa dolores itaque doloribus libero ut facilis in veritatis ducimus praesentium, quam perspiciatis culpa ex autem nobis earum! Natus excepturi dolore eum et laudantium hic ex deleniti quasi."
        }
    }

    // 3. BEFORE GETS CREATED ==> This code will be executed before render
    componentWillMount(){
        console.log("Before");
    }

    // ==> This gets executed when moving out of the render
    componentWillUnmount(){
        console.log("After");
    }

    // 4. RENDER JSX
    render(){
        console.log("render");
        return (<div>
            <header>
                <h1>{this.state.title}</h1>
            </header>
            <hr/>
            <main>
                <p>{this.state.body}</p>
                <button onClick={()=>{this.setState({
                    title: generateRandomText()
                })}}>Click to change title</button>
            </main>
        </div>);
    }

    // 5. AFTER A COMPONENT IS MOUNTED
    componentDidMount(){
        console.log("component is mounted");
    }


    // update component are invoked when there is a change to the render component
    componentWillUpdate(){
        console.log("componentWillUpdate", this.state.title);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.state.title);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("stop clicking");

        console.log(nextState);
        return false;
    }
    
    componentWillReceiveProps(){
        console.log("New props");
    }

}

export default Lifecycle;