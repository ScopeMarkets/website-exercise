import React from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm/ContactForm';

const Page = () => {
  return (
    <>
      <div className="bg-blue-1">
        <div className="container text-white">
          <div className="flex flex-col desktop:flex-row items-center gap-x-18">
            <div className="desktop:basis-7/12">
              <div className="desktop:my-36 my-20 flex items-center">
                <div className="desktop:mr-12 mr-6 mt-2 desktop:mt-4 desktop:w-[87px] desktop:h-[67px] w-[42px] h-[32px]">
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow Icon"
                    width={87}
                    height={67}
                    className="max-w-full max-h-full"
                  />
                </div>
                <h1 className="desktop:text-h1 text-h3 font-bold">About us</h1>
              </div>

              <h2 className="desktop:text-h2 text-h4 font-bold desktop:mb-12 mb-8">A message from R. Hambury</h2>

              <div className="space-y-8 text-blue-3 text-sub2 desktop:mb-24">
                <p>
                  We founded Rostro with the belief that change was needed to remove the friction and distance between
                  individual market participants and the financial services ecosystem. We wanted to create a
                  full-service fintech & financial services group that inclusively caters to every level of market
                  participant and in doing so make accessibility to financial markets both inclusive and personalised.
                </p>
                <p>
                  My ambition for Rostro is that it continues to develop as a powerhouse of financial services, an
                  ecosystem of expertise and intrapreneurs who are not only are attune to the challenges of the
                  financial services industry but are also equipped with the means and imagination to bring about the
                  solutions that can redefine the current status quo and shape a future of holistic financial services.
                </p>
                <p>
                  In the ever-evolving landscape of investments, our commitment to your success remains unwavering. We
                  take pride in our ability to navigate challenges and seize opportunities, ensuring the best outcomes
                  for our valued clients.
                </p>
                <p>
                  Looking forward, we’re excited about the possibilities on the horizon. With a focus on innovation,
                  integrity, and client-centricity, we’re dedicated to delivering exceptional results and experiences.
                  Thank you for trusting us on your financial journey. Together, let’s explore the vast scope of
                  opportunities in financial markets and keep stepping forward toward financial success.
                </p>
                <p>Warm regards,</p>
                <p>Roger Hambury</p>
              </div>
            </div>
            <Image
              className="mx-auto self-end desktop:basis-5/12 mt-4"
              src="/images/about/roger.png"
              alt="Giving"
              width={650}
              height={381}
            />
          </div>
        </div>
      </div>
      <div className="bg-grey desktop:py-36 py-20">
        <div className="flex flex-col space-y-10 container text-white">
          <p className="text-blue-1 desktop:text-h2 text-h3 font-bold">We are Rostro</p>
          <p className="text-blue-5 text-h4 font-bold desktop:w-9/12">
            Welcome to Rostro, where financial excellence meets strategic innovation – where we provide inclusive
            accessibility to financial markets under one umbrella. As a leading force in the investment landscape, we
            pride ourselves on a distinguished history of delivering exceptional results to our clients.
          </p>
          <div className="grid desktop:grid-cols-2 gap-10 text-blue-4">
            <div>
              <div className="space-y-10">
                <p>
                  ROSTRO was founded in 2021. It was created as a new holding company that would cover every single type
                  of client in the sector, catering to all financial audiences and servicing all kinds of trading and
                  investment requirements.
                </p>
                <p>
                  We operate several regulated brokerage houses, providing execution and clearing of both listed
                  securities and OTC derivatives, serving institutional, professional and retail investors. Our goal is
                  to create an inclusive ecosystem that can service every level of market participant.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-10">
                <p>
                  Rostro’s service offering enables us to provide a tailored product range, delivered through either our
                  institutional or retail business lines, to customers in chosen markets and segments.
                </p>
                <p>
                  Our products allow our customers to make investment decisions, manage their money and execute quickly,
                  in a frictionless end-to-end financial ecosystem owned and controlled by Rostro Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-white desktop:my-36 my-20">
        <div className="flex flex-col">
          <div className="grid desktop:grid-cols-2 gap-8">
            <p className="desktop:text-h2 text-h3 text-blue-2 font-bold">A Team of Experts</p>
            <p className="text-blue-5 font-bold text-h4">
              Our leadership team comprises leading figures in the financial services industry who have recruited an
              executive team of industry professionals that together create tremendous knowledge synergies –
              transferring invaluable advantages to our clients.
            </p>
          </div>
          <div className="grid desktop:grid-cols-2 desktop:pt-28 pt-10 gap-10">
            <div className="space-y-10">
              <Image
                className="ml-4 desktop:ml-0"
                src="/images/about/hambury.png"
                alt="Roger"
                width={300}
                height={322}
              />
              <div className="space-y-2">
                <p className="text-h3 text-blue-2 font-bold">Roger Hambury</p>
                <p className="text-blue-1 font-bold">Owner and Founder, ROSTRO Group</p>
              </div>
              <p className="text-blue-4">
                Roger has been a leading figure within the FX and Derivatives industry for over 30 years, working for
                large financial institutions such as IG Group and City Index. More recently, Roger established ACM Group
                and on the successful exit to Playtech, established ROSTRO. Today, Roger’s prime focus is the ROSTRO
                Group where he has a mission to improve operating efficiencies through a combination of technology and
                hiring the best people possible. His unique combination of deep sector knowledge and entrepreneurial
                curiosity will see the firm, under his ownership, explore market opportunities in new geographies and
                develop new financial products and services that will change the way the finance world does business.
              </p>
            </div>
            <div className="space-y-10">
              <Image
                className="ml-4 desktop:ml-0"
                src="/images/about/ayres.png"
                alt="Michael"
                width={300}
                height={322}
              />
              <div className="space-y-2">
                <p className="text-h3 text-blue-2 font-bold">Michael Ayres</p>
                <p className="text-blue-1 font-bold">Group CEO, ROSTRO Group</p>
              </div>
              <p className="text-blue-4">
                Michael is the Group CEO for the ROSTRO Group of companies. He has a proven track record of building
                global financial businesses across EMEA, MENA and APAC regions, in both his previous roles as COO of GK
                Group and COO of Equiti Group. Michael has a background in Operations and Risk, having sat on the board
                of FCA regulated 730K companies, whilst also serving as a board member for an AI powered algorithmic
                risk management business. He leads the group across the Brokerage, Banking and Alternative Finance
                platforms. Michael runs the ROSTRO Group as a product-led financial services group that puts their
                customers’ needs and experiences first.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-1 desktop:bg-vision bg-right bg-contain bg-no-repeat">
        <div className="container">
          <div className="grid desktop:grid-cols-2 py-24 ndesktop:py-44 gap-32">
            <div className="text-right text-white">
              <p className="text-h2 font-bold">Since</p>
              <p className="text-[150px] leading-[100px] desktop:text-[300px] desktop:leading-[200px] font-bold">
                2021
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-white desktop:text-h2 text-h3 font-bold">Rostro’s Vision</p>
              <p className="text-blue-3 desktop:w-2/3 text-sub1 font-light">
                Driven by a passion for innovation, we take a forward-thinking approach to investment and financial
                services. By staying at the forefront of market trends and leveraging cutting-edge technologies, we
                ensure that our companies are well positioned to enable their clients and customers to benefit from
                opportunities in an ever-changing financial landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="block desktop:hidden">
          <Image src="/images/about/buildings-mobile.png" alt="Buildings" width={423} height={322} className="" />
        </div>
      </div>
      <div className="container desktop:my-36 my-20 ">
        <div className="text-blue-2 desktop:text-h2 text-h4 font-bold">
          <p>A shared purpose.</p>
          <p>A collective goal.</p>
        </div>
        <div className=" flex flex-col desktop:flex-row pt-14 desktop:gap-x-32">
          <div className="space-y-10 text-blue-4 text-sub1 basis-7/12 pb-12">
            <p>Everything we do, either as an individual entity or as a group is a step in the same direction. </p>
            <p>
              We take the best technology and actively construct and improve the ecosystem we need to support our
              operations.
            </p>
            <p>
              We recruit the brightest minds and industry experts who can leverage our ecosystem to design the products
              and services our clients need.
            </p>
            <p>
              Expertise, synergy and inclusivity are the pillars that define our culture. We believe in conducting
              business with integrity and the highest ethical standards, fostering transparency in all our interactions,
              and placing both client and employee needs at the forefront of every decision by ensuring a human approach
              to all that we do.
            </p>
            <p>
              The motto of our group is to step forward. We enable our people to take dynamic steps forward in their
              careers. Our collective efforts enable clients and customers to take a confident step forward.
            </p>
          </div>
          <div className="basis-5/12 px-8 desktop:px-0 mx-auto">
            <Image src="/images/about/legs.png" alt="Rostro in Motion" width={625} height={560} />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Page;
