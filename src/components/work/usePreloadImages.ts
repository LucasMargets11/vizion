import { useEffect, useState } from 'react';

export function usePreloadImages(urls: string[]) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        await Promise.all(
          urls.map(
            (src) =>
              new Promise<void>((resolve) => {
                if (!src) return resolve();
                const img = new Image();
                img.src = src;
                const done = () => resolve();
                img.onload = done;
                img.onerror = done;
                if ('decode' in img) {
                  (img as any)
                    .decode?.()
                    .then(done)
                    .catch(done);
                }
              })
          )
        );
      } finally {
        if (!cancelled) setReady(true);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [urls]);
  return { ready };
}
