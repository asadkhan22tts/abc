import Accordian from "../Accordion/Accordian"
import SnapShot from "./Snapshot/SnapShot"

function Main() {
  return (
    <>
      <div className="flex items-center containor">
        <div className="icon pb p-5 border-[#fbbf24] bg-[#fbbf24]">
          <p className="text-white">1</p>
        </div>
        <div className="welcomeText text-white bg-[#636466] uppercase p-5 text-xl w-full text-center">
          <p>welcome to your individiual portal!</p>
        </div>
      </div>
      <SnapShot />
      <Accordian />
    </>
  )
}

export default Main
