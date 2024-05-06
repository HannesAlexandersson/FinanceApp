function get_stock_price( stockName ){
    //https://hannes-restapi-ff3b89ded8f9.herokuapp.com/api/system/getStockPrice
    //https://restapi-two-pi.vercel.app/api/system/getStockPrice
    //http://localhost:3000/api/system/getStockPrice
    //https://finance-app-five-neon.vercel.app/api/system/getStockPrice
    //https://restapi-9k9x.onrender.com/api/system/getStockPrice/
    const url = 'https://restapi-9k9x.onrender.com/api/system/getStockPrice/';    
   
    return fetch(url, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',     
           
        },       
        body: JSON.stringify({ stockName })
    })
    .then(response => {
        if (response.ok) {
            console.log('Data received successfully', response);            
            return response.json(); 
        } else {
            console.error('Failed to fetch data');
            throw new Error('Failed to fetch data'); 
        }
    })    
    .catch(error => {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught in the calling function
    });

    
}
export default get_stock_price