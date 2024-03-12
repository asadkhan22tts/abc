import Main from "../Main/Main"
import NavBar from "./NavBar"
import SideBar from "../SideBar/SideBar"

function Header() {
  return (
    <>
      <div className="container">
        <div className="wrapper flex">
          <div className="sideBar grow-0">
            <SideBar />
          </div>
          <div className="heade grow">
            <header className="flex justify-between bg-[#fbbf24] p-3">
              <div className="logo">
                <h1 className="text-white font-bold">
                  Welcome <span className="font-normal">Codify Developer</span>
                </h1>
              </div>
              <div>
                <NavBar />
              </div>
            </header>
            <Main />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
