import "bootstrap"
import Navbar from "../Components/navbar"

export const Components = () => {
  return(
    <>
      { /*Navbar */ }
      <h1>Navbar</h1>
      <Navbar twitchClipperIconSrc={""} profileIconSrc={""} isLogin={false}/>
    </>
  )
}