import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Group from '@/components/Group/Group';
import Heading from '@/components/Heading/Heading';
import Image from 'next/image';
import Link from '@/components/Link/Link';
import Section from '@/components/Section/Section';
import Text from '@/components/Text/Text';

const getStaticProps = makeStaticProps(['common', 'index']);
export { getStaticPaths, getStaticProps };

export default function Page() {
  const { t } = useTranslation(['common', 'index']);
  const [entity, setEntity] = useState<'scopemarkets' | 'scopeprime'>('scopemarkets');

  return (
    <>
      <Section
        className="bg-blue-1 text-white bg-[url(/images/index/header.webp)] bg-cover bg-center"
        containerClassName="min-h-[500px] flex items-center justify-center"
      >
        <div>
          <Heading.One className="text-center mb-4">{t('common:rostro-group')}</Heading.One>
          <Text size="large">{t('index:hero-block.description')}</Text>
        </div>
      </Section>

      <Section className="bg-blue-2 text-white">
        <Group grow className="items-center">
          <div className="pb-64">
            <Heading.One className="mb-24">{t('index:section-2.title')}</Heading.One>
            <Group className="items-start">
              <Group direction="row" wrap>
                <button
                  onClick={() => setEntity('scopemarkets')}
                  className={twMerge(
                    'text-xl desktop:text-3xl font-bold whitespace-nowrap',
                    entity === 'scopemarkets' ? 'text-blue-1' : 'text-blue-4'
                  )}
                >
                  Scope Markets
                </button>
                <button
                  onClick={() => setEntity('scopeprime')}
                  className={twMerge(
                    'text-xl desktop:text-3xl font-bold whitespace-nowrap',
                    entity === 'scopeprime' ? 'text-blue-1' : 'text-blue-4'
                  )}
                >
                  Scope Prime
                </button>
              </Group>
              <div className="space-y-4 desktop:min-w-96">
                {entity === 'scopemarkets' ? (
                  <>
                    <Heading.Two>{t('index:section-2.scopemarkets.title')}</Heading.Two>
                    <Text className="text-blue-3">{t('index:section-2.scopemarkets.text')}</Text>
                  </>
                ) : (
                  <>
                    <Heading.Two>{t('index:section-2.scopeprime.title')}</Heading.Two>
                    <Text className="text-blue-3">{t('index:section-2.scopeprime.text')}</Text>
                  </>
                )}
              </div>
            </Group>
          </div>
          <div>
            <Link
              href={
                entity === 'scopemarkets'
                  ? 'https://www.scopemarkets.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage'
                  : 'https://scopeprime.com/?utm_source=Rostro.com&utm_medium=Referral&utm_campaign=Homepage'
              }
              target="_blank"
            >
              <Image
                src={entity === 'scopemarkets' ? '/images/index/scopemarkets.webp' : '/images/index/scopeprime.webp'}
                alt={entity === 'scopemarkets' ? 'Scope Markets' : 'Scope Prime'}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </Group>
      </Section>

      <Section className="desktop:relative z-10">
        <Group className="mb-24">
          <div className="space-y-8 basis-1/2">
            <Heading.One>{t('index:section-3.title')}</Heading.One>
            <Text>{t('index:section-3.text')}</Text>
            <Link href="#" className="block cursor-pointer text-blue-1 font-bold text-xl">
              {t('index:section-3.about-rostro-group')}
            </Link>
          </div>
          <div className="basis-1/2">
            <Image
              src="/images/index/umbrella.webp"
              alt="Rostro"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>
        </Group>
        <div className="desktop:absolute inset-x-0 bottom-0 w-screen pointer-events-none overflow-x-hidden z-0">
          <Text
            className="font-bold text-blue-1/5 whitespace-nowrap align-baseline"
            style={{ fontSize: '15vw', lineHeight: '0.7' }}
          >
            #StepForward
          </Text>
        </div>
      </Section>
    </>
  );
}
