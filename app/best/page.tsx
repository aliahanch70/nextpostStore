
import { Key } from "react";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import FooterNav from "@/components/FooterNav";
import Sidebar from "@/components/SidebarNav";
import SidebarNav from "@/components/SidebarNav";
import Link from "next/link";

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


async function getData() {
    const res = await fetch('http://localhost:3000/api',{ next: { revalidate: 1 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Posts() {
    const data = await getData()
    // console.log(data)


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

    return (
        <>
            <Header></Header>

            <div className="flex flex-row-reverse">

                <SidebarNav/>
                {/*<h1 className="">Top 20 Added Posts</h1>*/}
                <div >
                    <div className="m-4 flex flex-row-reverse">
                        <Link className="rounded-md bg-white p-2 flex m-1" href='/'>پرفروش</Link>
                        <button className="rounded-md bg-white p-2 flex m-1">جدید ترین</button>
                        <button className="rounded-md bg-white p-2 flex m-1">ارزان ترین</button>
                        <button className="rounded-md bg-white p-2 flex m-1">گران ترین</button>
                    </div>
                    {data.posts.length > 0 ? (
                        <div className={"flex flex-wrap justify-center"}>

                            {data.posts.sort((a: { ss: number; }, b: { ss: number; } )=> {return  a.ss - b.ss} ).map((post: Post, index: Key | null | undefined) => {
                                return (
                                    <div key={index} >
                                        <ProductBox _id={post._id} title={post.title} description={post.ss} price={undefined} images={post.image}/>
                                    </div>
                                );
                            })}
                        </div>

                    ) : (
                        <h2 className="">Ooops! No posts added so far</h2>
                    )}
                </div>
            </div>
            <div>
                sidevar
            </div>

            <FooterNav/>




        </>
    );
}