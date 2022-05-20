import { NextPage } from "next";
import Link from "next/link";
import ArrowSvg from "./arrowsvg";

const Featured: NextPage = () => {
    return (
        <>
            <div className="con">
                <div className="d-flex space-b">
                    <div className="featured-tag">
                        Read Post
                    </div>
                    <div className="read-mode">
                        <Link href="/post">
                            Read More ►
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured;