/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline';
import { Pages } from '../App';

const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

interface NavbarProps {
  setPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function Navbar({ setPage }: NavbarProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {() => (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <LogoContainer
                onClick={() => setPage(Pages.HOME_PAGE)}
                className="flex-shrink-0 flex items-center"
              >
                <img
                  className="h-8 w-auto"
                  src="https://growsari.com/wp-content/uploads//2021/01/Logo.svg"
                  alt="GrowSariSari"
                />
              </LogoContainer>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <ShoppingCartIcon
                  onClick={() => setPage(Pages.CART_PAGE)}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </button>

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 rounded-full" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Welcome, Guest!
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Settings
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Sign out
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default Navbar;