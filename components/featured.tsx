import { NextPage } from "next";
import Link from "next/link";

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

                <div className="featured-row">
                    <Link href="123">
                        How To Build an Advanced Multipart Component with Chakra UI
                    </Link>
                    <Link href="123we">
                        Introducing the Theme UI Plugin for Figma
                    </Link>
                    <Link href="123">
                        Setting up a yarn Workspace with TypeScript, ESLint & Cypress
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Featured;