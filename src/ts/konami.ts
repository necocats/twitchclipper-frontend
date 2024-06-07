import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonamiCode = (callback: () => void) => {
  const [input, setInput] = useState<string[]>([]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      setInput(prevInput => [...prevInput, event.key].slice(-KONAMI_CODE.length));
    };

    window.addEventListener('keydown', handleKeydown);

    if (input.join('') === KONAMI_CODE.join('')) {
      callback();
      setInput([]);
    }

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [input, callback]);
};
