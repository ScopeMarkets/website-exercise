import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className=" bg-blue-1">
      <div className="container text-white">
        <div className="flex flex-col desktop:flex-row items-center">
          <div className="desktop:basis-7/12">
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
              <h1 className="desktop:text-h1 text-h3 font-bold">Rostro’s Social Responsibility</h1>
            </div>
            <div className="desktop:w-5/6">
              <h2 className="desktop:text-h2 text-h4 font-bold desktop:mb-12 mb-8">The Rostro Philosophy</h2>
              <h3 className="text-h4 mb-8">
                A gateway for financial inclusion; we believe in financial well-being for all.
              </h3>
              <div className="space-y-8 text-blue-3 text-sub2 desktop:mb-24">
                <p>
                  At Rostro we believe in a future where financial well-being is accessible to everyone. Our mission
                  extends beyond providing top-tier financial services and platforms; it’s about building a foundation
                  for inclusive financial health and prosperity, ensuring that individuals and communities have the
                  tools, knowledge, and opportunities to achieve financial well-being
                </p>
                <p> Bridging the gap to financial inclusion</p>
                <p>
                  We recognize that financial well-being is influenced by a complex interplay of factors including
                  general economic conditions, socioeconomic status, personal health, cultural influences, economic
                  inequality among others. Our CSR strategy is designed to address these foundational factors head-on,
                  creating pathways for more people to engage with and benefit from the financial ecosystem.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="mx-auto self-end"
            src="/images/foundation/hands.png"
            alt="Giving"
            width={650}
            height={381}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
