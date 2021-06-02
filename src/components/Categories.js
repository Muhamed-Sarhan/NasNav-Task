import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className='categoryBar'
    >
      <BottomNavigationAction className='categoryBarItem' label='Men' />
      <BottomNavigationAction className='categoryBarItem' label='Women' />
      <BottomNavigationAction className='categoryBarItem' label='Unisex' />
      <BottomNavigationAction className='categoryBarItem' label='Kids' />
      <BottomNavigationAction
        className='categoryBarItem'
        label='Best Sellers'
      />
      <BottomNavigationAction className='categoryBarItem' label='New Arrival' />
      <BottomNavigationAction
        className='categoryBarItemOffers'
        label='Offers'
      />
    </BottomNavigation>
  );
}
