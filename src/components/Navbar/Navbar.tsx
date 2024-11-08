'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';

const menu: { text: React.ReactNode; href: string }[] = [
  { text: 'About Us', href: '/about' },
  { text: 'Solutions', href: '/solutions' },
  { text: 'Rostro Foundation', href: '/foundation' },
  { text: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 bg-white z-40">
        <header className="container p-6 flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" title="Go to Homepage">
              <Image
                src="/images/logo.svg"
                alt="Rostro"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[175px] desktop:w-[194px] h-[37px] desktop:h-[41px]"
              />
            </Link>
          </div>
          <nav className="hidden desktop:block">
            <ul className="flex gap-x-14 items-center">
              {menu.map(({ text, href }, i) => (
                <li key={i}>
                  <Link href={href} className="text-[18px] hover:text-neutral-700">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="desktop:hidden">
            <button
              onClick={() => {
                setOpened(true);
              }}
            >
              <Image src="/icons/hamburger.svg" alt="Menu" width={30} height={30} />
            </button>
          </div>
        </header>
      </div>
      <Dialog as="div" open={opened} onClose={setOpened} className="desktop:hidden">
        <div className="fixed inset-0 z-40 bg-white">
          <div className="container p-6 space-y-20">
            <div className="flex items-center justify-between">
              <div className="shrink-0">
                <Link
                  onClick={() => {
                    setOpened(false);
                  }}
                  href="/"
                  title="Go to Homepage"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Rostro"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[175px] h-[37px]"
                  />
                </Link>
              </div>
              <div className="desktop:hidden">
                <button
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  <Image src="/icons/hamburger.svg" alt="Menu" width={30} height={30} />
                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-10">
                {menu.map(({ text, href }, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => {
                        setOpened(false);
                      }}
                      href={href}
                      className="text-[28px] font-medium hover:text-neutral-700"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Dialog>
    </>
  );
}
