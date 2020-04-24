import React from "react"
import "98.css"
import WelcomeBox from "../components/WelcomeBox"
import CreditsBox from "../components/CreditsBox"
import '../components/WelcomeBox.css'
import '../components/CreditsBox.css'
import './Main.css'

const credStyle = {
    padding: '200px'
  };
class Main extends React.Component{
    render(){
        return(
            <div>
                <center><WelcomeBox></WelcomeBox></center>
                <center><div style={credStyle}><CreditsBox></CreditsBox></div></center>
            </div>

        );
    }
}
export default Main;