import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class SocialMediaToolbar extends Component{

    render(){
        return(<div>
                <ul className='makestack'>
                    <div></div>
                    <SocialIcon url="https://www.facebook.com/ZakBulletMusic/" network="facebook"/>
                    <SocialIcon url="https://www.youtube.com/channel/UCne9pab0S3txRE_e3PM-hdg" network="youtube"/>
                    <SocialIcon url="https://www.instagram.com/zachsteuerpa/" network="instagram"/>
                    <SocialIcon url="mailto:zakbulletofficial@gmail.com" network="email"/>
                    <div></div>
                </ul>
              </div>);
    }
}
export default SocialMediaToolbar;