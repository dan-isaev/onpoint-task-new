import * as React from 'react';

import './App.css';
import { First } from './First';
import { Second } from './Second';
import { Third } from './Third';
import { Nav } from './Nav';

interface AppProps {
  firstRef: (element: HTMLElement) => void;
  secondRef: (element: HTMLElement) => void;
  secondIceBlocksRef: (element: HTMLElement) => void;
  thirdRef: (element: HTMLElement) => void;
  onNavItemClick: (value: number) => void;
  onToNextButtonClick: () => void;
  navValue: number;
  firstShowToNextButton: boolean;
}

export const App = ({
  firstRef,
  secondRef,
  secondIceBlocksRef,
  thirdRef,
  onNavItemClick,
  navValue,
  onToNextButtonClick,
  firstShowToNextButton
}: AppProps) => {
    return (
      <div className="App">
        <First
          rootRef={firstRef}
          onToNextButtonClick={() => onNavItemClick(1)}
          showToNextButton={firstShowToNextButton}
        />
        <Second rootRef={secondRef} iceBlocksRef={secondIceBlocksRef} />
        <Third rootRef={thirdRef} />
        <Nav
          onItemClick={onNavItemClick}
          value={navValue}
        />
      </div>
    );
};

export default App;
