var ZooView = Backbone.View.extend({
  el: "#zoo",

  events: {
    "click button": "makeAnimal"
  },
  initialize: function(data){
    this.data = data;
    this.$el.find("h1").text("Welcome to the " + this.data.name);
    this.$input = this.$el.find('input');
  },

  makeAnimal: function(e){
    console.log("Making Animal");
    // var name = this.$el.find('input').val();
    var name = this.$input.val();
    // var name = this.$el.find("input[name=animalName]").val();
    var animalView = new AnimalView({name: name});
    // appending new Animal liTag.
    $("#animals").append(animalView.el);
    // this.$input.val("");
  }
});

var AnimalView = Backbone.View.extend({
  // overriding defaults
  tagName: "li",
  className: "animal",


  initialize: function( animal ){
    // this.options = options;
    // this.$el.text(options.name);
    // this.template = Handlebars.compile( $("#entry-template").html() );
    this.template = Handlebars.compile( $("#entry-template").html() );
    this.$el.html( this.template(animal) );
  },

  events: {
    "click": "makeRed"
  },
  makeRed: function(){
    this.$el.css({background: "red"});
  }
});

$(document).ready(function(){
  var zooView = new ZooView({name: "Zooniverse"});
});
