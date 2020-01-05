import React, { Component } from 'react';
import ButtonWithIframe from "./ButtonWithIframe";
import Iframe from 'react-iframe';
import SocialMediaToolbar from "./SocialMediaToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";

class ButtonsAndVideoFrameThatChanges extends Component{
    constructor(props){
        super(props);
        this.state = {
            shouldBeHidden: true,
            urlToDisplayInFrame: "http://www.wikipedia.org",
            showAboutMeModal: false,
            showContactModal: false};
    }

    changeiFrameDiaplay  = (newUrl) => {
        this.setState({urlToDisplayInFrame: newUrl, shouldBeHidden: false});
    }

    hideEmbeddedPage = () =>{
        this.setState({shouldBeHidden: true});
    }

    render(){
        return(
            <div>
                <SocialMediaToolbar className='floatontop'/>
                <div className="firstInTwoCentered">
                    <div className="inline">
                        <ButtonWithIframe text="bandcamp" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://zakbullet.bandcamp.com") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="blog" variant="dark" onClickFunc={() => this.changeiFrameDiaplay("http://zakbullet.wordpress.com") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="solo guitar" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://www.youtube.com/embed/47QNJBAYXDw") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="Soundtrack" variant="dark" onClickFunc={() => this.changeiFrameDiaplay("https://vlare.tv/embed/F47YyFjm/false/true/0") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="Sound Design Pedagogy" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://www.youtube.com/embed/P6pmyqCv8sQ") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="DJing with live guitar loops" variant="dark" onClickFunc={() => this.changeiFrameDiaplay("http://www.youtube.com/embed/r4QoZywqcL4") }/>
                    </div>
                </div>
                <div className="bridgeBetweenSections">
                        <h3>Welcome to my music site. Click the buttons above to get started! If you were looking for a software engineering portfolio (including the source code for this site) check out: <a href="https://github.com/Zsteuer">https://github.com/Zsteuer</a></h3>
                </div>
                <div className="secondInTwo">
                    {this.state.shouldBeHidden? null: <ButtonWithIframe text="Close embedded page" variant="danger" onClickFunc={() => this.hideEmbeddedPage() }/> }
                </div>
                <div className="secondInTwo">
                    <div>
                        {this.state.shouldBeHidden? null : <Iframe url={this.state.urlToDisplayInFrame}
                        width="1080px" height="720px" display="initial" position="relative"/> }
                    </div>
                </div>
                <div className = "secondInTwo">
                    <div className = 'makerows'>
                        <div></div>
                        <Button variant="success" size="lg">About Me</Button>
                        <div></div>
                        <Button variant="success" size="lg">Contact</Button>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonsAndVideoFrameThatChanges;