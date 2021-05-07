import { Popover, Transition } from '@headlessui/react';
import {
  CashIcon,
  ChevronDownIcon,
  ClipboardCheckIcon,
  CodeIcon,
  GlobeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';

const Navigation = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    // { name: 'Solutions', href: '/solutions' },
    // { name: 'Company', href: '/company' },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed z-50 w-full bg-gray-900">
      <Popover className="relative">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between w-full px-4 py-6 mx-auto lg:justify-start max-w-7xl md:px-6 md:space-x-10 lg:px-8">
              <div className="flex justify-start">
                <a href="/">
                  <span className="sr-only">Tinybox Software</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="https://res.cloudinary.com/tinbyox/image/upload/v1620228763/Tinybox_Logo_No_border_boqctm.svg"
                    alt="Tinybox Software Development Logo"
                  />
                </a>
              </div>
              {/* <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-gray-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div> */}
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-200"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Group>
              <div className="flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
              >
                <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7"></nav>
                    </div>
                  </div>
                  <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-base font-medium text-center text-gray-500">
                        Existing customer?
                        <a href="#" className="text-gray-900">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition> */}
          </>
        )}
      </Popover>
    </header>
  );
};

export default Navigation;
