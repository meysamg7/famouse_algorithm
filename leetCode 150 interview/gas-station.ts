function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0, totalCost = 0, tank = 0, startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        // If tank goes negative, reset startIndex and tank
        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;
        }
    }

    return totalGas >= totalCost ? startIndex : -1;

};