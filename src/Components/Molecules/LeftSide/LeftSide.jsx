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
      <div className="envelopez">
        <img className="circle" src={ellipse} alt="dot" />
        <Heading title="New Home for Collaboration" size="50px" />
        <img className="envlope" src={plane} alt="envelop" />
      </div>
      <div className="para">
        <Paragraph title="The online collaborative whiteboard platform to bring teams together, anytime, anywhere." />
        <Button title="Get Started" height="15px" width="25%">
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
        <Paragraph
          title="Free forever — no credit card required."
          size="13px"
        />
      </div>
      <div className="girl">
        <img src={girl} alt="female" />
      </div>
    </div>
  );
}
