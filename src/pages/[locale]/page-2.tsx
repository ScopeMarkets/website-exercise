import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default function Page() {
  return (
    <>
      <Section>
        <Heading.One className="mb-10">Interactive Calculator</Heading.One>
        <Text className="mb-24">Finish the below interactive calculator.</Text>
        <div>
          {/* You can find the SVG shape in `public/images/triangle.svg` */}
          <input type="range" />
        </div>
      </Section>
    </>
  );
}
