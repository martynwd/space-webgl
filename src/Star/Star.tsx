import { useMemo, useReducer, useRef, FC, JSX } from 'react';
import { useTick, Sprite } from '@pixi/react';

import styles from './Star.module.css';

import comet from './rectangle.png';
interface StareProps {
    x: number;
    y: number;
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// @ts-ignore
const reducer = (_, { data }) => data;
export const Star: FC<StareProps> = ({ x, y }): JSX.Element => {
    const [motion, update] = useReducer(reducer, {});
    const iter = useRef(0);

    useTick((delta) => {
        const i = (iter.current += 0.001 * delta);

        update({
            // @ts-ignore
            type: 'update',
            data: {
                x: Math.sin(i) * getRandomInt(500, 1000),
                y: Math.sin(i / 1.5) * getRandomInt(500, 1000),
            },
        });
    });

    return (
      <Sprite
        width={90}
        height={20}
        x={x}
        y={y}
        image={comet}
        {...motion}
      />
    )
}
