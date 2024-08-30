import Link from "next/link";

export default function Header() {
    return (
        <header className="">
          <div className="container flex justify-center items-center py-4 px-8 md:px-12 border-b-2">
            <div className=" flex w-full justify-between items-center">
              <div className="flex space-x-5 text-sm">
                <div>USD</div>
                <div>English</div>
              </div>

              <div className="text-4xl font-bold">ecomus</div>

              <div className="flex space-x-4">
                <div>S</div>
                <div>P</div>
                <div>H</div>
                <div>B</div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center items-center p-3">
            <nav className="">
              <ul className="flex space-x-10">
                <Link href={"/"} className="font-semibold">Home</Link>
                <li className="font-semibold">Shop</li>
                <Link href={"/product"} className="font-semibold">Products</Link>
                <li className="font-semibold">Pages</li>
                <li className="font-semibold">Blog</li>
                <li className="font-semibold">Buy now</li>
              </ul>
            </nav>  
          </div>
        </header>
    );
}