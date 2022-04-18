export class CoffeeMachine {
  constructor(private drinkMaker: (instruction: string) => void) {}
  selectChocolate() {}
  selectCoffee() {}
  selectTea() {}
  addSugar() {}
  makeDrink() {}
}
