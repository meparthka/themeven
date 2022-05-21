import { NextPage } from "next";
import HomeSvg from "./homesvg";
import Link from "next/link";
import MarkDown from "./compile";
const HomeHeader: NextPage = () => (
  <>
    <div className='home-header'>
      <HomeSvg />
      <div className="con">
        <h1 className="title-x">Hi, I Am Parthka!</h1>
        <p className="des-l-alt">Welcome to my page.</p>
        <p className="des-x">Backend Developer from <a className="des-x-link" rel="noreferrer" href="https://www.google.com/search?q=Gujarat%2C+India" target="_blank">Gujarat, India</a>.</p>
        <div className="btn btn-success">
          <Link href="/about">Contact Me</Link>
        </div>
      </div>
    </div>
  </>
)

export default HomeHeader;