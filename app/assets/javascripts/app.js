var ZooView = Backbone.View.extend({
  // corresponding DOM element
  el: "#zoo",

  // gets called with new ZooView
  initialize: function(){
    console.log("making a  zoo view");
  },

  events: {
    // type of event : function to call
    "click": "welcome",
    // delegates events to other DOM elements in the view
    "mouseover section": "highlight"
  },

  highlight: function(e){
    // the event
    console.log(e);
    // the view object
    console.log(this);
    this.$el.find('section').css({backgroundColor: 'yellow'});
  },

  welcome: function(e){
    alert("welcome to the zoo");
  }

});

var JungleView = Backbone.View.extend({
  id: "jungle",
  initialize: function(){
    console.log("making a jungle view");
    $('body').append(this.render().el);
  },
  // events hash
  events: {
    "click": "watchOut"
  },

  render: function() {
    this.$el.text("Welcome to the Jungle");
    return this;
  },
  watchOut: function() {
    this.$el.text("Watch out for the tree");
    return this;
  }
});


$(document).ready(function(){
  window.zooView = new ZooView();
  window.jungleView = new JungleView();
});
