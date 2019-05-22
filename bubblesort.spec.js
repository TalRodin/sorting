describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('checking if it works', function(){
      expect(bubbleSort([2,7,4])).toEqual([2,4,7])
    })
  it('checking if it works', function(){
    expect(bubbleSort(['a','m','h','r'])).toEqual(['a','h','m','r'])
  })
});
// const tootsiepop = {};
// tootsiepop.lick = function () {
//   return 'licked';
// };
// tootsiepop.getToCenter = function () {
//   this.lick();
//   this.lick();
//   this.lick();
//   return 'got to center';
// };

// beforeAll(function () {
//     spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });
//   it('getting to the center of tootsiepop involves exactly three licks', function () {
//     tootsiepop.getToCenter();
//     expect(tootsiepop.lick.calls.count()).toEqual(3);
//   });