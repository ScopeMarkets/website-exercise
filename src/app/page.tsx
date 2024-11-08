'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  const [activeCompany, setActiveCompany] = useState('scopeMarkets');
  return (
    <>
      <div className="bg-blue-1 bg-header bg-center bg-cover">
        <div className="container">
          <div className="desktop:py-96 py-64 text-center desktop:px-96 px-6 space-y-4">
            <h1 className="desktop:text-h2 text-h4 text-white font-bold">Rostro Group</h1>
            <h2 className="desktop:text-h4 text-sub1 text-white">
              A diversified fintech and financial services group, on a mission to effect change in financial inclusion
              at a global level.
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-blue-2">
        <div className="container text-center desktop:px-64">
          <h3 className="desktop:text-h2 text-h4 font-bold text-white desktop:py-36 py-16 ">
            Providing inclusive accessibility to financial markets
          </h3>
          <div className="flex desktop:flex-row flex-col desktop:justify-between desktop:pb-36 pb-20 gap-8 desktop:gap-0 items-center px-8">
            <Link
              href="https://www.scopemarkets.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage"
              target="_blank"
            >
              <Image src="/images/homepage/scope.png" alt="Scope Markets" width={187} height={53} />
            </Link>
            <Link
              href="https://scopeprime.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage"
              target="_blank"
            >
              <Image src="/images/homepage/scopeprime.png" alt="Scope Prime" width={336} height={58} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container desktop:my-36 my-20">
        <div className="desktop:bg-rostro desktop:bg-contain bg-no-repeat bg-blue-2">
          <div className="flex desktop:flex-row flex-col desktop:px-36 desktop:space-x-9">
            <p className="text-white font-bold desktop:text-h2 text-h4 desktop:w-1/2 my-16 desktop:my-auto desktop:py-40 px-8">
              An ecosystem of financial expertise & service under one roof
            </p>
          </div>
          <div className="grid desktop:grid-cols-3 desktop:gap-8 gap-16 text-white px-8 desktop:px-32 pb-20">
            {[
              {
                title: 'Bespoke solutions',
                description:
                  'Our end-to-end financial services model equips us with the flexibility to provide solutions to a broad range of clients. Our powerful technologies and specialised solutions continue to expand as the Group looks to grow into more sectors of the financial services sphere.',
                imgSrc: '/images/homepage/bespoke.png',
                imgAlt: 'Bespoke solutions',
              },
              {
                title: 'Sustainable solutions',
                description:
                  'Our diversified business model, reducing sector, product or client concentration, insulates Rostro from short-term market uncertainty as we expand offerings within financial services to deliver value at all client levels and long-term viability to our institutional clients.',
                imgSrc: '/images/homepage/sustainable.png',
                imgAlt: 'Sustainable solutions',
              },
              {
                title: 'The 360 approach',
                description:
                  'Offering bespoke solutions within a customer-centric organisation – where service is value – we focus on client demand over company push, because we believe this will deliver long-term value to both the client and us.',
                imgSrc: '/images/homepage/360.png',
                imgAlt: 'The 360 approach',
              },
            ].map((service, index) => (
              <div key={index} className="flex desktop:flex-row flex-col desktop:space-x-6 space-y-6 desktop:space-y-0">
                <div className="flex-shrink-0">
                  <Image src={service.imgSrc} width={56} height={56} alt={service.imgAlt} />
                </div>
                <div>
                  <p className="text-h4">{service.title}</p>
                  <p className="text-blue-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-1">
        <div className="container py-32">
          <div className="grid desktop:grid-cols-3 text-white gap-10">
            {[
              {
                title: 'Liquidity & Brokerage',
                description:
                  'Bespoke liquidity and access to over 40,000 instruments for both retail and institutional brokers.',
              },
              {
                title: 'OTC Market Making',
                description:
                  'A leading market maker in global markets. Leverage our expertise and deep liquidity pool.',
              },
              {
                title: 'DMA Execution Services',
                description:
                  'Using integrated liquidity, workflow and execution, and analytics for optimal routing of orders.',
              },
              {
                title: 'Custody Services',
                description:
                  'Safe, secure and segregated service to hold and manage your assets - execution, clearing & settlement capabilities.',
              },
            ].map((service, index) => (
              <div key={index} className="border-t flex flex-col pb-24">
                <div className="pt-6 desktop:pt-0">
                  <p className="text-h3 font-semibold py-3 w-2/3">{service.title}</p>
                  <p className="text-sub2 text-grey desktop:w-2/3">{service.description}</p>
                </div>
              </div>
            ))}
            <div className="border-t flex flex-col pb-24">
              <div className="pt-6 desktop:pt-0">
                <p className="text-h3 font-semibold py-3 w-1/2">Explore solutions across our brands</p>
                <p className="text-sub2 text-grey desktop:w-2/3"></p>
              </div>
              <Link href="/solutions">
                <div className="flex flex-row items-center pt-14 hover:underline">
                  <p className="text-sub1 font-bold">Explore</p>
                  <div className="ml-2">
                    <Image src={'/icons/arrowicon.png'} width={15} height={15} alt={'Arrow'} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container desktop:py-36 py-20">
        <div className="flex desktop:flex-row flex-col desktop:px-64 desktop:gap-36">
          <div className="desktop:space-y-4 space-y-8">
            <p className="desktop:text-h2 text-h3 text-blue-2 font-bold desktop:w-2/3">Extending the possibilities</p>
            <p className="text-blue-4 text-sub1">
              A leader in inclusive accessibility to financial markets, we are growing and expanding our ecosystem to
              develop and deliver a wider range of financial products and services in the future - to improve the ways
              people relate to their money and investments.
            </p>
          </div>

          <div className="mt-auto desktop:mt-0 mx-auto pt-16 desktop:pt-0 flex items-center justify-center">
            <div className="w-[226px] h-auto">
              <Image src="/images/homepage/cubic.png" alt="Cube" width={226} height={226} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-2">
        <div className="container py-20 desktop:py-36 flex flex-col desktop:flex-row gap-20 items-center">
          <div className="flex-1 pb-64">
            <p className="desktop:text-h2 text-h4 font-bold text-white desktop:pb-36 pb-12">
              How our companies are creating the foundation for sustainable business
            </p>
            <div className="flex justify-between desktop:flex-row flex-col space-y-12 desktop:space-y-0">
              <div className="desktop:space-y-8 desktop:text-h4 text-sub1 font-bold flex desktop:flex-col flex-row space-x-6">
                <button
                  className={`${activeCompany === 'scopeMarkets' ? 'text-blue-1' : 'text-blue-4'}`}
                  onClick={() => setActiveCompany('scopeMarkets')}
                >
                  Scope Markets
                </button>
                <button
                  className={`${activeCompany === 'scopePrime' ? 'text-blue-1' : 'text-blue-4'}`}
                  onClick={() => setActiveCompany('scopePrime')}
                >
                  Scope Prime
                </button>
              </div>
              <div className="space-y-4 text-white desktop:max-w-96">
                {activeCompany === 'scopeMarkets' ? (
                  <>
                    <p className="text-h4">Personalising access to financial markets</p>
                    <p className="text-blue-3">
                      Rostro’s global retail brokerage arm, which is our diversified, multi-asset financial services
                      brand offering trading and investment services.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-h4">A seamless experience across the entire value chain</p>

                    <p className="text-blue-3">
                      By connecting global and local markets in emerging regions, we foster lasting relationships that
                      stand the test of time.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Link
              href={
                activeCompany === 'scopeMarkets'
                  ? 'https://www.scopemarkets.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage'
                  : 'https://scopeprime.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage'
              }
              target="_blank"
            >
              <Image
                src={
                  activeCompany === 'scopeMarkets'
                    ? '/images/homepage/scope-ellipse.png'
                    : '/images/homepage/scope-prime-ellipse.png'
                }
                alt={activeCompany === 'scopeMarkets' ? 'Scope Markets' : 'Scope Prime'}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="desktop:relative z-10">
        <div className="container desktop:py-36 pt-20 desktop:pb-14 flex desktop:flex-row flex-col justify-between">
          <div className="space-y-8 basis-5/12">
            <p className="desktop:text-h2 text-h4 font-bold text-blue-2">
              Effecting change in global financial inclusion
            </p>
            <p>
              We want to be a gateway for financial inclusion and believe in financial well-being for all. Our goal is
              to see more people become capable participants equipped to achieve their unique financial goals.
            </p>
            <div>
              <Link href="/about">
                <p className="cursor-pointer text-blue-1 font-bold text-sub1">About Rostro Group</p>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={'/images/homepage/umbrella.png'}
              width={605}
              height={454}
              alt="ScopeMarkets Logo"
              className="basis-5/12"
            />
          </div>
        </div>
        {/* Set z-index lower than the header (header z-index is 40) */}
        <div className="desktop:absolute inset-0 w-screen flex justify-center items-end pointer-events-none overflow-x-hidden z-0">
          <p
            className="font-bold text-blue-1/5 whitespace-nowrap align-baseline"
            style={{ fontSize: '15.5vw', lineHeight: '0.7' }}
          >
            #StepForward
          </p>
        </div>
      </div>
      <div className="bg-computer bg-center">
        <div className="container desktop:py-64 py-20 space-y-16">
          <p className="font-bold desktop:text-h2 text-h4 text-white desktop:w-4/5">
            Giving every market participant access to make, invest & manage money.
          </p>
          <p className="font-bold text-sub1 text-white">#StepForward</p>
        </div>
      </div>
    </>
  );
};

export default Page;
