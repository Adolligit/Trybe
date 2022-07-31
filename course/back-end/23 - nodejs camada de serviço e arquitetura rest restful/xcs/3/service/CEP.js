const CEP = require('../model/CEP');
const Bairro = require('../model/Bairro');

async function findByCep(cep) {
  const [address] = await CEP.findByCep(cep);

  if (!address.length) {
    const { data } = await CEP.searchAPI(cep);

    if (data.erro) {
      return { 
        error: {
            code: 'notFound',
            message: 'CEP não encontrado',
        },
      };
    }
    
    const { cep: zipCode, logradouro, bairro, localidade, uf } = data;
    const infos = { cep: zipCode, logradouro, bairro, localidade, uf };


    return infos;
  }


  return address[0];
}

async function create(data) {
  const { cep } = data;
  const validCEP = new RegExp(/^\d{5}-?\d{3}$/);
  
  if (!validCEP.test(cep)) {
    return {
      "error": {
        "code": "invalid_cep",
        "message": "Por favor, informe um CEP válido, no formato 00000-000",
      },
    };
  }
  
  const cepNum = cep.split('-').join('');
  data.cep = cepNum;
  const [existingCEP] = await CEP.findByCep(cepNum);

  if (existingCEP.length) {
    return {
      "error": {
        "code": "alreadyExists",
        "message": "CEP já existente",
      },
    };
  }
  
  const { logradouro, bairro, localidade, uf } = data;
  const tableBairros = { bairro, localidade, uf };
  
  const [{ insertId }] = await Bairro.create(tableBairros);
  const tableCeps = { cep: cepNum, logradouro, id: insertId };

  await CEP.create(tableCeps);
  return {};
}

module.exports = {
  findByCep,
  create,
}