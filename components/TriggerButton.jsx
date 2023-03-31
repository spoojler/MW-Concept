import { useState } from 'react';
import Button from '../styles/Button';

const TriggerButton = ({ defaultText, changedText }) => {
  const [active, setActive] = useState(true);

  return (
    <Button
      style={{ marginTop: '18px' }}
      onMouseOver={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
    >
      {active ? defaultText : changedText}
    </Button>
  );
};

export default TriggerButton;
