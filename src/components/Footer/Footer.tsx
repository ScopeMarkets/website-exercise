import Button from '../Button/Button';
import Link from '../Link/Link';

export default function Footer() {
  return (
    <footer className="bg-blue-2 py-16 ">
      <div className="container px-4">
        <div className="flex flex-col text-white items-center desktop:pt-52 desktop:pb-40 pb-24">
          <p className="desktop:text-5xl text-3xl text-center dekstop:mb-10 mb-8">Reach out for more information.</p>
          <Button
            as={Link}
            href="/page-1"
            size="large"
            className="rounded-none border-none bg-blue-1 desktop:text-xl  font-bold px-12 py-5"
          >
            Contact Us Now
          </Button>
        </div>
        <div className="text-center desktop:text-base text-xs text-grey px-6">
          <p>Copyright © 2020–{new Date().getUTCFullYear()} Rostro Group</p>
        </div>
      </div>
    </footer>
  );
}
