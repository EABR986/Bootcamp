import React from 'react';

import ButtonUI from '../components/ui/components/ButtonUI';
import TitleUI from '../components/ui/components/TitleUI';
import useWindow from '../hooks/useWindow';

const About = () => {
  const { width, height } = useWindow();
  return (
    <div>
      <TitleUI>React โ๏ธ + Vite ๐งช+ Eslint ๐+ Prettier ๐งฎ+ Emotion ๐๐ฝ+ Theme ๐จ </TitleUI>
      <TitleUI>Vitest ๐ + ReactTestingLibrary ๐</TitleUI>
      <div>
        <ButtonUI variant="error">Error</ButtonUI>
        <ButtonUI variant="warning">Warnig</ButtonUI>
        <ButtonUI variant="success">Success</ButtonUI>
        <ButtonUI variant="default">Default</ButtonUI>
      </div>
      <div>
        <h3>Custom Hook listener example:</h3>
        <p>Ancho: {width}</p>
        <p>Alto: {height}</p>
      </div>

      <p>{width <= 600 ? 'Hola' : 'Adios'}</p>

    </div>
  );
};

export default About;
