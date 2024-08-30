import Image from "next/image";
import Link from "next/link";
import Footer from "./componentes/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-amber-50 px-8 md:px-12 py-20 space-y-9">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-medium">Season Collection</h2>
          <Link href={"/"} className="text-sm border-b-2 border-black py-2" >View all categories</Link>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Women's</p>
              <p className="text-slate-400 text-sm">23 items</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Men's</p>
              <p className="text-slate-400 text-sm">9 items</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Jewelry</p>
              <p className="text-slate-400 text-sm">31 items</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Sneakers</p>
              <p className="text-slate-400 text-sm">21 items</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Bags</p>
              <p className="text-slate-400 text-sm">5 items</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="w-48 h-48 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg">Glasses</p>
              <p className="text-slate-400 text-sm">14 items</p>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="container px-8 md:px-12 py-8">

          <h3>New arrival</h3>
        </div>
      </section>

      <section>
        <div className="container px-8 md:px-12 py-8">
          <p>Descuentos</p>
        </div>
      </section>

      <section>
        <div className="container px-8 md:px-12 py-8 flex items-center justify-between">
          <div className="flex items-center space-x-9">
            <div className="border w-16 h-16 rounded-full"></div>
            <div className="space-y-3">
              <p className="font-medium">Free Shipping</p>
              <p className="text-xs text-gray-400">Free shipping over order $120</p>
            </div>
          </div>
          <div className="flex items-center space-x-9">
            <div className="border w-16 h-16 rounded-full"></div>
            <div className="space-y-3">
              <p className="font-medium">Flexible Payment</p>
              <p className="text-xs text-gray-400">Pay with Multiple Credit Cards</p>
            </div>
          </div>
          <div className="flex items-center space-x-9">
            <div className="border w-16 h-16 rounded-full"></div>
            <div className="space-y-3">
              <p className="font-medium">14 Day Returns</p>
              <p className="text-xs text-gray-400">Within 30 days for an exchange</p>
            </div>
          </div>
          <div className="flex items-center space-x-9">
            <div className="border w-16 h-16 rounded-full"></div>
            <div className="space-y-3">
              <p className="font-medium">Premium Support</p>
              <p className="text-xs text-gray-400">Outstanding premium support</p>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container px-8 md:px-12 py-12 flex justify-center items-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15864.097337267101!2d-75.60888320000001!3d6.260524800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1724992467686!5m2!1ses-419!2sco" width="1280" height="600" className="border-none" loading="lazy"></iframe>
        </div>
      </section>


      <section>
        <div className="container px-8 md:px-12 pt-8 pb-16">
          <div className="flex text-2xl font-semibold w-full h-28 justify-between">
            <div className="flex border w-full justify-center items-center rounded-s-lg">
              SSENSE
            </div>
            <div className="flex border w-full justify-center items-center">
              BURBERRY
            </div>
            <div className="flex border w-full justify-center items-center">
              NIKE
            </div>
            <div className="flex border w-full justify-center items-center">
              ASOS
            </div>
            <div className="flex border w-full justify-center items-center">
              PULL&BEAR
            </div>
            <div className="flex border w-full justify-center items-center rounded-e-lg">
              GILDAN
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
