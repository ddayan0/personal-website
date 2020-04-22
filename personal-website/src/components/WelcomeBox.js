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
                </div>
            </div>
        );
    }
}

export default WelcomeBox;