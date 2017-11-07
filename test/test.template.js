const xxdescribe = () => {};
xxdescribe('', () => {
  xxdescribe('', () => {
    const testFunc = FILL_ME_IN_FUNC;
    const params1 = FILL_ME_IN_ARR;
    const output1 = FILL_ME_IN_ARR;
    const params2 = FILL_ME_IN_ARR;
    const output2 = FILL_ME_IN_ARR;
    const test = {
      e1: testFunc(...params1),
      a1: output1,
      e2: testFunc(...params2),
      a2: output2
    };

    it('it should be a function', () => {
      expect(testFunc).to.be.a('function');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should have correct length', () => {
      expect(test.a1.length).to.equal(3);
      expect(test.a2.length).to.equal(2);
    });
    it('it should remove falsey values', () => {
      expect(test.a1).to.deep.equal(test.e1);
      expect(test.a2).to.deep.equal(test.e2);
    });

  });
});

xxdescribe('_', () => {
  xxdescribe('_', () => {
    it('should import _ successfully', () => {
      expect(_).to.not.equal(undefined);
    });
    it('_ should be an object', () => {
      expect(_).to.be.a('object');
    });
  });
});
