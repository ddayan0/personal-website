import React from 'react';
import "98.css"
import './CreditsBox.css'

class CreditsBox extends React.Component{
    render(){
        return(
            <div class="window" >
                <div class="title-bar">
                    <div class="title-bar-text">CREDITS</div>
                    <div class="title-bar-controls"></div>
                </div>
                <div class="window-body">
                    <p>Made in React using 98.css</p>
                    <h4>https://reactjs.org/</h4>
                    <h4>https://github.com/jdan/98.css</h4>
                </div>
            </div>
        );
    }
}
export default CreditsBox;