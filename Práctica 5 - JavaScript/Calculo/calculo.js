
let paco = {"DNI": "45878775R", "año": 1995, "ingreso": 2016, "productividad": 0.5, "antiguedad": 0.1, "sueldo": 2000};
calculo(paco);

function calculo (paco) {
    let edad = new Date().getFullYear() - paco['año'];
    let antiguedad = (new Date().getFullYear() - paco['ingreso']) / 3 * paco['antiguedad'];
    let sueldo = paco['sueldo'] * (1 + plusAntiguedad + paco['productividad']);
    
    document.write("Este usuario tiene ");
    document.write(edad);
    document.write(" años ");
    document.write(" y cobra ");
    document.write(sueldo);
    document.write(" €");
}
