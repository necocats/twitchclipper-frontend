import "bootstrap"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
// import { playlists } from '../Data/DummyData'

export const Components = () => {
  return(
    <>
      { /* Navbar */ }
      <h1>Navbar</h1>
      <Navbar twitchClipperIconSrc={""} profileIconSrc={""} isLogin={false}/>
      { /* Sidebar */ }
      <h1>Sidebar</h1>
      <Sidebar />
    </>
  )
}