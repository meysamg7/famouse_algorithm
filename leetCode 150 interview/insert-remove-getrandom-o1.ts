class RandomizedSet {
    private mapValueToIndex: Map<number, number>
    private values: number[];
    constructor() {
        this.mapValueToIndex = new Map();
        this.values = []
    }

    insert(val: number): boolean {
        if(!this.mapValueToIndex.has(val)){
            this.values.push(val);
            this.mapValueToIndex.set(val, this.values.length-1);
            return true

        }
       return false;
    }

    remove(val: number): boolean {
        if(this.mapValueToIndex.has(val)){
            const index = this.mapValueToIndex.get(val);
            const lastValue = this.values[this.values.length-1]

            this.values[index] = lastValue;
            this.mapValueToIndex.set(lastValue, index);

            this.values.pop();
            this.mapValueToIndex.delete(val);
            
            if(!this.mapValueToIndex.has(val)){
                return true;
            }
            return false;
        }
        return false;
    }

    getRandom(): number {
        const randIndex = Math.floor(Math.random() * this.values.length)
        return this.values[randIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */