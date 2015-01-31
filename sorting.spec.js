describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([34,3,5,1,13,21,8]) ).toEqual( [1,3,5,8,13,21,34] );
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect( mergeSort([34,3,5,1,13,21,8]) ).toEqual( [1,3,5,8,13,21,34] );
        expect( mergeSort([6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6] );
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    	expect( split([ 34,3 ])).toEqual([ [34],[3] ])
    	expect( split([ 34,3,5 ])).toEqual([ [34],[3,5] ])
  });
});