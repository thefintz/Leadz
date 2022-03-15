import React, { useState, useEffect } from 'react';
import LeadsList from './LeadsList';
import FiltroEstado from './FiltroEstado';
import FiltroPorte from './FiltroPorte';
import FiltroCNAE from './FiltroCNAE';
import LeadsDummyData from './LeadsDummyData';  // for testing purposes (mocking api response)
import Navbar from './Navbar';

class SearchPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      estado: "All",
      municipio: "All",
      porte: "03",
      cnae: "11",
      leadsData: []
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData = async () => {
    const BASE_URL = "https://fintz.herokuapp.com"
    const param_estado = "uf=" + this.state.estado
    const param_municipio = "&municipio=" + "" // TODO: this.state.municipio instead of hardcoded 8349
    const param_porte = "&porte=" + this.state.porte
    const param_cnae = "&cnae=" + this.state.cnae
    const params = param_estado + param_municipio + param_porte + param_cnae

    const data = await fetch(BASE_URL + "/api/demos/criteria/leads?" + params)
      .then((res) => res.json())
      .then((json) => {
        return json
    })
    console.log(data)
    this.setState({ leadsData: data })
  }

  updateEstado = (estado) => {
    this.state.estado = estado;
  }

  updateMunicipio = (municipio) => {
    this.state.municipio = municipio;
  }

  updatePorte = (porte) => {
    this.state.porte = porte;
  }

  updateCNAE = (cnae) => {
    this.state.cnae = cnae;
  }

  render () {
    return (
      <>
        <Navbar/>
        <br></br>
        <h1 class="is-size-3 mb-3">Fintz Leadz</h1>

        <FiltroEstado
          estado={this.state.estado}
          onChange={this.updateEstado}
        />

        <br/>
        <br/>
        <FiltroPorte
          porte={this.state.porte}
          onChange={this.updatePorte}
        />

        <br/>
        <br/>
        <FiltroCNAE
          cnae={this.state.cnae}
          onChange={this.updateCNAE}
        />

        <br/>
        <button class="button is-success mt-3 mb-3" onClick={this.fetchData} > pesquisar </button>

        <LeadsList leadsList={ this.state.leadsData } />
      </>
    );
  }
}

export default SearchPage