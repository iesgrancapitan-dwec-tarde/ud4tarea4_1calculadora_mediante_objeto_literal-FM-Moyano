// calculadora 
class calculadora {

    constructor() {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('id', 'resultado');
        this.input.setAttribute('value', '0');
        this.input.setAttribute('style','width:100%; text-align:right');
        this.botones = [
            {id: 'btn0', valor: '0'},
            {id: 'btn1', valor: '1'},
            {id: 'btn2', valor: '2'},
            {id: 'btn3', valor: '3'},
            {id: 'btn4', valor: '4'},
            {id: 'btn5', valor: '5'},
            {id: 'btn6', valor: '6'},
            {id: 'btn7', valor: '7'},
            {id: 'btn8', valor: '8'},
            {id: 'btn9', valor: '9'},
            {id: 'btnSuma', valor: '+'},
            {id: 'btnResta', valor: '-'},
            {id: 'btnMultiplicacion', valor: '*'},
            {id: 'btnDivision', valor: '/'},
            {id: 'btnIgual', valor: '='},
            {id: 'btnBorrar', valor: 'C'},
            {id: 'btnComa', valor: ','},
            {id: 'btnRetroceso', valor: '<-'},
            {id: 'btnPorcentaje', valor: '%'},
            {id: 'btnRaiz', valor: '√'}
        ];
        this.calculadora = document.createElement('div');
        this.calculadora.setAttribute('id','calculadora');
        this.calculadora.setAttribute('style','width:240px');
        this.calculadora.appendChild(this.input);
        this.calculadora.appendChild(document.createElement('br'));
        this.botones.forEach(boton => {
            const btn = document.createElement('button');
            btn.setAttribute('id', boton.id);
            btn.setAttribute('value', boton.valor);
            btn.setAttribute('style','width:25%; height:25px');
            btn.textContent = boton.valor;
            this.calculadora.appendChild(btn);
        });
        document.body.appendChild(this.calculadora);
        this.eventosBotones();
    }

    // eventos de los botones metidos en un array
    eventosBotones() {
        this.botones.forEach(boton => {
            //si pulsamos la tecla  retroceso del teclado borra el ultimo numero
            window.addEventListener('keydown', (e) => {
                if (e.keyCode === 8) {
                    // borra solo el ultimo numero
                    // si solo hay un numero borra el 0
                    if (this.input.value.length == 1) {
                        this.input.value = '0';
                    } else
                    {
                    // si hay mas de un numero borra el ultimo
                    // if (this.input.value.length > 1) {
                        let valor = this.input.value.substring(0, this.input.value.length - 1);
                        this.input.value = valor;
                    }

                    
                }
            });


            document.getElementById(boton.id).addEventListener('click', () => {
            // si el valor del boton es igual a C se borra el input
                if (boton.valor === 'C') {
                    this.input.value = '0';
                } else
                //si el valor es numero se añade al input y se le añade el punto de los miles si es necesario
                if (boton.valor >= 0 && boton.valor <= 9) {
                    // comprobar si introducioendo el siguiente numero necesita el punto de los miles
                    if (this.input.value === '0') {
                        this.input.value = boton.valor;
                    } else {
                       //si la longitud es mayor que 3 se pone el punto en su lugar
                        if (this.input.value.length > 2) {
                            // añadimos el nuevo numero y el punto
                            this.input.value += boton.valor;
                            // quitamos todos los puntos que haya
                            this.input.value = this.input.value.replace(/\./g, '');
                            //añadimos los puntos necesarios segun la longitud
                            this.input.value = this.input.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');                         
                        }else{
                            this.input.value += boton.valor;
                        }
                    }
                }
                // solo podemos añadir una coma decimal
                if (boton.valor === ',') {
                    if (this.input.value.indexOf(',') === -1) {
                        this.input.value += boton.valor;
                    }
                }
            });
        });

    }


}


const calculadora1 = new calculadora();
