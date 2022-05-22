import { NextPage } from "next";

const TechPost: NextPage = () => {
  return (
    <>
      <div className="con tech">
        <div className="title-x-alt">
          Technology
        </div>
        <p className="des-l">
          I've worked with a range a technologies in the web development world. From Back-end to Design
        </p>
        <div className="tech-row">
          <div>
            <h1 className="title-m">Front-End</h1>
            <p className="des-m">
              Experience With React and Next.js
            </p>
          </div>
          <div>
            <h1 className="title-m">Back-End</h1>
            <p className="des-m">
              Experience With Node.js, Deno, php, MongoDB and SQL
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechPost;