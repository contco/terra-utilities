import axios from 'axios';
import { constants } from '../constants';

const { LCD_URL } = constants;

export const getPoolInfo = async (pool_addr: string, lcd_url = LCD_URL) => {
    const { data } = await axios.get(lcd_url + `wasm/contracts/${pool_addr}/store`, {
      params: {
        query_msg: JSON.stringify({
          pool: {}
        })
      },
    });
  
    return data?.result;
  };
  