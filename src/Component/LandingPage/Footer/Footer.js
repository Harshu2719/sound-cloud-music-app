import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="l-front-footer">
        <div class="l-footer sc-text-verylight sc-text-secondary marketing sc-border-light-top">  
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/people/directory" title="People directory">Directory - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/pages/contact" title="About SoundCloud">About us - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/creators.soundcloud.com" target="_blank" title="Artist Resources">Artist Resources -</a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/blog.soundcloud.com" target="_blank" title="SoundCloud blog">Blog - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/soundcloud.com/jobs" target="_blank" title="Jobs at SoundCloud">Jobs - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/developers.soundcloud.com" target="_blank" title="SoundCloud for developers">Developers - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/help.soundcloud.com" target="_blank" title="SoundCloud help">Help - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/terms-of-use" title="Terms of use">Legal - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/pages/privacy" title="Privacy policy">Privacy - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/pages/cookies" title="Cookie Policy">Cookie Policy - </a>
            <a class="cookie-manager sc-link-verylight sc-link-secondary" cursor="pointer" href="#" title="Cookie Manager">Cookie Manager - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/imprint" title="Company information">Imprint - </a>
            <a class="sc-link-verylight sc-link-secondary" href="https://soundcloud.com/charts/top" title="Charts">Charts</a>
	        <div class="footer__localeSelector sc-mt-3x">
		        <Link to= '/language'  >Language: <span class="localeSelector_language sc-text">English (US)</span></Link>
            </div>
	    </div>
    </div>
  )
}

export default Footer