var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I was instantiated at: " + new Date().toLocaleString());

      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }

          return instance;
      }
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
alert("Check console for pattern demos");

console.log("Singelton pattern demo:");
console.log(instance1);
console.log(instance2);