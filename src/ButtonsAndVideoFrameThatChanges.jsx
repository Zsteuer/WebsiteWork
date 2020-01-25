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
import { Menu, MenuItem} from '@material-ui/core';
import {SocialIcon} from "react-social-icons";

const MenuOptions = { // I realized I'd have to make a row of buttons for desktop and a dropdown for mobile
    BANDCAMP: {
        title: "bandcamp",
        desktopUrl: "https://zakbullet.bandcamp.com",
        mobileUrl: "https://zakbullet.bandcamp.com"},
    WORDPRESS: {
        title: "blog",
        desktopUrl: "https://zakbullet.wordpress.com",
        mobileUrl: "https://zakbullet.wordpress.com"
    },
    YOUTUBESOLOGUITAR:{
        title: "solo guitar",
        desktopUrl: "https://www.youtube.com/embed/47QNJBAYXDw",
        mobileUrl: "https://www.youtube.com/embed/47QNJBAYXDw",
    },
    VIMEOSOUNDTRACK:{
        title: "Soundtrack",
        desktopUrl: "https://vlare.tv/embed/F47YyFjm/false/true/0",
        mobileUrl: "https://vlare.tv/v/F47YyFjm"
    },
    YOUTUBESOUNDDESIGN: {
        title: "Sound Design Pedagogy",
        desktopUrl: "https://www.youtube.com/embed/P6pmyqCv8sQ",
        mobileUrl: "https://www.youtube.com/embed/P6pmyqCv8sQ",
    },
    YOUTUBELIVESHOW: {
        title: "DJing with live guitar loops",
        desktopUrl: "https://www.youtube.com/embed/r4QoZywqcL4",
        mobileUrl: "https://www.youtube.com/embed/r4QoZywqcL4"
    }
}

const defaultMobileMenuText = "Choose one";

class ButtonsAndVideoFrameThatChanges extends Component{

constructor(props){
        super(props);
        this.state = {
            shouldBeHidden: true, // this controls the iframe for both the mobile and desktop frames
            urlToDisplayInFrame: null,
            showAboutMeModal: false,
            showContactModal: false,
            mobileMenuOpen: false,
            mobileMenuText: defaultMobileMenuText,
            anchorEl: null};
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

    openMobileMenu = () =>{
        this.setState({mobileMenuOpen: true});
    }

    closeMobileMenu = () =>{
        this.setState({mobileMenuOpen: false});
    }

    menuOpenClick = event => {
        this.setState({ anchorEl: event.currentTarget });
        this.openMobileMenu();
    };

    handleMobileMenuOptions = (option) =>{
        this.setState(
            {
                mobileMenuOpen : false,
                shouldBeHidden : false,
            mobileMenuText : option.title,
            urlToDisplayInFrame: option.mobileUrl,
           });
    }

    areElementsColliding = (e1, e2) =>{
        // Inspired by https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
        var rect1 = e1.getBoundingClientRect();
        var rect2 = e2.getBoundingClientRect();

        return !(
            rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right
        );
    }

    resetMobileOptions = () =>{
        this.setState({
            shouldBeHidden: true,
            mobileMenuText: defaultMobileMenuText,
            mobileMenuOpen: false});
    }

    render(){
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        const desktopButtons = [];
        let desktopButtonNum = 0;
        for (const e of Object.keys(MenuOptions)){
            desktopButtons.push(<div className="inline" key={MenuOptions[e].title}>
                <ButtonWithIframe text={MenuOptions[e].title} variant={desktopButtonNum % 2 == 0 ? "warning" : "dark"} onClickFunc={() => this.changeiFrameDiaplay(MenuOptions[e].desktopUrl) }/>
        </div>)
            desktopButtonNum++;
        }
        const mobileMenuOptions = [];
        for (const e of Object.keys(MenuOptions)){
            mobileMenuOptions.push(<MenuItem onClick={() => this.handleMobileMenuOptions(MenuOptions[e])} key={MenuOptions[e].title}>
                {MenuOptions[e].title}
            </MenuItem>)
        }
        return(
            <div>
                <BrowserView>
                    {/* <SocialMediaToolbar className='floatontop'/> */}
                    <div className="footer" style={{ backgroundColor: '#90ee90', zIndex: 9999 }}>
                        <div className="makerows" style={{ padding: '6px' }}>
                            {/* "footer" has fixed 48px */}
                            <div/>
                            <SocialIcon url="https://www.facebook.com/ZakBulletMusic/" network="facebook" style={{ height: 36, width: 36 }}/>
                            <SocialIcon url="https://www.youtube.com/channel/UCne9pab0S3txRE_e3PM-hdg" network="youtube" style={{ height: 36, width: 36 }}/>
                            <SocialIcon url="https://www.instagram.com/zachsteuerpa/" network="instagram" style={{ height: 36, width: 36 }}/>
                            <SocialIcon url="mailto:zakbulletofficial@gmail.com" network="email" style={{ height: 36, width: 36 }}/>
                            <div/>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="header" style={{ backgroundColor: '#90ee90', zIndex: 9999 }}>
                                <div className="makerows" style={{ padding: '6px' }}>
                                    {/* "header" has fixed 48px */}
                                    <div/>
                                    <SocialIcon url="https://www.facebook.com/ZakBulletMusic/" network="facebook" style={{ height: 36, width: 36 }}/>
                                    <SocialIcon url="https://www.youtube.com/channel/UCne9pab0S3txRE_e3PM-hdg" network="youtube" style={{ height: 36, width: 36 }}/>
                                    <SocialIcon url="https://www.instagram.com/zachsteuerpa/" network="instagram" style={{ height: 36, width: 36 }}/>
                                    <SocialIcon url="mailto:zakbulletofficial@gmail.com" network="email" style={{ height: 36, width: 36 }}/>
                                    <div/>
                                </div>
                    </div>
                </MobileView>
                <Modal
                    isOpen={this.state.showAboutMeModal}
                    onRequestClose={() => this.closeAboutMeModal()}
                    contentLabel="About Me Modal"
                    ariaHideApp={false}
                    className={isMobile? "modal-mobile-style" : "modal-style"}
                >
                    <ModalHeader closeButton onHide={() => this.closeAboutMeModal()}
                                 style={isMobile ? {height: "48px"} : null}/>
                    {/* if it is, we hide it under the top toolbar */}
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
                        <Button className="inline" onClick={() => this.closeAboutMeModal()} variant="danger">Close</Button>
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
                        <ModalHeader closeButton onHide={() => this.closeContactModal()}
                                     style={isMobile ? {height: "48px"} : null}/>
                        {/* if it is, we hide it under the top toolbar */}
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
                            <Button className="inline" onClick={() => this.closeContactModal()} variant="danger">Close</Button>
                            <div className="inline"></div>
                        </MobileView>
                    </div>
                </Modal>
                <div className="firstInTwoCentered">
                    <BrowserView>
                        {desktopButtons}
                    </BrowserView>
                </div>
                <div className={isMobile? "mobileBridgeBetweenSections" : "bridgeBetweenSections"}>
                        <h3>Welcome to my music site. Click the buttons {isMobile ? "below" : "above"} to get started! If you were looking for a software engineering portfolio (including the source code for this site) check out: <a href="https://github.com/Zsteuer">https://github.com/Zsteuer</a></h3>
                </div>
                <div className="secondInTwo">
                    <BrowserView>
                    <div>
                        <div>
                            {this.state.shouldBeHidden? null: <ButtonWithIframe text="Close embedded page" variant="danger" onClickFunc={() => this.hideEmbeddedPage() }/> }
                        </div>
                        {this.state.shouldBeHidden? null : <Iframe url={this.state.urlToDisplayInFrame}
                        className="iframe"/> }
                    </div>
                    </BrowserView>
                </div>
                <div className = {isMobile? "secondInTwoMobile" : "secondInTwo"} >
                    <div className = 'makerows' position="relative">
                        <div></div>
                        <Button variant="success" size="lg" onClick={() => this.openAboutMeModel()}>About Me</Button>
                        <div></div>
                        <Button variant="success" size="lg" onClick={() => this.openContactModal()}>Contact</Button>
                        <div></div>
                    </div>
                </div>
                <BrowserView>
                    <div className="secondInTwo" height="96px"/>
                    {/* padding for the toolbar */}
                </BrowserView>
                <MobileView>
                    <Button id="openMobileMenuButton" className="secondInTwo" variant="dark" size="lg" style={{ marginTop : "25px", marginBottom: "0px"}} onClick={this.menuOpenClick}>{this.state.mobileMenuText}
                    </Button>
                    <div className="secondInTwo" style={{ marginTop : "0px"}}>
                        <div>
                        <Menu
                            id="simple-menu"
                            open={this.state.mobileMenuOpen}
                            onClose={() => this.closeMobileMenu()}
                            anchorEl={this.state.anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                        >
                            {mobileMenuOptions}
                            <MenuItem onClick={() => this.resetMobileOptions()}>Close</MenuItem>
                        </Menu>
                        {this.state.shouldBeHidden? null : <Iframe style={{marginTop: "0px"}} url={this.state.urlToDisplayInFrame}
                                                                   width={windowWidth*.9 + "px"} height={windowHeight*.9 + "px"} display="initial" position="relative"/>
                        }
                        </div>
                    </div>
                    <div className="secondInTwo" style={{height:"100%", width: "100%", marginTop: "0px"}}>
                    </div>
                </MobileView>
            </div>
        )
    }
}

export default ButtonsAndVideoFrameThatChanges;