// -------------------------------------- Bitcoin Price ticker --------------------------------------

let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
let stockPriceElementBTC = document.getElementById('btc-price');
let lastPriceBTC = null;

wsBTC.onmessage = (event) => {
    let stockObjectBTC = JSON.parse(event.data);
    let priceBTC = parseFloat(stockObjectBTC.p).toFixed(2);
    stockPriceElementBTC.innerText = price;
    stockPriceElementBTC.style.color = !lastPriceBTC || lastPriceBTC === priceBTC ? '#eaeaea' : priceBTC > lastPriceBTC ? '#eaeaea':
    lastPriceBTC = priceBTC;
}