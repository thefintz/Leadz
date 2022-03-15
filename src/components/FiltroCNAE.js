import React from 'react';

const FiltroCNAE = ({input:keyword, onChange:updateCNAE}) => {
  return (
    <>
      <div className="select is-right" style={{maxWidth: "30rem"}}>
        <select
          /* 
          // here we create a basic select input
          // we set the value to the selected value 
          // and update the setC() state every time onChange is called
          */
          onChange={(e) => {
            updateCNAE(e.target.value);
          }}
          className="custom-select"
          aria-label="Filtrar empresas por setor"
        >
          <option value=""> Todos os setores </option>
          <option value="01"> AGRICULTURA, PECUÁRIA E SERVIÇOS RELACIONADOS </option>
          <option value="02"> PRODUÇÃO FLORESTAL </option>
          <option value="03"> PESCA E AQÜICULTURA </option>
          <option value="05"> EXTRAÇÃO DE CARVÃO MINERAL </option>
          <option value="06"> EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL </option>
          <option value="07"> EXTRAÇÃO DE MINERAIS METÁLICOS </option>
          <option value="08"> EXTRAÇÃO DE MINERAIS NÃO-METÁLICOS </option>
          <option value="09"> ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS </option>
          <option value="10"> FABRICAÇÃO DE PRODUTOS ALIMENTÍCIOS </option>
          <option value="11"> FABRICAÇÃO DE BEBIDAS </option>
          <option value="12"> FABRICAÇÃO DE PRODUTOS DO FUMO </option>
          <option value="13"> FABRICAÇÃO DE PRODUTOS TÊXTEIS </option>
          <option value="14"> CONFECÇÃO DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS </option>
          <option value="15"> PREPARAÇÃO DE COUROS E FABRICAÇÃO DE ARTEFATOS DE COURO, ARTIGOS PARA VIAGEM E CALÇADOS </option>
          <option value="16"> FABRICAÇÃO DE PRODUTOS DE MADEIRA </option>
          <option value="17"> FABRICAÇÃO DE CELULOSE, PAPEL E PRODUTOS DE PAPEL </option>
          <option value="18"> IMPRESSÃO E REPRODUÇÃO DE GRAVAÇÕES </option>
          <option value="19"> FABRICAÇÃO DE COQUE, DE PRODUTOS DERIVADOS DO PETRÓLEO E DE BIOCOMBUSTÍVEIS </option>
          <option value="20"> FABRICAÇÃO DE PRODUTOS QUÍMICOS </option>
          <option value="21"> FABRICAÇÃO DE PRODUTOS FARMOQUÍMICOS E FARMACÊUTICOS </option>
          <option value="22"> FABRICAÇÃO DE PRODUTOS DE BORRACHA E DE MATERIAL PLÁSTICO </option>
          <option value="23"> FABRICAÇÃO DE PRODUTOS DE MINERAIS NÃO-METÁLICOS </option>
          <option value="24"> METALURGIA </option>
          <option value="25"> FABRICAÇÃO DE PRODUTOS DE METAL, EXCETO MÁQUINAS  E EQUIPAMENTOS </option>
          <option value="26"> FABRICAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA, PRODUTOS ELETRÔNICOS E ÓPTICOS </option>
          <option value="27"> FABRICAÇÃO DE MÁQUINAS, APARELHOS E MATERIAIS ELÉTRICOS </option>
          <option value="28"> FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS </option>
          <option value="29"> FABRICAÇÃO DE VEÍCULOS AUTOMOTORES, REBOQUES E CARROCERIAS </option>
          <option value="30"> FABRICAÇÃO DE OUTROS EQUIPAMENTOS DE TRANSPORTE, EXCETO VEÍCULOS AUTOMOTORES </option>
          <option value="31"> FABRICAÇÃO DE MÓVEIS </option>
          <option value="32"> FABRICAÇÃO DE PRODUTOS DIVERSOS </option>
          <option value="33"> MANUTENÇÃO, REPARAÇÃO E INSTALAÇÃO DE MÁQUINAS E EQUIPAMENTOS </option>
          <option value="35"> ELETRICIDADE, GÁS E OUTRAS UTILIDADES </option>
          <option value="36"> CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA </option>
          <option value="37"> ESGOTO E ATIVIDADES RELACIONADAS </option>
          <option value="38"> COLETA, TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS; RECUPERAÇÃO DE MATERIAIS </option>
          <option value="39"> DESCONTAMINAÇÃO E OUTROS SERVIÇOS DE GESTÃO DE RESÍDUOS </option>
          <option value="41"> CONSTRUÇÃO DE EDIFÍCIOS </option>
          <option value="42"> OBRAS DE INFRA-ESTRUTURA </option>
          <option value="43"> SERVIÇOS ESPECIALIZADOS PARA CONSTRUÇÃO </option>
          <option value="45"> COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS </option>
          <option value="46"> COMÉRCIO POR ATACADO, EXCETO VEÍCULOS AUTOMOTORES E MOTOCICLETAS </option>
          <option value="47"> COMÉRCIO VAREJISTA </option>
          <option value="49"> TRANSPORTE TERRESTRE </option>
          <option value="50"> TRANSPORTE AQUAVIÁRIO </option>
          <option value="51"> TRANSPORTE AÉREO </option>
          <option value="52"> ARMAZENAMENTO E ATIVIDADES AUXILIARES DOS TRANSPORTES </option>
          <option value="53"> CORREIO E OUTRAS ATIVIDADES DE ENTREGA </option>
          <option value="55"> ALOJAMENTO </option>
          <option value="56"> ALIMENTAÇÃO </option>
          <option value="58"> EDIÇÃO E EDIÇÃO INTEGRADA À IMPRESSÃO </option>
          <option value="59"> ATIVIDADES CINEMATOGRÁFICAS, PRODUÇÃO DE VÍDEOS E DE PROGRAMAS DE TELEVISÃO; GRAVAÇÃO DE SOM E EDIÇÃO DE MÚSICA </option>
          <option value="60"> ATIVIDADES DE RÁDIO E DE TELEVISÃO </option>
          <option value="61"> TELECOMUNICAÇÕES </option>
          <option value="62"> ATIVIDADES DOS SERVIÇOS DE TECNOLOGIA DA INFORMAÇÃO </option>
          <option value="63"> ATIVIDADES DE PRESTAÇÃO DE SERVIÇOS DE INFORMAÇÃO </option>
          <option value="64"> ATIVIDADES DE SERVIÇOS FINANCEIROS </option>
          <option value="65"> SEGUROS, RESSEGUROS, PREVIDÊNCIA COMPLEMENTAR E PLANOS DE SAÚDE </option>
          <option value="66"> ATIVIDADES AUXILIARES DOS SERVIÇOS FINANCEIROS, SEGUROS, PREVIDÊNCIA COMPLEMENTAR E PLANOS DE SAÚDE </option>
          <option value="68"> ATIVIDADES IMOBILIÁRIAS </option>
          <option value="69"> ATIVIDADES JURÍDICAS, DE CONTABILIDADE E DE AUDITORIA </option>
          <option value="70"> ATIVIDADES DE SEDES DE EMPRESAS E DE CONSULTORIA EM GESTÃO EMPRESARIAL </option>
          <option value="71"> SERVIÇOS DE ARQUITETURA E ENGENHARIA; TESTES E ANÁLISES TÉCNICAS </option>
          <option value="72"> PESQUISA E DESENVOLVIMENTO CIENTÍFICO </option>
          <option value="73"> PUBLICIDADE E PESQUISA DE MERCADO </option>
          <option value="74"> OUTRAS ATIVIDADES PROFISSIONAIS, CIENTÍFICAS E TÉCNICAS </option>
          <option value="75"> ATIVIDADES VETERINÁRIAS </option>
          <option value="77"> ALUGUÉIS NÃO-IMOBILIÁRIOS E GESTÃO DE ATIVOS INTANGÍVEIS NÃO-FINANCEIROS </option>
          <option value="78"> SELEÇÃO, AGENCIAMENTO E LOCAÇÃO DE MÃO-DE-OBRA </option>
          <option value="79"> AGÊNCIAS DE VIAGENS, OPERADORES TURÍSTICOS E SERVIÇOS DE RESERVAS </option>
          <option value="80"> ATIVIDADES DE VIGILÂNCIA, SEGURANÇA E INVESTIGAÇÃO </option>
          <option value="81"> SERVIÇOS PARA EDIFÍCIOS E ATIVIDADES PAISAGÍSTICAS </option>
          <option value="82"> SERVIÇOS DE ESCRITÓRIO, DE APOIO ADMINISTRATIVO E OUTROS SERVIÇOS PRESTADOS PRINCIPALMENTE ÀS EMPRESAS </option>
          <option value="84"> ADMINISTRAÇÃO PÚBLICA, DEFESA E SEGURIDADE SOCIAL </option>
          <option value="85"> EDUCAÇÃO </option>
          <option value="86"> ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA </option>
          <option value="87"> ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA INTEGRADAS COM ASSISTÊNCIA SOCIAL, PRESTADAS EM RESIDÊNCIAS COLETIVAS E PARTICULARES </option>
          <option value="88"> SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO </option>
          <option value="90"> ATIVIDADES ARTÍSTICAS, CRIATIVAS E DE ESPETÁCULOS </option>
          <option value="91"> ATIVIDADES LIGADAS AO PATRIMÔNIO CULTURAL E AMBIENTAL </option>
          <option value="92"> ATIVIDADES DE EXPLORAÇÃO DE JOGOS DE AZAR E APOSTAS </option>
          <option value="93"> ATIVIDADES ESPORTIVAS E DE RECREAÇÃO E LAZER </option>
          <option value="94"> ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS </option>
          <option value="95"> REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS DE INFORMÁTICA E COMUNICAÇÃO E DE OBJETOS PESSOAIS E DOMÉSTICOS </option>
          <option value="96"> OUTRAS ATIVIDADES DE SERVIÇOS PESSOAIS </option>
          <option value="97"> SERVIÇOS DOMÉSTICOS </option>
          <option value="99"> ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS </option>
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
}

export default FiltroCNAE
