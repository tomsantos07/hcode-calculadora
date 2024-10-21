class CalcController {

  constructor() {
    this._locale = 'pt-BR';
    this._displayCalc = document.querySelector('#display')
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this._currentDate;
    this.initialize();
    this.initButtonEvents();
  }

  initialize() {

    this.setDisplayDateTime();
    
    setInterval(()=> {

      this.setDisplayDateTime();
      
    }, 1000)
  }

  initButtonEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', e => {
        console.log(btn.className.baseVal.replace("btn-",""));       
      })
    })
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    
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