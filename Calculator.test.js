const newCalculator= require('./Calculator.js')

  describe('testing calculator', () => {
    it('will add two numbers', () => {
      expect(newCalculator.add(1,2)).toEqual(3);
    });
    it('will add two numbers', () => {
      expect(newCalculator.add(4.5,2.7)).toEqual(7.2);
    });
    it('will add two numbers', () => {
      expect(newCalculator.add(100000,0.1)).toEqual(100000.1);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(10,5)).toEqual(5);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(3,8)).toEqual(-5);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(0.55,0.78)).toEqual(-0.23);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(4,2)).toEqual(2);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(5,10)).toEqual(0.5);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(33,3)).toEqual(11);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(3,2)).toEqual(6);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(5.2,2.5)).toEqual(13);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(0.5, 0.005)).toEqual(0.0025);
    });
  });