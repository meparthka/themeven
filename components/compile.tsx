import { NextPage } from "next";

const MarkDown: NextPage = () => {
    function createMarkup() {
        return { __html: '<h1>Hello, qqwjnhawkejd!</h1>' };
    }

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup()} />
            Hello, World!
        </>
    )
}

export default MarkDown;
