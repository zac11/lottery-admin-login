
describe('Getting User to login', function() {
    beforeEach(function(){
		browser.get("http://lotteryadmin.sia.co.in/#/");
	});

    
    it('it would be finding login elements', function() {

        expect(element(by.css('.user')).isPresent()).toBeTruthy();

      browser.actions().mouseMove(element(by.css('.user'))).click().sendKeys("ravi").perform();
      browser.actions().mouseMove(element(by.css('.user2'))).click().sendKeys("ravi123").perform();

      element(by.buttonText("Log in")).click();
      browser.sleep(30);
      browser.waitForAngular();
      
    });
        
    
});
    