import { CoffeeMachine } from '../src/CoffeeMachine';

describe('Coffee Machine', () => {
  it('should make a chocolate', () => {
    const drinkMaker = jest.fn();
    const coffeeMachine = new CoffeeMachine(drinkMaker);

    coffeeMachine.selectChocolate();
    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledTimes(1);
    expect(drinkMaker).toHaveBeenCalledWith('H::');
  });
});
