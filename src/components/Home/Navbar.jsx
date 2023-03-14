import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import logo from "../../../assets/logo.svg"


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-md fixed w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex sm:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">EmpreART</span>
            <img className="h-8 w-auto" src={logo} alt="Logo EmpreART" />
          </a>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden sm:flex sm:gap-x-12">
        <a href="#" className="text-sm font-medium leading-6 text-gray-900 sm:text-white">
            Serviços
          </a>

          <a href="#" className="text-sm font-medium leading-6 text-gray-900  sm:text-white">
            Quem Somos
          </a>
          <a href="#" className="text-sm font-medium leading-6 text-gray-900  sm:text-white">
            Contato
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="sm:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-black z-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">EmpreART</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="Logo EmpreART"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-900"
                >
                  Serviços
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-900"
                >
                  Quem somos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-900"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}