import { type SyntheticEvent, useState } from 'react';

export function useScrollWithShadow(): {
  shadow: string;
  onScrollHandler: (event: SyntheticEvent<HTMLDivElement>) => void;
} {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScrollHandler = (event: SyntheticEvent<HTMLDivElement>): void => {
    setScrollTop(event.currentTarget.scrollTop);
    setScrollHeight(event.currentTarget.scrollHeight);
    setClientHeight(event.currentTarget.clientHeight);
  };

  function getShadow(): string {
    const isBottom = clientHeight === scrollHeight - scrollTop;

    return isBottom
      ? 'none'
      : 'linear-gradient(to bottom, black calc(100% - 100px), transparent 100%)';
  }

  return { shadow: getShadow(), onScrollHandler };
}
