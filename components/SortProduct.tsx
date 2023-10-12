import Link from "next/link";

const SortProduct = () => {
    return (

            <div className="m-4 flex flex-row-reverse">
                <Link className="rounded-md bg-white p-2 flex m-1" href={'/'}>پرفروش</Link>
                <Link className="rounded-md bg-white p-2 flex m-1" href='/'>جدید ترین</Link>
                <Link className="rounded-md bg-white p-2 flex m-1" href={"/chep"} >ارزان ترین</Link>
                <Link className="rounded-md bg-white p-2 flex m-1" href='/expensive'>گران ترین</Link>
            </div>

    );
};

export default SortProduct;