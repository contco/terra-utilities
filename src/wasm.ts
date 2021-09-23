import axios from "axios";
import {constants} from './constants';

const { LCD_URL } = constants;
 
export const wasmStoreRequest = async (contract_addr: string, query_msg: any, lcdUrl = LCD_URL) => {
    try {
      const {data} = await axios.get(lcdUrl + `wasm/contracts/${contract_addr}/store`, {
        params: {
          query_msg: query_msg
        },
      });
      return data?.result;
    }
    catch(err) {
      return null;
    }
}