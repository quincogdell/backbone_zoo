var ZooView = Backbone.View.extend({
  el: "#zoo",

  events: {
    "click button": "makeAnimal"
  },
  initialize: function(data){
    this.data = data;
  },

  makeAnimal: function(e){
    console.log("Making Animal");
    var animalView = new AnimalView();
    // appending new Animal liTag.
    $("#animals").append(animalView.el);
  }
});

var AnimalView = Backbone.View.extend({
  // overriding defaults
  tagName: "li",
  className: "animal",
  initialize: function(){
    this.$el.text("Animal");
  },
  events: {
    "click": "makeRed"
  },
  makeRed: function(){
    this.$el.css({background: "red"});
  }
});

$(document).ready(function(){
  var zooView = new ZooView();
});
