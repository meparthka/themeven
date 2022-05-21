import { NextPage } from "next";
import HomeSvg from "./homesvg";
import Link from "next/link";

const HomeHeader: NextPage = () => (
  <>
    <div className='home-header'>
      <HomeSvg />
      <div className="con">
        <h1 className="title-x">Hi, I Am Parthka!</h1>
        <p className="des-x">Backend Developer from <a className="des-x-link" href="https://www.google.com/search?q=Gujarat%2C+India" target="_blank">Gujarat, India</a>.</p>
        <div className="btn btn-success">
          <Link href="/about">Continue Reading</Link>
        </div>
      </div>
    </div>
  </>
)

export default HomeHeader;