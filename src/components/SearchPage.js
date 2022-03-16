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
      estado: "",
      municipio: "",
      porte: "",
      cnae: "",
      leadsData: [],
      activePage: 2
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

  updateActivePage = (page) => {
    console.log(page)
    this.state.activePage = page
  }

  render () {
    return (
      <>
        <Navbar/>
        <div class="columns">

          <div class="column">
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
            <br/>
            <button class="button is-success mt-3 mb-3" onClick={this.fetchData} > Pesquisar </button>
          </div>

          <div class="column is-half">
            <br/>
            <div class="tabs">
              <ul>
                <li onClick={() => { this.updateActivePage(0)} } class={ this.state.activePage === 0 ? "is-active" : ""}><a>Pictures</a></li>
                <li onClick={() => { this.updateActivePage(1)} } class={ this.state.activePage === 1 ? "is-active" : ""}><a>Music</a></li>
                <li onClick={() => { this.updateActivePage(2)} } class={ this.state.activePage === 2 ? "is-active" : ""}><a>Videos</a></li>
              </ul>
            </div>
            <div class="px-2" id="tab-content">
              <div id="product-details">
                <h3 class="is-size-5 title"> Product </h3>
                <p> ppp </p>
              </div>
              <div id="sales-details" class="is-hidden">
                <h3 class="is-size-5 title"> sales </h3>
                <p> sss </p>
              </div>
              <div id="marketing-details" class="is-hidden">
                <h3 class="is-size-5 title"> marketing </h3>
                <p> mmm </p>
              </div>
            </div>

            <LeadsList leadsList={ this.state.leadsData } />
          </div>

        </div>
      </>
    );
  }
}

export default SearchPage