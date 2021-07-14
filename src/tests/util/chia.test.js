const melati = require('../../util/melati');

describe('melati', () => {
  it('converts number mojo to melati', () => {
    const result = melati.mojo_to_melati(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to melati', () => {
    const result = melati.mojo_to_melati('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to melati string', () => {
    const result = melati.mojo_to_melati_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to melati string', () => {
    const result = melati.mojo_to_melati_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number melati to mojo', () => {
    const result = melati.melati_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string melati to mojo', () => {
    const result = melati.melati_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = melati.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = melati.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = melati.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = melati.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = melati.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = melati.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
