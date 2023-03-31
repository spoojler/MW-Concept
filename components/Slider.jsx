import SliderContainer from '../styles/SliderContainer';
import Button from '../styles/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Slider = ({ projectArray }) => {
  const project = projectArray;

  const [imgArray, setImgArray] = useState([]);
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    setImgArray(project);
    setCurrentImg(project[0]);
  }, []);

  const getNextImg = (e) => {
    e.preventDefault();
    const currentImgIndex = imgArray.findIndex((src) => src === currentImg);
    if (currentImgIndex < imgArray.length - 1) {
      setCurrentImg(imgArray[currentImgIndex + 1]);
    } else {
      setCurrentImg(imgArray[0]);
    }
  };

  const getPreviousImg = (e) => {
    e.preventDefault();
    const currentImgIndex = imgArray.findIndex((src) => src === currentImg);
    if (currentImgIndex === 0) {
      setCurrentImg(imgArray[imgArray.length - 1]);
    } else {
      setCurrentImg(imgArray[currentImgIndex - 1]);
    }
  };

  const leftArrow = '<';
  const rightArrow = '>';

  return (
    <SliderContainer w="90%" h="100%" d="flex" pos="relative">
      <Image
        style={{ objectFit: 'contain', zIndex: '0' }}
        fill={true}
        src={currentImg}
      />
      <Button
        onClick={getPreviousImg}
        style={{
          fontSize: '7rem',
          width: '50%',
          textAlign: 'left',
          zIndex: '1',
        }}
      >
        {leftArrow}
      </Button>
      <Button
        onClick={getNextImg}
        style={{
          fontSize: '7rem',
          width: '50%',
          textAlign: 'right',
          zIndex: '1',
        }}
      >
        {rightArrow}
      </Button>
    </SliderContainer>
  );
};

export default Slider;
