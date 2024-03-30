import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ userInput }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  const initial_Investment =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;

  return (
    <table id="result">
      <caption>The Results</caption>
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">investment value</th>
          <th scope="col">interest (year)</th>
          <th scope="col">Total interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initial_Investment;
          const totalInvestedCapital = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
