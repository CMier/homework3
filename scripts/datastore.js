// You have completed the DataStore module, 
// which provides the most important part of the CoffeeRun application. 
// It can store data, provide stored data in response to queries, 
// and delete unnecessary data on command.

(function (window) {
    'use strict';
    var App = window.App || {};
    // you declared a local variable named App. If there is already an App property of the 
    // window, you assign the local App to it. If not, the label App will refer to a new, 
    // empty object, represented by {}

    function DataStore() {
      this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
      };

    DataStore.prototype.get = function (key) {
        return this.data[key];
      };
    
    DataStore.prototype.getAll = function () {
        return this.data;
      };
    //You created a get method that accepts a key, looks up the value for it 
    //in the instance’s data property, and returns it. You also created a getAll 
    //method. It is almost the same, but instead of looking up the value for a 
    //single key, it returns a reference to the data property.

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
      };
      //The delete operator removes a key/value pair from an object 
      //when your new remove method is called.


  
    App.DataStore = DataStore;
    window.App = App;
  })(window);