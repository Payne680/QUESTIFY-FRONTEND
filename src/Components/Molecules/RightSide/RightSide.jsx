import React from 'react';
import boy from '../../../assets/images/boy.png';
import Heading from '../../Atoms/Headings/Heading';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import element from '../../../assets/images/element.png';
import vector from '../../../assets/images/vector.png';
import './RightSide.css';

export default function RightSide() {
  return (
    <div>
      <img className="male" src={boy} alt="male" />
      <Heading title="Stay organized and connected" size="38px" width="80%" />
      <Paragraph
        title="Bring your team's work together in one shared space. Choose the project view that suits your style, and collaborate no matter where you are."
        size="19px"
        width="80%"
      />
      <img className="elements" src={element} alt="elements" />
      <img className="dot" src={vector} alt="dot-line" />
    </div>
  );
}
