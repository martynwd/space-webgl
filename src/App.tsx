import React, { useRef } from 'react';

import { Stage, Container } from '@pixi/react';

import { Star } from './Star';

import styles from './App.module.css'

function App() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  return (
    <div>
      <Stage
        width={windowWidth.current - 100}
        height={windowHeight.current - 100}
        options={{ backgroundAlpha: 0 }}
      >
        <Container
          width={windowWidth.current - 100}
          height={windowHeight.current - 100}
        >
          <Star x={windowWidth.current / 2} y={windowHeight.current / 2} />
        </Container>
      </Stage>
    </div>
  );
}

export default App;
