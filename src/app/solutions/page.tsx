import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="bg-cover bg-center desktop:mb-36 mb-16 bg-blue-1">
        <div className="container text-white">
          <div className="flex flex-col desktop:flex-row items-center">
            <div className="desktop:basis-6/12">
              <div className="desktop:my-36 my-20 flex items-center">
                <div className="desktop:mr-12 mr-6 mt-3 desktop:mt-6 self-start desktop:w-[87px] desktop:h-[67px] w-[42px] h-[32px] flex-shrink-0">
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow Icon"
                    width={87}
                    height={67}
                    className="max-w-full max-h-full"
                  />
                </div>
                <h1 className="desktop:text-h1 text-h3 font-bold">Solutions</h1>
              </div>

              <h2 className="desktop:text-h2 text-h4 font-bold desktop:mb-12 mb-8">
                Solutions for every level of market participant
              </h2>
              <h3 className="text-h4 mb-8 font-bold">Our journey helps shape yours</h3>
              <div className="space-y-8 text-blue-3 text-sub2 desktop:mb-24">
                <p>
                  In the ever-evolving landscape of financial services, Rostro’s group of companies exist to provide an
                  ecosystem of expertise and leading-edge solutions that enable market participants of every kind and
                  level to exercise choice and take action to make, invest and manage money within capital and financial
                  markets.
                </p>
                <p>
                  Always looking ahead and moving forward into the future, Rostro sets its course toward unravelling the
                  challenges of today. Our model of inclusivity and catering to a continually broadening client base
                  future-proofs and future-fits the businesses under the Rostro umbrella promising business performance
                  that can weather all market conditions as we continue to grow and expand to include more functions of
                  the financial services sphere - delivering value across every level of client from top to bottom.
                </p>
              </div>
            </div>
            <Image
              className="mx-auto self-end p-12 desktop:pb-36 desktop:px-0"
              src="/images/solutions/stacks.png"
              alt="Giving"
              width={321}
              height={428}
            />
          </div>
        </div>
      </div>
      <div className="desktop:mb-36 mb-20 container text-white flex flex-col ">
        <p className="desktop:text-h2 text-h4 text-blue-2 font-bold desktop:w-1/2 desktop:mb-24 mb-16">
          Our companies create the foundation for sustainable business
        </p>
        <div className="grid desktop:grid-cols-2 gap-10">
          <div className="bg-blue-1 flex flex-col justify-between px-10 pt-10 desktop:pt-20 pb-10">
            <div>
              <p className="text-h4 font-bold mb-7">Scope Prime</p>
              <p className="text-blue-3 desktop:w-7/12">
                A global multi-asset execution and liquidity provider offering solutions in institutional liquidity,
                trading, and risk management solutions.
              </p>
            </div>
            <Link
              href="https://scopeprime.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Solutions"
              target="_blank"
              className="flex items-center justify-between mt-14 hover:underline"
            >
              <p className="text-sub1 font-bold">Explore Scope Prime</p>
              <div className="ml-auto">
                <Image src={'/icons/arrowicon.png'} width={15} height={15} alt={'Arrow'} />
              </div>
            </Link>
          </div>

          <div className="bg-blue-1 flex flex-col justify-between px-10 desktop:pt-20 pt-10 pb-10">
            <div>
              <p className="text-h4 font-bold mb-7">Scope Markets</p>
              <p className="text-blue-3 desktop:w-7/12">
                Rostro’s global retail brokerage arm, which is our diversified, multi-asset financial services brand
                offering trading and investment services.
              </p>
            </div>
            <Link
              href="https://www.scopemarkets.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Solutions"
              target="_blank"
              className="flex items-center justify-between mt-14 hover:underline"
            >
              <p className="text-sub1 font-bold">Explore Scope Markets</p>
              <div className="ml-auto">
                <Image src={'/icons/arrowicon.png'} width={15} height={15} alt={'Arrow'} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-1 overflow-hidden flex flex-col">
        <div className="hidden desktop:flex absolute inset-y-0 left-0">
          <svg
            className="h-full hidden desktop:block"
            width="500"
            height="100%"
            viewBox="0 0 500 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 0,100 500,100" fill="white" />
          </svg>
        </div>
        <div className="desktop:absolute left-24">
          <Image
            src="/images/solutions/rostro-block.webp"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-[375px] mx-auto desktop:w-[1000px]"
          />
        </div>
        <div className="container text-white flex items-center">
          <div className="py-20 desktop:py-40 desktop:w-5/12 space-y-6 ml-auto desktop:pr-24">
            <h3 className="text-h4 desktop:text-h3 font-bold">
              Building bespoke solutions for better scalability, performance, and revenue potential.
            </h3>
            <p className="text-blue-3">
              Through our institutional brands, we cater to a wide and diverse range of institutional clients from
              broker-dealers to hedge funds and commercial institutions. We don’t just provide multi-asset liquidity,
              technology, and risk management solutions – we tailor every aspect of our propositions to build bespoke
              solutions clients need to scale their own businesses for better performance and revenue potential.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-2 desktop:bg-team bg-contain bg-no-repeat bg-right">
        <div className="container text-white">
          <div className="space-y-8 py-24 desktop:py-40 desktop:w-5/12">
            <h3 className="text-h4 desktop:text-h3 font-bold">Personalising individual access to financial markets</h3>
            <p className="text-blue-3">
              Scope Markets, Rostro’s global retail brokerage arm, is our diversified, multi-asset financial services
              brand that offers trading and investment services. Scope Markets is uniquely positioned to benefit from
              the Rostro ecosystem.
            </p>
            <p className="text-blue-3">
              We provide access to over 40,000 markets and, depending on the entity, enable trading via a suite of
              powerful platforms such as MT4, MT5, CQG, IRESS, and Bloomberg.
            </p>
            <p className="text-blue-3">
              The brand of Scope Markets was launched in 2014 and is used by the Rostro group of brokers, offering both
              retail and institutional trading services, with flexible products and services tailored to the unique
              needs of its clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
