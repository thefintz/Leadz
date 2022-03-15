import React from 'react';

const LeadsList = ({leadsList=[]}) => {
  const cardStyle = {
    "background": "white",
    "border": "2px solid gray",
    "margin": "10px",
    "padding": "1rem"
  }
  return (
    <>
    { leadsList.map((lead,index) => {
      if (lead) {
        return (
          <div class="columns">
            <div class="column"/>

            <div class="column is-half has-text-left">
              <div key={lead.empresa.cnpjBasico} style={cardStyle} >
                <div class="columns">

                  <div class="column">
                    <p> <b> Nome Empresarial:</b> {lead.empresa.nomeEmpresarial}</p>
                    <p> <b> Porte:</b> {lead.empresa.porte.descricao}</p>
                    <p> <b> Localização: </b> {lead.endereco.municipio.descricao}, {lead.endereco.uf} </p>
                    <p> <b> Setor: </b> {lead.cnaePrincipal.descricao}</p>
                    <p> <b> Email:</b> {lead.contato.email}</p>
                    <p> <b> Telefone:</b> {lead.contato.telefone1}</p>
                    <p> <b> Natureza Juridica:</b> {lead.empresa.naturezaJuridica.descricao}</p>
                    <p> <b> Capital Social: </b> R${lead.empresa.capitalSocial}</p>
                    {/* <p>
                      <b> Site: </b> 
                      <a href={lead.contato.email ? lead.contato.email.split("@")[1] : ""}> www.{lead.contato.email.split("@")[1].toLowerCase()} </a>
                    </p> */}
                  </div>

                  </div>
              </div>
            </div>

            <div class="column"/>
          </div>
        )	
      }
      return null
    }) }
    </>
  );
}

export default LeadsList