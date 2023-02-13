// url add vehicle: https://api-estacionamento-digital.herokuapp.com/usuarios/{{uuidUser}}/veiculos
// Curl
// [
//     {
//         "placa": "JNS-2726",
//         "modelo": "Tracker",
//         "favorito": true,
//         "tipoVeiculo": "CARRO"
//     }
// ];

// url list vehicle: https://api-estacionamento-digital.herokuapp.com/usuarios/{{uuidUser}}
// Response
export const vehicles = [
  {
      "uuidUsuario": "19d153bc-b13a-4312-9f79-367e82abb5d1",
      "cpfCnpj": "123.456.789-01",
      "nome": "Jessica Severino",
      "email": "jessica@test.com",
      "status": "ATIVO",
      "token": null,
      "listVeiculo": [
          {
              "uuidVeiculo": "1475a75d-5512-4abf-b96b-7ae3390510ef",
              "placa": "JNS-2704",
              "modelo": "Tracker",
              "favorito": true,
              "tipoVeiculo": "CARRO"
          },
          {
              "uuidVeiculo": "2475a75d-5512-4abf-b96b-7ae3390510ef",
              "placa": "ASD-0192",
              "modelo": "Cruze",
              "favorito": false,
              "tipoVeiculo": "CARRO"
          },
          {
              "uuidVeiculo": "3475a75d-5512-4abf-b96b-7ae3390510ef",
              "placa": "TRU-6547",
              "modelo": "Truck",
              "favorito": false,
              "tipoVeiculo": "CAMINHAO"
          },
          {
              "uuidVeiculo": "4475a75d-5512-4abf-b96b-7ae3390510ef",
              "placa": "BUS-7845",
              "modelo": "Buss",
              "favorito": false,
              "tipoVeiculo": "ONIBUS"
          },
          {
              "uuidVeiculo": "4475a75d-5512-4abf-b96b-7ae3390510ef",
              "placa": "BUS-7845",
              "modelo": "Buss",
              "favorito": false,
              "tipoVeiculo": "ONIBUS"
          },
      ]
  },
];
