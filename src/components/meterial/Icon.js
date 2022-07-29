import * as React from "react";
import PropTypes from 'prop-types';
import Menu from '@mui/icons-material/Menu';
import Language from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const ICON_LIST = {
  menu: Menu,
  language: Language,
  call: CallIcon,
  mail: MailIcon,
}

export default function Icon({ name, size, color, margin, ...rest }) {
  const IconComponent = ICON_LIST[name];
  return (
    <IconComponent
      style={{
        color,
        fontSize: `${size}px`,
        margin,
      }}
      {...rest}
    />
  );
}

Icon.prototype = {
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
}