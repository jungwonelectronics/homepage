import React, { useState } from 'react';
import { default as MeterialMenu } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Menu({
  id, Button, menus, onClick, value,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => { setAnchorEl(e.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const handleMenuItemClick = id => () => {
    onClick(id);
    setAnchorEl(null);
  };
  return (
    <>
      {React.cloneElement(Button, {
        id: `${id}-menu-button`,
        'aria-controls': open ? `${id}-menu` : undefined,
        'aria-haspopup': 'true',
        'aria-expanded': open ? 'true' : undefined,
        onClick: handleClick,
      })}
      <MeterialMenu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `${id}-menu-button`,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menus.map(item => (
          <MenuItem
            key={item.id}
            selected={item.id === value}
            onClick={handleMenuItemClick(item.id)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MeterialMenu>
    </>
  );
}
