export type ArithmeticTasks = {
  num1: number;
  num2: number;
  result: number;
};

export function generate(
  amount: number,
  maxNumber: number = 99
): ArithmeticTasks[] {
  const result = new Array<ArithmeticTasks>();

  for (let i = 0; i < amount; i++) {
    const num1 = Math.round(Math.random() * maxNumber);
    const num2 = Math.round(Math.random() * maxNumber);
    result.push({ num1, num2, result: num1 * num2 });
  }

  return result;
}
