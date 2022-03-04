import {NextPage} from "next";
import Link from 'next/link'

const AboutPage: NextPage = () => (
    <div>
        <h1>This is the ABOUT page, bitch</h1>
        <Link href='/'>Index</Link>
        <Link href='/about/me'>To me</Link>
    </div>
)
export default AboutPage