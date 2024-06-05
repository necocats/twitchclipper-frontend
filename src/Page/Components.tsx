import "bootstrap"
import Navbar from "../components/navbar"
import Sidebar from "../components/Sidebar"
import { clips, playlists } from '../Data/DummyData'
import Cliplist from "../components/Cliplist"

export const Components = () => {
  return(
    <>
      { /* Navbar */ }
      <h1>Navbar</h1>
      <Navbar twitchClipperIconSrc={""} profileIconSrc={""} isLogin={false}/>
      { /* Sidebar */ }
      <h1>Sidebar</h1>
      <Sidebar playlists={playlists} />
      { /* Cliplist */ }
      <h1>ClipList</h1>
      <Cliplist clips={clips} />
    </>
  )
}