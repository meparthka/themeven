import { NextPage } from "next";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <>
      <div className="con project">
        <div className="title-x-alt">
          Projects
        </div>
        <div className="d-flex space-b">
          <div className="featured-tag">
            Featured Projects
          </div>
          <div className="read-mode">
            <a rel="noreferrer" href="https://github.com/meparthka" target="_blank">
              GitHub ►
            </a>
          </div>
        </div>
        <div className="project-row">
          <a rel="noreferrer" href="https://github.com/meparthka/denorest" target="_blank">
            <h1 className="title-m">Denorest</h1>
            <p className="des-m">
              Lightweight, Minimalist Framework For REST API 🦕 🚀
            </p>
          </a>
          <a rel="noreferrer" href="https://github.com/meparthka/themeven" target="_blank">
            <h1 className="title-m">Themeven</h1>
            <p className="des-m">
            Personal portfolio website, Built on NextJS.
            </p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects;