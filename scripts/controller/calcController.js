class CalcController {

  constructor() {

    this._operation = [];
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

  addEventListenerAll(element, events, fn) {

    events.split(' ').forEach(event => {

      element.addEventListener(event, fn, false);

    });
    
  }

  clearAll() {

  }

  clearEntry() {

  }

  setError() {

    this.displayCalc = "Error";

  }

  execBtn(value) {

    switch (value) {

      case 'ac':
        this.clearAll();
        break;

      case 'ce':
        this.clearEntry();
        break;

      case 'soma':
        break;

      case 'subtracao':
        break;

      case 'divisao':
        break;

      case 'multiplicacao':
        break;

      case 'porcento':
        break;

      case 'igual':
        break;

      default:
        this.setError();
        break;
        
    }
  }

  initButtonEvents() {

    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

    buttons.forEach((btn, index) => {

      this.addEventListenerAll(btn, "click drag", e => {

        let textBtn = btn.className.baseVal.replace("btn-", ""); 

        console.log(textBtn);
        
        
        this.execBtn();

      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

        btn.style.cursor = "pointer";

      })
    });
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
    return this._displayCalc.innerHTML;
  }

  set displayCalc(value) {   
    this._displayCalc.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    this._currentDate = valor;
  }
}