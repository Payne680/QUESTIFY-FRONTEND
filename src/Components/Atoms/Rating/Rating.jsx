import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function RatingComponent() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={0} size="small" />
    </Stack>
  );
}

export default RatingComponent;
