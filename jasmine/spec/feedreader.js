// all tests placed within $() function so that they don't run until DOM is ready
$(function() {

    // RSS Feeds test suite
    describe('RSS Feeds', function() {

        // test to make sure allFeeds variable has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // test that loops through each feed in allFeeds object and ensures URL is defined
        it('urls are defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
       
        // test that loops through each feed in allFeeds to ensure it has a name defined and name is not empty
        it('feeds are named and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // the menu test suite
    describe('The menu', function() {
        
        const body = document.body;
        const menu = document.querySelector('.menu-icon-link');

        // test ensures the menu element is hidden by defualt
        it('menu is hidden by default', function() {
            expect(body.className).toContain('menu-hidden');
        });

        //  test ensures the menu changes visibility when the icon is clicked
        it('menu appears', function() {
            menu.click();
            expect(body.className).not.toContain('menu-hidden');

            menu.click();
            expect(body.className).toContain('menu-hidden');
        });
    });

    // initial entries test suite
    describe('Initial Entries', function() {
        
        // handle async
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });
        
        // test ensures when loadFeed is called and completes, there is at least one .entry element within .feed container
        it('has at least one entry in the feed container', function() {
            let entries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entries).toBeGreaterThan(0);
        });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', function() {

        // handle async
        let initialFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, function() {
                    done();
                });
            });
        });

        // test ensures when a new feed is loaded by loadFeed that the content changes.
        it('changes content on new feed load', function() {
            let newFeed = document.querySelector('.feed').innerHTML;
            expect(initialFeed).not.toBe(newFeed);
        });
    });    
}());