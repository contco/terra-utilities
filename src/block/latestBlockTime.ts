import {LCD_URL} from '../constants';

export const getLatestBlockTime = async (lcdUrl = LCD_URL) => {
    const response = await fetch( lcdUrl+ 'blocks/latest' );
    const block = await response.json();
    const blockTimeInMs = new Date(block.block.header.time).getTime();
    const blockTime = Math.round(blockTimeInMs / 1000);
    return blockTime;
};
  