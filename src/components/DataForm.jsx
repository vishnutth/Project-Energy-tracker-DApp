import React, { useState } from 'react';

function DataForm() {
  const [electricityConsumption, setElectricityConsumption] = useState('');
  const [miningRewards, setMiningRewards] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and data calculations here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Electricity Consumption (units):</label>
        <input
          type="number"
          value={electricityConsumption}
          onChange={(e) => setElectricityConsumption(e.target.value)}
        />
      </div>
      <div>
        <label>Mining Rewards (coins):</label>
        <input
          type="number"
          value={miningRewards}
          onChange={(e) => setMiningRewards(e.target.value)}
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default DataForm;
