import { useState } from 'react';
import { useKonamiCode } from '../ts/konami';
import '../css/Navbar.css'

interface NavbarProps {
    twitchClipperIconSrc: string;
    profileIconSrc: string;
    isLogin: boolean;
    handleSignIn: () => void;
    handleSignOut: () => void;
}

function Navbar({ twitchClipperIconSrc, profileIconSrc, isLogin, handleSignIn, handleSignOut }: NavbarProps){
    const [isRotating, setIsRotating] = useState(false);
  
    useKonamiCode(() => {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // 3秒後に回転を停止
    });
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        <img src={twitchClipperIconSrc} alt="" width="30" height="24" className={`icon ${isRotating ? 'rotating' : ''} d-inline-block align-text-top`}/>
                        Twitch Clipper
                    </a>
                    <div className="d-flex justify-content-center align-items-center">
                        <form>
                            {isLogin ?
                            <button className="btn btn-outline-success me-2" type="button" onClick={() => {handleSignOut()}}>ログアウト</button>
                            : 
                            <button className="btn btn-outline-success me-2" type="button" onClick={() => {handleSignIn()}}>ログイン</button>
                            }
                        </form>
                        <img src={profileIconSrc} className='user-icon' alt="" width="30" height="30"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar