import { contains, toString } from './string';

describe('string util', () => {
	describe('toString', (): void => {
		it('should turn numbers into strings', (): void => {
			expect(toString(5)).to.equal('5');
			expect(toString(2.5)).to.equal('2.5');
		});

		it('should turn booleans into strings', (): void => {
			expect(toString(false)).to.equal('false');
			expect(toString(true)).to.equal('true');
		});

		it('should turn undefined and null into strings', (): void => {
			expect(toString(undefined)).to.equal('undefined');
			expect(toString(null)).to.equal('null');
		});
	});

	describe('contains', (): void => {
		it('should return true if the substring is contained within the string', (): void => {
			expect(contains('my string', 'my')).to.be.true;
			expect(contains('123', '1')).to.be.true;
			expect(contains('', null)).to.be.true;
			expect(contains('my string', '')).to.be.true;
		});

		it('should return false if the substring is not contained within the string', (): void => {
			expect(contains('my string', 'my val')).to.be.false;
			expect(contains('123', '4')).to.be.false;
			expect(contains('my string', 'my string 1')).to.be.false;
		});
	});
});