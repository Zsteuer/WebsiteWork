import React, { Component } from 'react';
import ButtonWithIframe from "./ButtonWithIframe";
import Iframe from 'react-iframe';
import SocialMediaToolbar from "./SocialMediaToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import ModalHeader from 'react-bootstrap/ModalHeader';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from 'react-device-detect';
import { AppBar, Toolbar } from '@material-ui/core';
import {SocialIcon} from "react-social-icons";

class ButtonsAndVideoFrameThatChanges extends Component{
    constructor(props){
        super(props);
        this.state = {
            shouldBeHidden: true,
            urlToDisplayInFrame: "http://www.wikipedia.org",
            showAboutMeModal: false,
            showContactModal: false};
    }

    openAboutMeModel = () =>{
        this.setState({showAboutMeModal: true});
    }

    closeAboutMeModal = () =>{
        this.setState({showAboutMeModal: false});
    }

    openContactModal = () => {
        this.setState({showContactModal : true});
    }

    closeContactModal = () => {
        this.setState({showContactModal: false});
    }

    changeiFrameDiaplay  = (newUrl) => {
        this.setState({urlToDisplayInFrame: newUrl, shouldBeHidden: false});
    }

    hideEmbeddedPage = () =>{
        this.setState({shouldBeHidden: true});
    }

    render(){
        console.log(isMobile);
        return(
            <div>
                <BrowserView>
                 <SocialMediaToolbar className='floatontop'/>
                </BrowserView>
                <MobileView>
                    <AppBar top="auto" bottom="0" style={{ backgroundColor: '#90ee90' }} position="sticky">
                        <Toolbar left="0" right="0">
                            <ul className="makerows">
                                <SocialIcon url="https://www.facebook.com/ZakBulletMusic/" network="facebook"/>
                                <SocialIcon url="https://www.youtube.com/channel/UCne9pab0S3txRE_e3PM-hdg" network="youtube"/>
                                <SocialIcon url="https://www.instagram.com/zachsteuerpa/" network="instagram"/>
                                <SocialIcon url="mailto:zakbulletofficial@gmail.com" network="email"/>
                                <div></div>
                         </ul>
                        </Toolbar>
                    </AppBar>
                </MobileView>
                <Modal
                    isOpen={this.state.showAboutMeModal}
                    onRequestClose={() => this.closeAboutMeModal()}
                    contentLabel="About Me Modal"
                    ariaHideApp={false}
                    className={isMobile? "modal-mobile-style" : "modal-style"}
                >
                    <ModalHeader closeButton onHide={() => this.closeAboutMeModal()}/>
                    <div className="modal-text">
                        <h3>About Me</h3>
                        I'm a guitarist and electronic musician who has played in rock and jazz bands my entire life. My 2017 album,
                        <a href="https://zakbullet.bandcamp.com/album/introducing-zak-bullet-2018-remasters">
                            "Introducing Zak Bullet," </a>
                             was programmed, written, recorded, and mixed by me.
                        I also wrote some of the music for EbenFrosty's cartoon adaptation of his comic series
                        <a href="https://vlare.tv/v/F47YyFjm"> "Mashstache." </a>
                        In addition to jazz and classical solo guitar performances (usually billed as Zach Steuer),
                        I also have a <a href="https://www.youtube.com/watch?v=r4QoZywqcL4">show </a>
                         that combines DJing with live guitar loops in Ableton (usually billed as Zak Bullet).
                        I am a triple-major in math, computer science, and music in college and will start work as a software developer
                        this Summer after graduation.
                    </div>
                    <div  className="close-button-mobile-wrapper">
                    <MobileView>
                        <div className="inline"> </div>
                        <Button className="inline" onClick={() => this.closeAboutMeModal()} variant="danger">close</Button>
                        <div className="inline"></div>
                    </MobileView>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.showContactModal}
                    onRequestClose={() => this.closeContactModal()}
                    contentLabel="Contact Modal"
                    ariaHideApp={false}
                    className={isMobile? "modal-mobile-style" : "modal-style"}
                >
                    <ModalHeader closeButton onHide={() => this.closeContactModal()}/>
                    <div className="modal-text">
                        <h3>Contact</h3>
                        Email: <a href="mailto:zakbulletofficial@gmail.com"> ZakBulletOfficial@Gmail.com </a> <br/>
                        Facebook: <a href="https://www.facebook.com/ZakBulletMusic/"> www.facebook.com/ZakBulletMusic </a> <br/>
                        Bandcamp: <a href="http://zakbullet.bandcamp.com"> zakbullet.bandcamp.com </a><br/>
                        Snapchat: zachsteuer <br/>
                        Instagram: <a href="https://www.instagram.com/zachsteuerpa/"> zachsteuerPA </a> <br/>
                        tiktok: <a href ="https://www.tiktok.com/@thezakbullet"> thezakbullet</a></div>
                    <div  className="close-button-mobile-wrapper">
                        <MobileView>
                            <div className="inline"> </div>
                            <Button className="inline" onClick={() => this.closeContactModal()} variant="danger">close</Button>
                            <div className="inline"></div>
                        </MobileView>
                    </div>
                </Modal>
                <div className="firstInTwoCentered">
                    <BrowserView>
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
                    </BrowserView>
                </div>
                <div className={isMobile? "mobileBridgeBetweenSections" : "bridgeBetweenSections"}>
                        <h3>Welcome to my music site. Click the buttons {isMobile ? "below" : "above"} to get started! If you were looking for a software engineering portfolio (including the source code for this site) check out: <a href="https://github.com/Zsteuer">https://github.com/Zsteuer</a></h3>
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
                <div className = {isMobile? "secondInTwoMobile" : "secondInTwo"} >
                    <div className = 'makerows'>
                        <div></div>
                        <Button variant="success" size="lg" onClick={() => this.openAboutMeModel()}>About Me</Button>
                        <div></div>
                        <Button variant="success" size="lg" onClick={() => this.openContactModal()}>Contact</Button>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonsAndVideoFrameThatChanges;