import React from 'react';
import './ProfilePageComponentList.css';
import Footer from '../LandingPage/Footer/Footer';
import {Link, useParams} from 'react-router-dom';


const ProfilePageComponentList = () => {
  return (
    <>
    <div>
        <div class="userInfoBar">
            <div class="userInfoBar__tabs">
                <ul class="profileTabs">  
                    <li class="g-tabs-item">
                        <Link to='/profile' class="g-tabs-link active">
                            All
                        </Link>
                    </li>
                    <li class="g-tabs-item">
                        <Link to='popular-tracks' class="g-tabs-link" >
                            Popular tracks
                        </Link>
                    </li>
                    <li class="g-tabs-item">
                        <Link to='tracks' class="g-tabs-link" >
                            Tracks
                        </Link>
                    </li>
                    <li class="g-tabs-item">
                        <Link to='albums' class="g-tabs-link" >
                            Albums
                        </Link>
                    </li>
                    <li class="g-tabs-item">
                        <Link to='playlists' class="g-tabs-link" >
                            Playlists
                        </Link>
                    </li>
                    <li class="g-tabs-item">
                        <Link to='reports' class="g-tabs-link" >
                            Reposts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='after_list_box'>
        <div className='comming_soon'>
            <div className='comming_soon_image'></div>             
            <div>comming soon</div>
            <Link style={{textDecoration: 'none'}} to='/discover'>Browse trending playlists</Link>
        </div>
        <div className='sideBar'>
            <div className='side_items'>
                <div className='sideList'>
                    <div className='list_div'>
                        <h6 className='count'>Followers</h6>
                        <div>0</div>
                    </div>
                    <div className='list_div'>
                        <h6 className='count'>Followings</h6>
                        <div>0</div>
                    </div>
                    <div className='list_div'>
                        <h6 className='count'>Tracks</h6>
                        <div>0</div>
                    </div>
                </div>
            </div>
            <div>
                {<Footer />}
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfilePageComponentList