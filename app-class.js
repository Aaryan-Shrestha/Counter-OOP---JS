// Normal Function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection}" selector, no such elements exist!`
    );
  }
}

// Class
class Counter {
  constructor(element, value) {
    // instance variable
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    //   console.log(this); // points to Counter

    // adding event listeners
    // 1st Method:
    //   this.increaseBtn.addEventListener("click", this.increase.bind(this));
    // in here, 'this.increase' points to a button (because it's in a callback function) and using bind 'this' points to Counter

    // 2nd Method:
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // adding event listeners

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  // methods
  increase() {
    //   console.log(this);
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 0);
const secondCounter = new Counter(getElement(".second-counter"), 100);
