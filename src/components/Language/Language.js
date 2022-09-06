import * as React from "react";
import { LanguageContext } from '../../context/LanguageContext';

const Language = ({ langKey }) => {
  const { lang } = React.useContext(LanguageContext);
  return (
    <>
      {lang[langKey]}
    </>
  )
}

export default Language;