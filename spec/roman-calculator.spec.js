describe('Cardinal.fuse.katas.RomanCalculator', () => {

  it('the Example exists', () => {
    expect(Cardinal.fuse.katas.RomanCalculator).toBeDefined();
  });

  describe('initialized', () => {
    let subject;
    beforeEach( () => {
      subject = new Cardinal.fuse.katas.RomanCalculator();
    });

    it('can add 1 + 1', () => {
      subject.enter(1);
      subject.enter(1);
      expect(subject.add()).toEqual(2);
    });
  });

});
