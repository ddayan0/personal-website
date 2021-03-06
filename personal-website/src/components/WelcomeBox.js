import React from 'react';
import "98.css"
import './WelcomeBox.css'
class WelcomeBox extends React.Component{
    render(){
        return(
            <div class="window" >
                <div class="title-bar">
                    <div class="title-bar-text">Welcome</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>Welcome to Dennis Dayan's Website</p>
                    <form>
                        <button formAction="https://www.github.com/ddayan0">Github</button>
                        <button formAction="mailto:dennisdayanwork@gmail.com">Email</button>
                        <button formAction="https://twitter.com/DayanDennis">Twitter</button>
                        <button formAction="https://www.linkedin.com/in/dennis-dayan-2006211a9/">LinkedIn</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default WelcomeBox;