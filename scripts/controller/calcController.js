class CalcController {

  constructor() {
    this._locale = 'pt-BR';
    this._displayCalc = document.querySelector('#display')
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this._currentDate;
    this.initialize();
  }

  initialize() {
    
    setInterval(()=> {

      this.displayDate = this.currentDate.toLocaleDateString(this._locale);
      this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
      
    }, 1000)
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    return this._timeEl.innerHTML = value;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    return this._dateEl.innerHTML = value;
  }

  get displayCalc() {    
    return this._displayCalc;
  }

  set displayCalc(value) {   
    this._displayCalc = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    this._currentDate = valor;
  }
}