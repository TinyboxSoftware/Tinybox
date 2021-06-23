import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <section className="w-full bg-gray-900 md:min-h-screen ">
      <div className="relative flex flex-col items-center justify-center px-4 py-6 mx-auto md:min-h-screen lg:justify-start lg:flex-row max-w-7xl">
        <article className="max-w-full md:max-w-3xl">
          <div className="flex items-center mb-6">
            <div className="z-20 flex items-center bg-gray-700 rounded-full">
              <span className="block w-4 h-4 my-2 ml-2 mr-3 bg-yellow-300 rounded-xl">
                <span className="block w-4 h-4 bg-gray-300 rounded-xl {/* bg-yellow-100 animate-ping" */}"></span>
              </span>
              <span className="inline my-2 mr-4 text-xs tracking-wider text-gray-200 uppercase md:text-sm">
                Busy
              </span>
            </div>
            <span className="py-2 pr-5 -ml-4 text-xs text-gray-200 uppercase duration-100 bg-gray-800 rounded-r-full md:text-sm group hover:text-white pl-7 z-10inline tranistion hover:bg-indigo-600">
              <Link href="mailto:mykal@tinybox.dev">
                <a className="flex items-center gap-1">
                  Contact Us{' '}
                  <ChevronRightIcon
                    height="1em"
                    className="text-sm text-gray-500 group-hover:text-white"
                  />{' '}
                </a>
              </Link>
            </span>
          </div>
          <h1>
            <span className="block text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Bespoke Software
            </span>
            <span className="block text-3xl font-extrabold leading-tight tracking-tight text-indigo-500 sm:text-5xl md:text-6xl">
              For Your Business Needs
            </span>
          </h1>
          <p className="mt-6 mb-4 text-base font-normal text-gray-300">
            Hey, I'm Mykal, and I run Tinybox!
          </p>
          <p className="mb-4 text-base font-normal text-gray-300">
            I work with businesses in the Fraser Valley to create software
            solutions. I specialize in Shopify, and custom web
            development.
          </p>
          <small className="py-6 text-sm font-bold tracking-wider text-gray-600 uppercase">
            I've worked with
          </small>
          <div className="flex flex-row flex-wrap gap-12 py-4">
            <a href="https://vsslgear.com/">
              <img
                className="w-auto h-12 md:h-16 filter invert grayscale brightness-900"
                src="https://res.cloudinary.com/tinbyox/image/upload/c_scale,w_164/v1620362857/Tinybox.dev/vssl-logo-primary-black_eqoaxs.svg"
                alt="VSSL Gear Logo"
              />
            </a>
            <a href="https://thedailymarket.ca">
              <img
                className="w-auto h-12 md:h-16 filter grayscale brightness-900"
                src="https://res.cloudinary.com/tinbyox/image/upload/v1620362077/Tinybox.dev/The_Daily_Market_Logo_hsjgpg.svg"
                alt="The Daily Market Logo"
              />
            </a>
            <a href="https://rfproperties.ca">
              <img
                className="w-auto h-12 md:h-16"
                src="https://cdn.sanity.io/images/gzpc0qdw/production/c93828f36c798864f4d03058996f9cf65ffd7a44-1200x602.png?w=420"
                alt="RF Properties Logo"
              />
            </a>
          </div>
        </article>
        <div className="relative overflow-hidden md:right-0">
          <img
            src="https://res.cloudinary.com/tinbyox/image/upload/f_auto,q_auto,w_400/v1620241602/Tinybox.dev/Card-Reader_sp3vil.png"
            className="absolute right-0 z-30 w-64 transition-all duration-300 transform top-6 hover:rotate-6 hover:scale-110"
            alt="photo of card reader"
          />
          <img
            src="https://res.cloudinary.com/tinbyox/image/upload/f_auto,q_auto,w_500/v1620241610/Tinybox.dev/MacBook_ro4zfj.png"
            className="z-20 transition-all duration-300 transform w-96 hover:rotate-6 hover:scale-110"
            alt="photo of macbook"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
