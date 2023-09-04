import Link from "next/link";

export default function Header() {
    return(
        <>
            {/*<Link href={'/'}>Ecommerce</Link>*/}
            <nav className=" m-2 px-3 rounded-xl bg-opacity-30 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl text-gray-900 font-semibold">Logo</span>
                        <div className="flex space-x-4 text-gray-900">
                            <Link href={'/'}>Home</Link>
                            <Link href={'/products'}>All products</Link>
                            <Link href={'/categorise'}>Categorise</Link>
                            <Link href={'/account'}>Account</Link>
                            <Link href={'/cart'}>Cart</Link>
                        </div>
                    </div>
                </div>

            </nav>

        </>
    )
}