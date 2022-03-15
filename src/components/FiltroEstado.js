import React from 'react';

const FiltroEstado = ({input:keyword, onChange:updateEstado}) => {
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
            updateEstado(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Countries By Countries"
        >
          <option value="All">Todos os estados</option>
          <option value="AP">Amapá</option>
          <option value="MG">Minas Gerais</option>
          <option value="MT">Mato Grosso</option>
          <option value="PA">Pará</option>
          <option value="PR">Paraná</option>
          <option value="RR">Roraima</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="SC">Santa Catarina</option>
          <option value="SE">Sergipe</option>
          <option value="SP">São Paulo</option>
          <option value="TO">Tocantins</option>
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
}

export default FiltroEstado
