import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className={``}
    >
      <Nav />
      <section className="body-font">
        <div className="container mx-auto flex px-5 lg:px-20 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              HenTech: the best solution
              <br className="hidden lg:inline-block" /> for
              <span className="text-primary"> bring to life your ideas.</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              We take seriously the hard work of making any system you need, be it a mobile application, a
              website, an enterprise system. Whatever you think, we can make it happen with hard work.
            </p>
            <div className="flex justify-center gap-3">
              <Button variant={"default"}>CTA</Button>
              <Button variant={"outline"}>Pricing</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">About us</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed">
              We are based on minimalism but we love that everything is functional, so our projects will
              be fully adapted to all users, just as they will be totally beautiful and accessible from
              any smart device, here is a list with our most important values as a company.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="card p-6 rounded-lg variant-filled-primary">
                <img
                  className="h-40 rounded w-full object-cover card-header object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h2 className="text-lg font-medium title-font card-footer">Effective communication</h2>
                <p className="leading-relaxed text-base card-footer">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                  bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="card p-6 rounded-lg variant-filled-primary">
                <img
                  className="h-40 rounded w-full object-cover card-header object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h2 className="text-lg font-medium title-font card-footer">Responsibility</h2>
                <p className="leading-relaxed text-base card-footer">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                  bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="card p-6 rounded-lg variant-filled-primary">
                <img
                  className="h-40 rounded w-full object-cover card-header object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h2 className="text-lg font-medium title-font card-footer">Creativity</h2>
                <p className="leading-relaxed text-base card-footer">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                  bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="card p-6 rounded-lg variant-filled-primary">
                <img
                  className="h-40 rounded w-full object-cover card-header object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h2 className="text-lg font-medium title-font card-footer">Honesty</h2>
                <p className="leading-relaxed text-base card-footer">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                  bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-5 pb-24 mx-auto">
          <div className="lg:w-1/2 w-11/12 lg:mb-0 md:mx-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 w-fit">Contact us</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded mb-5"></div>
          </div>
          <div className="flex sm:flex-nowrap flex-wrap">
            <div
              className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 card flex items-end justify-start relative"
            >
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-500 leading-relaxed" href="/">example@email.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div
              className="card lg:w-1/3 md:w-1/2 !bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            >
              <div className="card-header">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
              </div>
              <div className="card-footer">
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  className="text-white border-0 py-2 px-6 focus:outline-none btn variant-filled-secondary rounded-2xl text-lg"
                >Button</button
                >
                <p className="text-xs text-gray-500 mt-3">
                  Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
