import React from 'react';
import { Button } from '@scopemarkets/react-ui-components';
import Link from 'next/link';

interface Props {
  copyrightYear: string;
}

export default function Footer({ copyrightYear }: Props) {
  return (
    <footer className={'bg-blue-2 py-16 '}>
      <div className={'px-4 container '}>
        <div className=" flex flex-col text-white items-center desktop:pt-52 desktop:pb-40 pb-24">
          <p className="desktop:text-h3 text-h4 text-center dekstop:mb-10 mb-8">Reach out for more information.</p>
          <Button
            as={Link}
            href="/contact"
            size="large"
            className="rounded-none border-none bg-blue-1 desktop:text-sub1 text-sub2 font-bold px-12 py-5"
          >
            Contact Us Now
          </Button>
        </div>
        <div className="text-center desktop:text-base text-body2 text-grey px-6">
          <p>Copyright © 2020–{copyrightYear} Rostro Group</p>
        </div>
      </div>
    </footer>
  );
}
