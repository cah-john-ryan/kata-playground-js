describe('Cardinal.fuse.katas.Fibonacci', () => {

  // 10 -> 55
  // 20 -> 6765
  // 30 -> 832040
  // 40 -> 102334155
  // 50 -> 12586269025
  it('the Fibonacci exists', () => {
    expect(Cardinal.fuse.katas.Fibonacci).toBeDefined();
  });

  describe('initialized', () => {
    let subject;
    beforeEach(() => {
      subject = new Cardinal.fuse.katas.Fibonacci();
    });

    it('0 generations results in 0', () => {
      expect(subject.compute(0)).toEqual(0);
    });

    xit('1 generations results in 1', () => {
      expect(subject.compute(1)).toEqual(1);
    });

    xit('10 generations results in 55', () => {
      expect(subject.compute(10)).toEqual(55);
    });
  });

});
