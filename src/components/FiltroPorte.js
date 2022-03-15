import React from 'react';

const FiltroPorte = ({input:keyword, onChange:updatePorte}) => {
  return (
    <>
      <div className="select">
        <select
          /* 
          // here we create a basic select input
          // we set the value to the selected value 
          // and update the setC() state every time onChange is called
          */
          onChange={(e) => {
            updatePorte(e.target.value);
          }}
          className="custom-select"
          aria-label="Filtrar empresas por porte"
        >
          <option value="">Todos os portes</option>
          <option value="01">Micro</option>
          <option value="03">Pequena</option>
          <option value="05">Médias e grandes</option>
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
}

export default FiltroPorte
