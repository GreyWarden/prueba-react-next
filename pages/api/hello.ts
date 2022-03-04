import {NextApiHandler} from "next";

const hello: NextApiHandler = (req, res) => {
    return res.status(200).json({
        'message': 'hello there!'
    })
}

export default hello