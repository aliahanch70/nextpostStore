import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("posts");
//
//         const posts = await db.collection("posts").find({}).limit(20).toArray();
//
//         res.json(posts);
//     } catch (e) {
//         console.error(e);
//         throw new Error(e).message;
//     }
// };

import { NextResponse } from 'next/server'

export async function GET() {
    const res = await clientPromise
    const db = res.db("posts");

    const posts = await db.collection("posts").find({}).limit(20).toArray();

    return NextResponse.json({ posts })
}