import React from 'react';
import Button from '../../Atoms/Buttons/Button';
import Heading from '../../Atoms/Headings/Heading';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import plane from '../../../assets/images/plane.png';
import ellipse from '../../../assets/images/ellipse.png';
import girl from '../../../assets/images/girl.png';
import './LeftSide.css';

export default function Head() {
  return (
    <div>
      <img className="envlope" src={plane} alt="envelop" />
      <img className="circle" src={ellipse} alt="dot" />
      <Heading title="New Home for Collaboration" size="54px" />
      <Paragraph
        title="The online collaborative whiteboard platform to bring teams together, anytime, anywhere."
        width="85%"
      />
      <Button title="Get Started" height="15px" width="30%">
        <span className="material-symbols-outlined">arrow_forward</span>
      </Button>
      <Paragraph title="Free forever — no credit card required." size="13px" />
      <img src={girl} alt="female" />
    </div>
  );
}
