import { gql } from "@apollo/client";

export const GET_ALL_BOLETOS = gql` 
   query 
      allBoletos($password: String!) {
         allBoletos( pass: $password ) {
            _id
            apellidos
            nombres
            telefono
            numBoleto
            vendedor
         }
      }
`;