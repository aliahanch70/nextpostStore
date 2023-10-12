import Link from "next/link";


export default function ProductSum(props:any) {
    return(
        <>
            <li className="border p-1 flex bg-gray-300 rounded border-orange-200 mx-1 hover:border-orange-600">
                <button className="flex ">
                    <span style={{backgroundColor:props.hash}}  className="h-6 w-6 p-0.5">
                    </span>
                    <p className="px-2" style={{}}>{props.name}
                    </p>
                </button>
            </li>

        </>
    )
}