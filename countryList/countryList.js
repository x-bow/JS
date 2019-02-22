function countryList() {
  var myobject = {
      Value1 : 'USA',
      Value2 : 'Nepal',
      Value3 : 'India',
      Value4 : 'China'
  };

  var select = document.getElementById("countryList");
  for(x in myobject) {
      select.options[select.options.length] = new Option(myobject[x], x);
  }
}
