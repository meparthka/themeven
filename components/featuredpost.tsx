import { NextPage } from "next";
import Link from "next/link";

const FeaturedPost: NextPage = () => {
  return (
    <>

      <div className="con letest-post">
        <div className="featured-tag">
          Latest Post
        </div>
        <h1 className="title-l">Using Deferred Static Generation with Analytics Tools</h1>
        <p className="des-l">Only want to build out the most popular pages as static pages? No problem, you can use your analytics tool to control the usage of Deferred Static Generation in Gatsby.</p>
        <div className="btn btn-success">
          <Link href="/about">Continue Reading</Link>
        </div>
      </div>

      <div className="con">
        <div className="d-flex space-b">
          <div className="featured-tag">
            More Posts
          </div>
          <div className="read-mode">
            <Link href="/post">
              Read All ►
            </Link>
          </div>
        </div>

        <div className="featured-row">
          <Link href="/about">
            How To Build an Advanced Multipart Component with Chakra UI
          </Link>
          <Link href="/about">
            Introducing the Theme UI Plugin for Figma
          </Link>
          <Link href="/about">
            Setting up a yarn Workspace with TypeScript, ESLint & Cypress
          </Link>
        </div>

      </div>
    </>
  )
}

export default FeaturedPost;