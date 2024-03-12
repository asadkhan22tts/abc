function SnapShot() {
  return (
    <>
      <div className="flex items-center flex-col containor ">
        <div className="snapShot_head  w-9/12">
          <div className="flex">
            <div className="icon p-2 pt-0 pb-0 border-[#fbbf24] bg-[#fbbf24]">
              <p className="text-white">1</p>
            </div>
            <div className="welcomeText text-white bg-[#636466]  px-40 uppercase text-center">
              <p>BORGER U SNAPSHOT</p>
            </div>
          </div>
        </div>
        <div className="credits_wrap flex items-center justify-around pt-12 bg-[#FDFBF3] w-6/12 pb-36">
          <div className="credits_widget">
            <p>Learning Credits</p>
            <span>x</span>
          </div>
          <div className="crdeits_detail">
            <p className="learn_credits">
              Learn Credits : <span>x</span>
            </p>
            <p className="learn_credits">
              Education Pay : <span>x</span>
            </p>
            <p className="learn_credits">
              Next Milestone : <span>x Credits away!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SnapShot
