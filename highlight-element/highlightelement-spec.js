highlightElement = function(el){
  console.log("highlight--");

  console.log("locator---:"+el.locator());

  return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
  then(function(resp){
    browser.sleep(2000);
    return el;
  },function(err){
    console.log("error is :"+err);
  });
};


describe('Protractor Demo App', function() {
  it('changes the color', function() {
    browser.get('http://lotteryadmin.sia.co.in/#/');
    var ely = element(by.css('.user')); // using css
    highlightElement(ely); // works with model
    browser.sleep(5000); // just to see the header change color
    expect(ely.getAttribute('style')).toContain('color: red');
  });
});