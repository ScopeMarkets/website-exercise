import Image from 'next/image';
import Link from '@/components/Link/Link';
import { useState } from 'react';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';

export default function Page() {
  const [activeCompany, setActiveCompany] = useState('scopeMarkets');

  return (
    <>
      <Section
        className="bg-blue-1 text-white bg-[url(/images/index/header.webp)] bg-cover bg-center"
        containerClassName="min-h-[500px] flex items-center justify-center"
      >
        <div>
          <Heading.One className="text-center mb-4">Rostro Group</Heading.One>
          <Text size="large">
            A diversified fintech and financial services group, on a mission to effect change in financial inclusion at
            a global level.
          </Text>
        </div>
      </Section>

      <div className="bg-blue-2">
        <div className="container py-20 desktop:py-36 flex flex-col desktop:flex-row gap-20 items-center">
          <div className="flex-1 pb-64">
            <p className="desktop:text-6xl text-3xl font-bold text-white desktop:pb-36 pb-12">
              How our companies are creating the foundation for sustainable business
            </p>
            <div className="flex justify-between desktop:flex-row flex-col space-y-12 desktop:space-y-0">
              <div className="desktop:space-y-8 desktop:text-3xl text-xl font-bold flex desktop:flex-col flex-row space-x-6">
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
                    <p className="text-3xl">Personalising access to financial markets</p>
                    <p className="text-blue-3">
                      Rostro’s global retail brokerage arm, which is our diversified, multi-asset financial services
                      brand offering trading and investment services.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl">A seamless experience across the entire value chain</p>

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
                  activeCompany === 'scopeMarkets' ? '/images/index/scopemarkets.webp' : '/images/index/scopeprime.webp'
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
            <p className="desktop:text-6xl text-3xl font-bold text-blue-2">
              Effecting change in global financial inclusion
            </p>
            <p>
              We want to be a gateway for financial inclusion and believe in financial well-being for all. Our goal is
              to see more people become capable participants equipped to achieve their unique financial goals.
            </p>
            <div>
              <Link href="/about">
                <p className="cursor-pointer text-blue-1 font-bold text-xl">About Rostro Group</p>
              </Link>
            </div>
          </div>
          <div>
            <Image src="/images/index/umbrella.webp" width={605} height={454} alt="Rostro" className="basis-5/12" />
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
    </>
  );
}
