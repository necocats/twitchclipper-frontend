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
import viteSvg from '/vite.svg'

const Toppage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [userIconSrc, setUserIconSrc] = useState<string>(viteSvg);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [currentPlaylistId, setCurrentPlaylistId] = useState<string>("");

  // 選択しているプレイリストの取得
  const handlePlaylistIdChange = (playlistId: string) => {
    setCurrentPlaylistId(playlistId);
  }

  // ログイン用の関数
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserId(result.user.uid);
        setIsLogin(true);
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
    setUserIconSrc(viteSvg);
    setIsLogin(false);
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
          twitchClipperIconSrc="/vite.svg"
          profileIconSrc={userIconSrc}
          isLogin={isLogin}
          handleSignIn={signInWithGoogle}
          handleSignOut={signOutWithGoogle}
        />
      </header>
      <div className='d-flex'>
        <Sidebar userId={userId} handlePlaylistIdChange={handlePlaylistIdChange}/>
        <Cliplist currentPlaylistId={currentPlaylistId}/>
      </div>
      <AddPlaylistModal />
      <AddClipModal />
    </div>
  );
};

export default Toppage;
