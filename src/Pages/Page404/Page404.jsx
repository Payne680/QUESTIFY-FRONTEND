import React from 'react';
import './Page404.css';
import Button from '../../Components/Atoms/Buttons/Button';

function Page404() {
  return (
    <div className="errorpage">
      <div className="numz">404</div>
      <div className="paraz">
        <p>Ooops!...Page not found.</p>
      </div>
      <Button title="Go back home" height="20px" />
    </div>
  );
}

export default Page404;
