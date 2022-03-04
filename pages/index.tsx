import {NextPage} from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => {
    return (
        <div>
            <h1 className="underline text-xl"> Hello there! </h1>
            <Link href='/about'>About</Link>
        </div>
    )
}

export default IndexPage