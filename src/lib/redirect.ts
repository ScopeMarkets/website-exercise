import { useRouter } from 'next/router';
import { useEffect } from 'react';
import languageDetector from './languageDetector';

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to ?? router.asPath;

  // Locale detection
  useEffect(() => {
    const detectedLng = languageDetector.detect() as string;

    // Prevents an infinite loop
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      router.replace('/' + detectedLng + router.route);
      return;
    }

    // Catches a redirection loop from the server
    if (to.startsWith(`/${detectedLng}/${detectedLng}/`)) {
      router.replace('/' + detectedLng + '/404');
      return;
    }

    languageDetector.cache?.(detectedLng);
    router.replace('/' + detectedLng + to);
  });

  return;
};

export const Redirect = (to: string) => {
  useRedirect();
  return;
};

export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return;
};
