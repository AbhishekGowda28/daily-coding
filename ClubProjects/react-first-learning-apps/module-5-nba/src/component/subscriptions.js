import React from 'react';



class Subscriptions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email : '',
            error:false,
            success:false
        };
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        });
    }


    // If failure occurs then bind the arrow function ()=>{}.bind(this)
    clearMessage(){
        setTimeout(()=>{
            this.setState({
                error: false,
                success: false
            });
        },3000);
    }

    handleSubmit = (event)=>{
        // Preventing default behaviour of form (reload of the page on submittion)
        event.preventDefault();

        let email = this.state.email;
        let emailRegex = /\w+@\w+\.\w{2,}/gi;

        let validateEmail = emailRegex.test(email);

        if(validateEmail){
            this.saveSubscription(email);
        }else{
            console.log(validateEmail);
            this.setState({
                error:true,
                success: false
            });
        }
        this.clearMessage();
    }

    saveSubscription = (email) =>{
        console.log(email);
        const subscriptionURL = "http://localhost:3001/subcriptions";
        fetch(subscriptionURL,{
            method:"POST",
            headers:{
                'Accept' : "application/json",
                'Content-Type':"application/json"
            },
            body: JSON.stringify({email}),
        }).then((response, reject)=>{
            if(response.ok)
                return response;
        }).then((data)=>{
            console.log(data);
            this.setState({
                email: '',
                error: false,
                success: true
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return (
            <div className="subscribe_panel">
                <h3>Subscribe</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" title="example@domain.com" placeholder="example@domain.com" value={this.state.email} onChange={this.onChangeInput}/>
                    <div className={this.state.error?"error-show":"error-fail"}>Check Your Email</div>
                    <div className={this.state.success?"success-show":"sucess-fail"}>Thank You for subscribing</div>
                </form>
                <small>Subscribe to recive updates on NBA </small>
            </div>
        );
    }
}

export default Subscriptions;