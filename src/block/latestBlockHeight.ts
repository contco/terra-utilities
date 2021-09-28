import {LCD_URL} from '../constants';

export const getLatestBlockHeight = async (lcdUrl = LCD_URL) => {
    const response = await fetch( lcdUrl+ 'blocks/latest' );
    const block = await response.json();
    return block.block.header.height;
  };
  