import axios from "axios"
import { addressInfo } from "../types"

export const getAddressInfo = async (
   zipcode: string
): Promise<addressInfo | null> => {
   try {

      const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
      console.log(result, "aqui!!")

      return {
         street: result.data.logradouro,
         neighborhood: result.data.bairro,
         city: result.data.localidade,
         state: result.data.uf
      }

   } catch (error:any) {
      console.log(error.response ? error.response.data : error.message);
      return null
   }
}

getAddressInfo("81020-050")
   .then(console.log)
   .catch(console.log)
