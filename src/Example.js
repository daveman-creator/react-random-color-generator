/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// CSS-in-JS
const frame = css`
  position: top;
  width: 500px;
  height: 600px;
  margin: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #ff0000;
  background: azure;
`;

const center = css`
  text-align: center;
`;

// App Component
export default function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  // onChange Handlers
  function onChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  function onChangeWidth(event) {
    setWidth(event.currentTarget.value);
  }

  function onChangeHeight(event) {
    setHeight(event.currentTarget.value);
  }

  const str = <h2 css={center}>{randomColor}</h2>;

  const colorBox = randomColor`
    background-color: ${randomColor};`;

  return (
    <div css={frame}>
      <h1>Random Color Generator</h1>

      <h3>Change color to be a certain hue and luminosity</h3>
      <div>
        <Input
          htmlFor="hue"
          text="hue"
          type="text"
          id="hue"
          placeholder="green"
          value={hue}
          onChange={onChangeHue}
        />
      </div>

      <div>
        <Input
          htmlFor="luminosity"
          text="luminosity"
          type="text"
          id="luminosity"
          placeholder="light"
          value={luminosity}
          onChange={onChangeLuminosity}
        />
      </div>
      <br />

      <h3>Resize the box!</h3>
      <div>
        <Input
          htmlFor="width"
          text="width (in px)"
          type="number"
          id="width"
          placeholder="500px"
          value={width}
          onChange={onChangeWidth}
        />
      </div>
      <div>
        <Input
          htmlFor="height"
          text="height (in px)"
          type="number"
          id="height"
          placeholder="500px"
          value={height}
          onChange={onChangeHeight}
        />
      </div>
      <br />
      <br />

      <Button
        setRandomColor={setRandomColor}
        luminosity={luminosity}
        hue={hue}
      />

      <br />
      <br />
      <br />
      <div colorbox={randomColor} str>
        {' '}
      </div>
    </div>
  );
}