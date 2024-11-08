import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface Props<T> {
  as?: T;
  skipLocaleHandling?: boolean;
}

export default function Link<T extends React.ElementType = typeof NextLink>({
  as,
  children,
  skipLocaleHandling,
  href,
  ...rest
}: Props<T> & Omit<React.ComponentProps<T>, keyof Props<T>>) {
  const router = useRouter();
  const locale = rest.locale ?? router.query.locale ?? '';
  const Component = (as ?? NextLink) as React.ElementType;

  skipLocaleHandling ??= ['http', 'mailto', 'tel'].some((item) => href.includes(item));

  if (locale && !skipLocaleHandling) {
    href = `/${locale}${href}`;
  }

  return <Component {...{ href, ...rest }}>{children}</Component>;
}
