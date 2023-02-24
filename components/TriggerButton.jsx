import { useState } from 'react';
import Button from '../styles/Button';

const TriggerButton = ({ textOnTrue, textOnFalse, isActive }) => {
  const [active, setActive] = useState(isActive);

  return (
    <Button
      onMouseOver={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
    >
      {active ? textOnTrue : textOnFalse}
    </Button>
  );
};

export default TriggerButton;
