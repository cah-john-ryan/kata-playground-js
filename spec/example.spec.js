describe('Cardinal.fuse.katas.Example', function () {

  it('the Example exists', function () {
    expect(Cardinal.fuse.katas.Example).toBeDefined();
  });

  describe('initialized', function () {
    let subject;
    beforeEach(function () {
      subject = new Cardinal.fuse.katas.Example();
    });

    it('can add 1 + 1', function () {
      subject.enter(1);
      subject.enter(1);
      expect(subject.add()).toEqual(2);
    });
  });

});
