import React from "react";

const UserInput = ({ onChangeInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            name="initial-investment"
            required
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            onChange={onChangeInput}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            id="duration"
            type="number"
            required
            min="1"
            onChange={onChangeInput}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
