import axios from "axios";
import {constants} from './constants';

const { LCD_URL } = constants;
 
export const wasmStoreRequest = async (contractAddr: string, queryMsg: any, lcdUrl = LCD_URL) => {
    try {
      const {data} = await axios.get(lcdUrl + `wasm/contracts/${contractAddr}/store`, {
        params: {
          query_msg: queryMsg
        },
      });
      return data?.result;
    }
    catch(err) {
      return null;
    }
}