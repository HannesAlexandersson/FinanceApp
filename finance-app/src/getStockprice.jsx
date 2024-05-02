function get_stock_price( stockName ){
    
    const url = 'http://localhost:3000/api/system/getStockPrice';    
   
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