import { useRef, useState } from 'react';
import { AccordionBody, AccordionBodyInner, AccordionTitle } from './styles';

export default function AccordionDoubt({ doubt, className }) {
  const [collapsed, setCollapsed] = useState(true);
  const accBody = useRef();
  const accBodyInner = useRef();

  const showContent = () => {
    setCollapsed(!collapsed);
    accBody.current.style.height = collapsed
      ? `${Math.floor(accBodyInner.current.offsetHeight)}px`
      : '0px';
  };

  return (
    <div className={className} aria-expanded={!collapsed}>
      <AccordionTitle onClick={showContent}>{doubt.label}</AccordionTitle>
      <AccordionBody ref={accBody}>
        <AccordionBodyInner ref={accBodyInner}>
          {doubt.description}
        </AccordionBodyInner>
      </AccordionBody>
    </div>
  );
}
