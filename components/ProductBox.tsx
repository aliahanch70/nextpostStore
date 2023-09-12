
// import styled from "styled-components";
// import Button from "@/components/Button";
// import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
// import {CartContext} from "@/components/CartContext";
import Image from "next/image";

// const ProductWrapper = styled.div`
//
// `;

// const WhiteBox = styled(Link)`
//   background-color: #fff;
//   padding: 20px;
//   height: 120px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   img{
//     max-width: 100%;
//     max-height: 80px;
//   }
// `;
//
// const Title = styled(Link)`
//   font-weight: normal;
//   font-size:.9rem;
//   color:inherit;
//   text-decoration:none;
//   margin:0;
// `;
//
// const ProductInfoBox = styled.div`
//   margin-top: 5px;
// `;
//
// const PriceRow = styled.div`
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     gap: 5px;
//   }
//   align-items: center;
//   justify-content:space-between;
//   margin-top:2px;
// `;
//
// const Price = styled.div`
//   font-size: 1rem;
//   font-weight:400;
//   text-align: right;
//   @media screen and (min-width: 768px) {
//     font-size: 1.2rem;
//     font-weight:600;
//     text-align: left;
//   }
// `;

// @ts-ignore
export default function ProductBox({_id,title,description,price,images}) {
    // const {addProduct} = useContext(CartContext);
    const url = '/product/'+_id;
    return (

            // <div className={'bg-gray-200 m-auto w-full max-w-max flex-wrap flex-col flex justify-around  rounded'}>
            //     <Link href={"/product/"+_id}>
            //         <div className={'p-4 bg-white content-center rounded-xl'}>
            //             <img src={images} alt="" className={'h-40 rounded-xl'} width={200} height={200}/>
            //             <div className={"font-bold text-lg "}>{title}</div>
            //                 <div>
            //                     ${price}
            //                 </div>
            //                 <button   >
            //                     Add to cart
            //                 </button>
            //         </div>
            //     </Link>
            //
            // </div>
        <div className="w-[170px] sm:w-[250px] sm:m-3 m-2 bg-[#363636] h-auto overflow-hidden rounded shadow">
            <div className="center items-center">
                <img  className="overflow-hidden w-100 h-[450]" src={images} alt="sdf"/>
                <div className="flex items-center justify-between p-3 rounded">
                    <h3 className="sm:font-medium font-medium text-sm font-sans  text-amber-50">{title}</h3>
                    <h3 className="text-amber-300 m-0 text-xs ">{description}</h3>
                </div>
            </div>
        </div>
    );
}