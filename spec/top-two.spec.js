describe('Cardinal.fuse.katas.TopTwo', () => {

    it('exists', () => {
        expect(Cardinal.fuse.katas.TopTwo).toBeDefined();
    });

    describe('initialized', () => {
        let subject;
        beforeEach(() => {
            subject = new Cardinal.fuse.katas.TopTwo();
        });

        it('can find the top two numbers from a simple set of numbers', () => {
            expect(subject.getTopTwoAscending([3, 2, 1, 4])).toEqual([3, 4]);
        });

        xit('can find the top two most recent dates', () => {
            expect(subject.getMostRecentDates(['07/12/1987','02/23/2002','09/22/1953','12/22/2013','01/01/1991','11/21/1997'])).toEqual(['02/23/2002','12/22/2013']);
        });
    });

});
