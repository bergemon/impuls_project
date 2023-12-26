import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.post(
            `${process.env.INSTA}/subscribe/add`, req.body
        )
        return res.status(200).json({ message: response.data });
    }
    catch (error) {
        return res.status(403).json({ message: error })
    }
}