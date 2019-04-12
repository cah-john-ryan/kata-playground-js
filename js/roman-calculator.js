var Cardinal = Cardinal || {};
Cardinal.fuse = Cardinal.fuse || {};
Cardinal.fuse.katas = Cardinal.fuse.katas || {};
Cardinal.fuse.katas.RomanCalculator = class {
    entries = [];
    enter(entry) {
        this.entries.push(entry)
    }
    add() {
        let sum = 0;
        this.entries.forEach(entry => sum += entry );
        return sum;
    };
};
