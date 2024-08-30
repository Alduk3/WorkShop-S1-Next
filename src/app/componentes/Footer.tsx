import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-100">
            <div className="container flex px-8 md:px-12 pt-7 pb-16 justify-between items-start border-b-2">
                <div className="flex flex-col items-start justify-center space-y-8">
                    <div className="font-semibold text-4xl">ecomus</div>
                    <div className="flex flex-col space-y-3">
                        <ul className="text-sm text-gray-500 space-y-3">
                            <li>Addres: 1234 Fashion Street, Suite 67,</li>
                            <li> New York, NY 10001</li>
                            <li>Email: <span className="font-semibold">info@riwishop.com</span></li>
                            <li>Phone: <span className="font-semibold">(212) 555-1234</span></li>
                        </ul>
                        <Link href={"/"} className="text-sm font-medium py-2 border-b-2 border-black max-w-max">Get direction</Link>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center font-bold text-xl">f</div>
                        <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center font-bold">X</div>
                        <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center font-bold">I</div>
                        <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center font-bold">T</div>
                        <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center font-bold">P</div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center space-y-8">
                    <div className="font-semibold text-xl">Help</div>
                    <div>
                        <ul className="text-sm text-gray-500 space-y-3">
                            <li>Privacy Policy</li>
                            <li>Returns + Exchanges</li>
                            <li>Shipping</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ's</li>
                            <li>Compare</li>
                            <li>My whshlist</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col items-start justify-center space-y-8">
                    <div className="font-semibold text-xl">About us</div>
                    <div>
                        <ul className="text-sm text-gray-500 space-y-3">
                            <li>Our Story</li>
                            <li>Visit Our Store</li>
                            <li>Contact Us</li>
                            <li>Account</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center space-y-8">
                    <div className="font-semibold text-xl">Sign Up for Email</div>
                    <div className="text-sm text-gray-500 space-y-3">
                        <p>Sing up to get fisrt dibs on new arrivals, sales, </p>
                        <p>exclusive content, events and more!</p>
                    </div>
                    <div>
                        <form className="p-2 bg-white rounded">
                            <input type="text" defaultValue={"Enter your email..."} className="text-gray-300 text-sm border-none py-1 px-2" />
                            <button className="bg-black text-white px-5 py-2 rounded text-sm">Suscribe</button>
                        </form>
                    </div>
                    <div className="flex space-x-5 text-sm pt-3">
                        <div>USD</div>
                        <div>English</div>
                    </div>
                </div>

            </div>
            <div className="container flex items-center justify-between py-2 px-8 md:px-12">
                <p className="text-gray-500 text-sm">
                    © 2024 Riwi Store | AD
                </p>
                <div className="flex space-x-6">
                    <div>visa</div>
                    <div>Paypal</div>
                    <div>MasterCard</div>
                    <div>AMEX</div>
                    <div>Otra</div>
                </div>
            </div>
            <div className="fixed bottom-24 right-8 w-9 h-9 border border-gray-700 rounded-full  items-center justify-center bg-white hidden md:flex"> <a href="#">-</a> </div>
        </footer>
    );
}