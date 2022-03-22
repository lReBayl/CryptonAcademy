function Block(letter, rate, used, father, code) {
 this.letter = letter;
 this.rate = rate;
 this.used = used;
 this.father = father;
 this.code = code;
 }
 
 function FindCode(block) {
 
 if(tree[block.father].code != '') {
  block.code =tree[block.fater].code + '1';
 }
 else{
 if (block.letter == tree[minIndex].letter) {
 block.code = '0';
 }
 else if (block.letter == tree[preminIndex].letter) {
 block.code = '1';}
 else {
 FindCode(tree)[block.fater]);
 block.code = tree[block.fater].code + '0';
 }
 }
 }
