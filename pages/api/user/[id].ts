import {NextApiHandler} from "next";

const hello: NextApiHandler = (req, res) => {
    const { id } = req.query

    return res.status(200).json({
        'message': 'hello there!',
        'userId': id
    })
}

export default hello