function foo () {
  var bar;
  quux = 23;

  function zip () {
    var quux = 42;
    bar = true;
  };

  return zip;
};


