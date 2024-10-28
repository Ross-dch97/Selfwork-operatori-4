let numeroGatti = 44;
let gattiInFila = 6;

let numeroFile = Math.floor(numeroGatti / gattiInFila);
let gattiFuori = numeroGatti % gattiInFila;
let gattiMancanti = gattiInFila - gattiFuori;

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}.`);