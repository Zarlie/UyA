var input = "";
var output = "";

var val = {"values": [{name: "eur", rate: {usd: 1.10, bgp: 0.89}}, {name: "usd", rate: {eur: 0.90, bgp: 0.81}}, {name: "bgp", rate: {eur: 1.12, usd: 1.24}}]};
var sym = {"symbols": [{type: {eur: "€", usd: "$", bgp: "£"}}]};

function selector_in(from) {
    input = from;
}

function selector_out(to) {
    output = to;
}

function conversor() {
    var number = document.getElementById("text_box").value;
    for(var i = 0; i < val.values.length; ++i) {
        if(val.values[i].name == input) {
            number = val.values[i].rate[output] * number;
            console.log(number.toFixed(2));
            document.getElementById("text_box").value = number.toFixed(2) + " " + sym.symbols[0].type[output];
        }
    }
    
}