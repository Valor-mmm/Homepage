import { useEffect, useState } from 'react';

export const useUrlHash = () => {
  const [urlHash, setUrlHash] = useState<string>('');

  useEffect(() => {
    setUrlHash(window.location.hash);
  }, []);

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent) => {
      try {
        const url = new URL(event.newURL);
        console.log('URL Hash', url.hash);
        setUrlHash(url.hash);
      } catch (error) {
        console.warn('Could not parse URL Hash', event.newURL);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setUrlHash]);

  return urlHash;
};
