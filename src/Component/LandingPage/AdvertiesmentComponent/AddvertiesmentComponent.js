import React from 'react';
import './AdvertiesmentComponent.css';

const AddvertiesmentComponent = () => {
    return (
       
    <>

        <div className="bg-[#0000000d] pt-[4rem]" id="banner-1">
            <div className="box-one" >
                <div className='box-one-one'>
                    <div className='box-one-cont-img'>
                        <img src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" 
                        className="box-one-one-img"/>
                    </div>   
                </div>

                <div className='box-one-two'>
                    <div className="box-one-two-1">
                        Never stop listening
                    </div>

                    <p className="box-one-two-2">
                        SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.
                    </p>

                    <div className="box-one-two-3">
                        <a href="https://itunes.apple.com/us/app/soundcloud/id336353151?mt=8"
                            className="box-one-two-3-link" >
                            <img id='apple' src="https://a-v2.sndcdn.com/assets/images/appstore_badge@en_2x-5a6e21e0.png"/>
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us"
                            className="box-one-two-3-link" >
                            <img id='playstore' src="https://a-v2.sndcdn.com/assets/images/google_play_badge@en_2x-ad41a4d7.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="box-two">
                <div className="box-two-cont">
                    <p className="box-two-one">Calling all creators</p>
                    <p className="box-two-two">
                        Get on SoundCloud to connect with fans, share your sounds, and grow your audience. 
                        What are you waiting for?
                    </p>
                    <div>
                        <a href="https://creators.soundcloud.com" className="box-two-three"
                            >Find out more</a>
                    </div>
                </div>
        </div>

        <div className="box-three">
            <p className="box-three-one">
                Thanks for listening. Now join in.
            </p>
            <p className="box-three-two">
                Save tracks, follow artists and build playlists. All for free.
            </p>
        </div>
    </>
    )
}


export default AddvertiesmentComponent