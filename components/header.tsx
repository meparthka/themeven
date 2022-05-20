import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {

  if (typeof window !== "undefined") {
    let d = document.getElementsByClassName("navalt");
  
    for (let i = 0; i < d.length; i++) {
      window.onscroll = (e) => {
        if (window.scrollY > 0) {
          d[i].classList.add("navbar-alt-effect")
        } else {
          d[i].classList.remove("navbar-alt-effect")
        }
      }
    }

  }

  return (
    <>
      <div className="navbar navalt">
        <div className="navbar-con">
          <div className="navbar-logo">
            Parthka!
          </div>
          <div className="navbar-link">
            <Link className="btn" href="/">Home</Link>
            <Link className="btn" href="/about">About</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;