import "bootstrap"
import Navbar from "../components/navbar"
import PlaylistsList from "../components/PlaylistsList"
import { playlists } from '../Data/DummyData'

export const Components = () => {
  return(
    <>
      { /* Navbar */ }
      <h1>Navbar</h1>
      <Navbar twitchClipperIconSrc={""} profileIconSrc={""} isLogin={false}/>
      { /* PlaylistsList */ }
      <h1>PlaylistsList</h1>
      <PlaylistsList playlists={playlists} />
    </>
  )
}