import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{textAlign:'center', margin:'50px auto'}}>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Generate PDF</button>
    </div>
  );
};
export default Example;