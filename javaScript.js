function calculodesalario() {
    const nombre= parseInt(document.getElementById('nombre').value);
    const cargo = document.getElementById('cargo').value;
    const hextras = parseInt(document.getElementById('hextras').value);

    
let precio =0;
    switch (cargo) {
        case 'sup':
            precio = 4500;
            break;
        case 'sec':
            precio = 3250;
            break;
        case 'men':
            precio = 2800;
            break;
        default:
            alert("Seleccione un Cargo Valido.");
            return;
    }
    salBase= precio
    bonif=250
    thex=hextras*15.75
    SaLiq=salBase+bonif+thex

    

    document.getElementById('resultado').innerHTML = `nombre:${nombre.toFixed(2)}<br>
                                                        Horas Extras: Q${thex.toFixed(2)}<br>
                                                        Salario Liquido: Q${SaLiq.toFixed(2)}`;
}