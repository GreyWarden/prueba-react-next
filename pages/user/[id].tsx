import {NextPage} from "next";
import Link from "next/link";
import { useRouter}from 'next/router';

const UserPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Im the user: { id }</h1>
            <Link href='/'>Index</Link>
        </div>
    )
}
export default UserPage