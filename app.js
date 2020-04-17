const cards = [
  {
    front: 'Enter question first',
    back: 'X',
    flipped: false,
  },
  {
    front: 'Enter answer second',
    back: 'X',
    flipped: false,

  },
  {
    front: 'Click "Add New Card" to create a new card',
    back: 'X',
    flipped: false,
  },
  {
    front: 'Press x to delete card',
    back: 'X',
    flipped: false,
  },
  {
    front: 'ENJOY, Study hard!',
    back: 'X',
    flipped: false,
  },
]; 

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '', 
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      if(!this.newFront || !this.newBack){
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});