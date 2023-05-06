import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckboxComponent() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      color="primary"
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export default CheckboxComponent;
