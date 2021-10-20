import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import  ChecklistForm  from '../../Page/ChecklistForm/ChecklistForm';

const PdfGeneretor = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{textAlign:'center', margin:'50px auto'}}>
      <ChecklistForm ref={componentRef} />
      <button onClick={handlePrint}>Generate PDF</button>
    </div>
  );
};
export default PdfGeneretor;