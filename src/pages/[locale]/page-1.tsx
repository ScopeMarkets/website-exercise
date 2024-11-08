import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import Group from '@/components/Group/Group';
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import Text from '@/components/Text/Text';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default function Page() {
  return (
    <>
      <Section>
        <Heading.One className="mb-10">A partner program designed for those with a strong trader audience</Heading.One>
        <Text className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit quae aliquid, alias reiciendis harum
          quibusdam fuga. Quis tempore nisi qui, voluptates corporis commodi? Earum itaque quo totam dignissimos
          veritatis?
        </Text>
        <ul className="mb-10 list-disc list-inside ps-6 space-y-3">
          {/** Please refer to task 1, item 2 */}
          <li>Educators</li>
          <li>Signal Service Providers</li>
          <li>FinTech Firms</li>
          <li>Trading Academies</li>
          <li>Strategy Providers</li>
          <li>EA Providers</li>
          <li>Fund Managers</li>
        </ul>
      </Section>

      <Section className="bg-blue-1 text-white">
        <Heading.One className="text-center mb-24">Whereas recognition of the inherent dignity</Heading.One>
        <Group center gap="small" wrap>
          {(
            [
              /** Please refer to task 1, item 3 */
            ] as { title: string; text: string }[]
          ).map(({ title, text }, i) => (
            <div key={i} className="desktop:self-stretch max-w-[300px] p-10 bg-white text-black">
              <Heading.Two className="mb-4">{title}</Heading.Two>
              <Text>{text}</Text>
            </div>
          ))}
        </Group>
      </Section>
    </>
  );
}
