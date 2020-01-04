import React, { Component } from 'react';
import ButtonWithIframe from "./ButtonWithIframe";
import Iframe from 'react-iframe';

class ButtonsAndVideoFrameThatChanges extends Component{
    constructor(props){
        super(props);
        this.state = {shouldBeHidden: true,
            urlToDisplayInFrame: "http://www.wikipedia.org"};
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
                <div className="firstInTwoCentered">
                    <div className="inline">
                        <ButtonWithIframe text="bandcamp" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://zakbullet.bandcamp.com") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="blog" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://zakbullet.wordpress.com") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="solo guitar" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://www.youtube.com/embed/47QNJBAYXDw") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="Soundtrack" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("https://vlare.tv/embed/F47YyFjm/false/true/0") }/>
                    </div>
                    <div className="inline">
                        <ButtonWithIframe text="Sound Design Pedagogy" variant="warning" onClickFunc={() => this.changeiFrameDiaplay("http://www.youtube.com/embed/P6pmyqCv8sQ") }/>
                    </div>
                </div>
                <div className="bridgeBetweenSections">
                    <div>
                        <h3><span>Welcome to my music site. Click the buttons above to get started! If you were looking for a software engineering portfolio (including the source code for this site) check out: <a href="https://github.com/Zsteuer">https://github.com/Zsteuer</a></span></h3>
                    </div>
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
            </div>
        )
    }
}

export default ButtonsAndVideoFrameThatChanges;