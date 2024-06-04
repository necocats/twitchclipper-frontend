interface NavbarProps {
    twitchClipperIconSrc: string;
    profileIconSrc: string;
    isLogin: boolean;
}

function Navbar({ twitchClipperIconSrc, profileIconSrc, isLogin }: NavbarProps){
    return (
        <>
            <nav className="navbar navbar-light bg-light d-flex">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={twitchClipperIconSrc} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                    Twitch Clipper
                    </a>
                <div className="d-flex justify-content-center align-items-center">
                    <form>
                        {isLogin ?
                        <button className="btn btn-outline-success me-2" type="button">ログアウト</button>
                        : 
                        <button className="btn btn-outline-success me-2" type="button">ログイン</button>
                        }
                    </form>
                    <img src={profileIconSrc} alt="" width="30" height="24"/>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar