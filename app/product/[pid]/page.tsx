
import React, { Key } from "react";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import FooterNav from "@/components/FooterNav";
import Sidebar from "@/components/SidebarNav";
import SidebarNav from "@/components/SidebarNav";
import Link from "next/link";

import {productD} from "@/product";
import ProductSum from "@/components/ProductSum";

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
    const colorProduct=productD.find((x)=>x.id==props.params.pid)
    const arrayColor: any[]=[]
    console.log(colorProduct);
    let colorDiv;
    let i;
    // @ts-ignore
    for(i=1 ; i<= colorProduct.colorCount  ; i++){
        // @ts-ignore
        arrayColor.push(colorProduct.color[i])
    }

    const test700 = () => {
        return (
            <ul className="flex p-1">
                {/* eslint-disable-next-line react/jsx-key */}
                {arrayColor.map(x=><ProductSum hash={x.hash} name={x.name} />)}
            </ul>
        )
    }

    return (
        <>
            <Header></Header>


            <div className="m-2">
                {productD.map((post, index: Key)=>
                    {

                        // @ts-ignore
                        if(post.id === props.params.pid) {
                            // eslint-disable-next-line react/jsx-key
                            return <div key={index}>


                                <p>{post.ss}</p>

                                <div className="flex mb-4 product-item">
                                    <div className="w-1/2 product-sum" >
                                        <div>
                                        <h2 className="text-xl  font-bold">
                                            {post.title}
                                        </h2>
                                        <h4 className="text-xs text-gray-400">
                                            {post.subtitle}
                                        </h4>
                                        </div>
                                        <hr className="h-px my-2  bg-gray-300 border-0 dark:bg-gray-800"/>

                                        <div className=" text-sm">
                                            <p>
                                                brand:{post.brand}
                                            </p>
                                            <p>

                                            </p>
                                        </div>
                                        <hr className="h-px my-2  bg-gray-300 border-0 dark:bg-gray-800"/>
                                        <div className=" text-sm text-gray-600">
                                            <p>
                                                ویژگی ها:
                                            </p>
                                            <div>
                                                 دوربین : {post.camera}


                                            </div>
                                            <div>
                                                چیپست : {post.chip}
                                            </div>

                                        </div>

                                        <div className="mb-5 flex w-full flex-col"><div className="mb-3.5 flex items-center"><p className="text-sm leading-5 text-gray-600">رنگ:</p><p className="mr-2.5 text-sm font-semiBold leading-5 text-gray-800 2xl:mr-2">سبز</p></div><div className="w-max max-w-[100%] border-b border-gray-400 pb-4"><div className="relative flex w-full items-center"><div className="overflow-x-auto no-scrollbar" ><div className="flex items-center scroll-smooth lg:pr-0" ><div className="flex items-center gap-2.5 w-fit flex-nowrap"><div className="cursor-pointer"><div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-secondary-500"><span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" ><svg className="icon-done fill-white w-6 h-6"><use ></use></svg></span><p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-semiBold text-gray-700">سبز</p></div></div><div className="cursor-pointer"><div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white"><span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" ></span><p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">بنفش</p></div></div><div className="cursor-pointer"><div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white"><span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" ></span><p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">آبی</p></div></div></div><span className="flex h-1 w-1 p-1 lg:h-0.5 lg:w-0.5 lg:p-0.5"></span></div></div></div></div></div>

                                        {test700()}
                                        <div className="text-green-600 text-xl font-bold p-2">
                                             قیمت : {post.price} تومان
                                        </div>



                                        <div>
                                            <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">افزودن به سبد خرید</button>
                                        </div>



                                    </div>
                                    <div className="w-1/2 rounded product-sum">
                                        <img src={post.image} className="overflow-hidden rounded-xl" alt={post.title}/>
                                    </div>
                                </div>


                                

                            </div>
                        }
                    }
                )}

            </div>

            <FooterNav/>




        </>
    );
}