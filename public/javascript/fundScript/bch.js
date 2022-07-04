// -------------------------------------- Bitcoin cash Price ticker --------------------------------------

let wsBCH = new WebSocket('wss://stream.binance.com:9443/ws/bcheur@trade');
let stockPriceElementBCH = document.getElementById('bch-price');
let lastPriceBCH = null;

wsBCH.onmessage = (event) => {
    let stockObjectBCH = JSON.parse(event.data);
    let priceBCH = parseFloat(stockObjectBCH.p).toFixed(2);
    stockPriceElementBCH.innerText = priceBCH;
    stockPriceElementBCH.style.color = !lastPriceBCH || lastPriceBCH === price ? '#eaeaea' : price > lastPriceBCH ? '#eaeaea':
    lastPriceBCH = price;
}