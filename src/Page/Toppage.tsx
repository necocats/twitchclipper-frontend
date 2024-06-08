import React, { useEffect, useState } from 'react';
import {auth, provider} from '../ts/firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Cliplist from '../components/Cliplist';
import AddClipModal from '../components/AddClipModal';
import AddPlaylistModal from '../components/AddPlaylistModal';
import '../css/Cliplist.css'
import '../css/Card.css';
import icon from '/twitch_clipper_icon.png'

const Toppage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [userIconSrc, setUserIconSrc] = useState<string>(icon);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [currentPlaylistId, setCurrentPlaylistId] = useState<string>("");
  const [currentPlaylistName, setCurrentPlaylistName] = useState<string>("");

  // 選択しているプレイリストの取得
  const handlePlaylistChange = (playlistId: string, playlistName: string) => {
    setCurrentPlaylistId(playlistId);
    setCurrentPlaylistName(playlistName);
  }

  // ログイン用の関数
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserId(result.user.uid);
        setIsLogin(true);
        window.location.reload();
      }).catch((error) => {
        console.error(error)
      });
  }
  
  // ログアウト用の関数
  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
      console.log('Sign out successful');
    }).catch((error) => {
      console.error(error);
    })
    setUserId("");
    setUserIconSrc(icon);
    setIsLogin(false);
    window.location.reload();
  }

  // ページ読み込み時にログインしているか確認
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUserId(user.uid);
        console.log(user.uid);
        if(user.photoURL){
          setUserIconSrc(user.photoURL);
        }
        setIsLogin(true);
      }
    })
  }, []);

  return (
    <div>
      <header>
        <Navbar
          twitchClipperIconSrc={icon}
          profileIconSrc={userIconSrc}
          isLogin={isLogin}
          handleSignIn={signInWithGoogle}
          handleSignOut={signOutWithGoogle}
        />
      </header>
      <div className='d-flex'>
        <Sidebar userId={userId} handlePlaylistChange={handlePlaylistChange} isLogin={isLogin}/>
        <Cliplist userId={userId} currentPlaylistId={currentPlaylistId} currentPlaylistName={currentPlaylistName}/>
      </div>
      <AddPlaylistModal/>
      <AddClipModal userId={userId} playlistId={currentPlaylistId}/>
    </div>
  );
};

export default Toppage;
