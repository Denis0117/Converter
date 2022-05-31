export default class View {
    constructor() {
      this.inputFrom = document.getElementById("inputFrom");
      this.inputIn = document.getElementById("inputIn");
      this.leftRadio = document.querySelectorAll("input[name='first-radio']");
      this.rightRadio = document.querySelectorAll("input[name='second-radio']");
      this.rateFrom = document.getElementById("rateFrom");
      this.rateIn = document.getElementById("rateIn");
    }
  }
  