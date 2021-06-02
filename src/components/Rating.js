import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating({ product }) {
  return (
    <div className='ratingBox'>
      <Box
        className='rate'
        component='fieldset'
        mb={3}
        borderColor='transparent'
      >
        <Rating name='rating' value={product.rate} size='small' />
        <h3 className='rateP'>
          <strong>{product.rate} of 5</strong>
        </h3>
      </Box>
    </div>
  );
}
