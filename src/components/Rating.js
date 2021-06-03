import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating({ value, isReadOnly }) {
  return (
    <div>
      <Box
        className='rate'
        component='fieldset'
        mb={3}
        borderColor='transparent'
      >
        <Rating
          readOnly={isReadOnly}
          name='rating'
          value={value}
          size='small'
        />
      </Box>
    </div>
  );
}
