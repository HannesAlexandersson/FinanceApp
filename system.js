//my own webscraper that fetch the current stockprize for the selected stock
import { chromium } from 'playwright';
import express from 'express';

const system = express.Router();

system.get('/getStockPrice:stockName', async (req, res) => {
    try {
        const stockName = req.params.stockName;
        const browser = await chromium.launch();
        const context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0',
        });
        const page = await context.newPage();
        
        await page.goto('https://www.avanza.se/start');     
        
        // simulate a click on the search button
        await page.click('button[data-e2e="menuSearchButton"]');
       
        // get the script to wait for the search input field to appear
        await page.waitForSelector('input[data-e2e="search-query"]');
    
        // fill the search input field with the user provided stockname
        await page.fill('input[data-e2e="search-query"]', stockName);
    
        // simulate a Enter keydown to start the search
        await page.press('input[data-e2e="search-query"]', 'Enter');    
    
        // make the script wait for the result to appear
        await page.waitForSelector('div.item-text.ng-star-inserted');
    
        // simulate a click on the result
        await page.click('div.item-text.ng-star-inserted');
    
        // make the script wait for the stock page to appear
        await page.waitForSelector('span[data-e2e="tbs-quote-latest-value"]');
    
        // fetch the text content of the stock value element
        const latestStockValue = await page.$eval('span[data-e2e="tbs-quote-latest-value"]', element => element.textContent.trim());
        console.log('Latest stock value:', latestStockValue);
    
        await browser.close();

        res.json({ latestStockValue }); // Send the fetched stock value back to the frontend
    } catch (error) {
        console.error('Error fetching stock price:', error);
        res.status(500).json({ error: 'Failed to fetch stock price' });
    }
});

export default system;