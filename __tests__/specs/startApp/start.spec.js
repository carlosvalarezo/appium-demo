var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
	    //var screen = $('//MainView');
	     //browser.background(3);
            //browser.swipeLeft("MainView",100);
	    //var isAppInstalled = browser.isAppInstalled('org.nyumc.pickyeater');
	    //assert(isAppInstalled.value, true);
    	    //console.log("lorenxo...",isAppInstalled); // outputs: true
	    //ios//android//browser.background(3);
            //browser.swipeLeft("MainView",100);
            //browser.waitForVisible('~MainView', 10000);
            //var isAppInstalled = browser.isAppInstalled('org.nyumc.pickyeater');
            //assert(browser.isVisible('~MainView'), true);
            //console.log("lorenxo...",isAppInstalled); // outputs: true
            //browser.swipe('~MainView',10,20,3);
            //ios//browser.execute('mobile: swipe', {direction: 'left'});
            //ios//browser.execute('mobile: swipe', {direction: 'left'});
            //browser.screenshot();
	    //browser.waitForVisible('~MainView', 10000);
	    //browser.execute('mobile: swipe', {startX: '0.01',startY:'0.5', endX: '0.5', endY: '0.5', duration:'2.5'});
	    //browser.touchAction(['press',{options:{action:'moveTo', x:200,y:0}}, 'release']);
	    browser.touchAction([
        { action: 'press', x: 0, y: 50 },
        { action: 'moveTo', x: 10, y: 20},
        'release'
    ])
	});
});
