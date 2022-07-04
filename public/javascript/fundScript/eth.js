// -------------------------------------- Ethereum Price ticker --------------------------------------

let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('eth-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? '#eaeaea' : price > lastPrice ? '#eaeaea':
    lastPrice = price;
}