import React, { useState, useEffect } from 'react';
import LeadsList from './LeadsList';
import FiltroEstado from './FiltroEstado';
import LeadsData from './LeadsData';
import DummyData from './DummyData';
import Navbar from './Navbar';

const SearchPage = (props) => {
  const [cidade, setCidade] = useState('florianopolis');
  const [estado, setEstado] = useState('All');
  const [volumeMinimo, setVolumeMinimo] = useState('1');
  const [leadsListDefault, setLeadsListDefault] = useState();
  const [leadsList, setLeadsList] = useState();
  const [dummyData, setDummyData] = useState();

  const fetchData = async () => {
    const data = LeadsData
    setLeadsList(data)
    setLeadsListDefault(data)
    const data2 = await DummyData
    console.log(data2)
    setDummyData(data2)
  }

  const updateEstado = async (estado) => {
    await setEstado(estado);
    updateFilters(estado);
  }

  const updateFilters = async (estado) => {
    const filteredEstado = leadsListDefault.filter(lead => {
      return estado === 'All' ? true : lead.endereco.uf === estado
    })
    const multiFilter = leadsListDefault.filter(value => filteredEstado.includes(value));
    setLeadsList(multiFilter);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <>
      <Navbar/>
      <br></br>
      <h1 class="is-size-3 mb-3">Fintz Leads</h1>

      <FiltroEstado
        estado={estado}
        onChange={updateEstado}
      />
      <button onclick={console.log('hello')} > pesquisar </button>
      <LeadsList leadsList={dummyData} />
      {/* <LeadsList leadsList={leadsList} /> */}
    </>
  );
}

export default SearchPage