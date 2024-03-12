function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex">
          <li>
            <a href="#" className="text-white text-xs">
              Change Password
            </a>{" "}
          </li>
          <li>
            <a
              href="#"
              className="text-white border-l-2 pl-2 mr-2 ml-2 text-xs"
            >
              Logout
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
