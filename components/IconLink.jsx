// Pamiętaj każdą nazwę ikony zaimportować w _app.jsx i dodać do library

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../styles/Icon';

const IconLink = ({ name, url }) => {
  //   const getLink = (url) => `"${url}"`;

  return (
    <Icon>
      <a href={url}>
        <FontAwesomeIcon icon={name} />
      </a>
    </Icon>
  );
};

export default IconLink;
