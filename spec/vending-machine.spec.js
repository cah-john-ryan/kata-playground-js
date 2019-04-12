describe('Cardinal.fuse.katas.VendingMachine', () => {

  it('the VendingMachine exists', () => {
    expect(Cardinal.fuse.katas.VendingMachine).toBeDefined();
  });

  describe('initialized', () => {
    let subject;
    beforeEach(function () {
      subject = new Cardinal.fuse.katas.VendingMachine();
    });

    it('shows "INSERT COINS" on the display', () => {
      expect(subject.getDisplay()).toEqual('INSERT COINS')
    })

    describe('when a NICKEL is inserted', () => {
      beforeEach(function () {
        subject.insertCoin('NICKEL');
      });
  
      it('shows "$0.05" on the display', () => {
        expect(subject.getDisplay()).toEqual('$0.05')
      })
    });

  });

});
