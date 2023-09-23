
import { Key } from "react";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import FooterNav from "@/components/FooterNav";
import Sidebar from "@/components/SidebarNav";
import SidebarNav from "@/components/SidebarNav";
import Link from "next/link";
import {productD} from "@/product";

type Props = {
    posts: [Post]
}

type Post = {
    _id: String;
    title: String;
    content: String;
    ss: string;
    image: string;
}


// async function getData() {
//     const res = await fetch('http://localhost:3000/api',{ next: { revalidate: 1 } })
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//
//     return res.json()
// }


export default function Posts(props: { params: { id: string; }; }) {

    // console.log(productD[0].id)

    // const [posts, setPosts] = useState()
    // console.log('dd'+props.posts.map((value, index) => value.title))
    // const handleDeletePost = async (postId: string) => {
    //     try {
    //         let response = await fetch(
    //             "http://localhost:3000/api/deletePost?id=" + postId,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     Accept: "application/json, text/plain, */*",
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );
    //         response = await response.json();
    //         window.location.reload();
    //     } catch (error) {
    //         console.log("An error occurred while deleting ", error);
    //     }
    // };

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Header></Header>

            <div className="flex flex-row-reverse">
                {productD.map((post: Post, index: Key)=>
                    {

                        if(post.id === props.params.pid) {
                            // eslint-disable-next-line react/jsx-key
                            return <div key={index}>
                                {post.title}
                            </div>
                        }
                    }
                )}

            </div>

            <FooterNav/>




        </>
    );
}