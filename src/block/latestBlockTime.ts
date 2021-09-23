import {constants} from '../constants';

const {LCD_URL} = constants;

export const getLatestBlockTime = async (lcdUrl = LCD_URL) => {
    const response = await fetch( lcdUrl+ 'blocks/latest' );
    const block = await response.json();
    const dateTime = new Date(block.block.header.time);
    return dateTime.getTime();
};
  