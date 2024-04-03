import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Ivestment value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((items) => {
            const totalIntrest =
              items.valueEndOfYear -
              items.annualInvestment * items.year -
              initialInvestment;
            const totalAmountInvested = items.valueEndOfYear - totalIntrest;
            return (
              <tr key={items.year}>
                <td>{items.year}</td>
                <td>{formatter.format(items.valueEndOfYear)}</td>
                <td>{formatter.format(items.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
