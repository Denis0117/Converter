export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.render();
    this.getAPI();
  }

  render() {
    this.view.inputFrom.value = 1;
    this.view.leftRadio.forEach((el) => {
      el.addEventListener("click", (event) => {
        this.model.leftValue = event.target.value;
        this.getAPI();
      });
    });

    this.view.rightRadio.forEach((el) => {
      el.addEventListener("click", (event) => {
        this.model.rightValue = event.target.value;
        this.getAPI();
      });
    });

    this.view.inputFrom.addEventListener("keyup", () => {
      this.view.inputFrom.value = this.view.inputFrom.value;
      this.view.inputIn.value = this.data * this.view.inputFrom.value;
    });

    this.view.inputIn.addEventListener("keyup", () => {
      this.view.inputIn.value = this.view.inputIn.value;
      this.view.inputFrom.value = this.view.inputIn.value * (1 / this.data);
    });
  }
  getAPI() {
    fetch(
      `https://api.exchangerate.host/convert?from=${this.model.leftValue}&to=${this.model.rightValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.data = data.result;
        this.view.rateFrom.innerText = `1 ${this.model.leftValue} = ${this.data} ${this.model.rightValue} `;
        this.view.rateIn.innerText = `1 ${this.model.rightValue} = ${
          Math.floor((1 / this.data) * 10 ** 6) / 10 ** 6
        } ${this.model.leftValue}`;
        this.view.inputIn.value = this.data * this.view.inputFrom.value;
      });
  }
}
