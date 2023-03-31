// Pamiętaj każdą nazwę ikony zaimportować w _app.jsx i dodać do library

import Icon from '../styles/IconLinkStyle';

const IconLink = ({ svgPath, color, url }) => {
  console.log(svgPath, url, color);
  return (
    <Icon href={url}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill={color} d={svgPath} />
      </svg>
    </Icon>
  );
};

export default IconLink;
