// all tests placed within $() function so that they don't run until DOM is ready
$((() => {

    // RSS feeds test suite
    describe('RSS Feeds', () => {

        // test to make sure allFeeds variable has been defined and is not empty
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // test that loops through each feed in allFeeds object and ensures URL is defined
        it('urls are defined and not empty', () => {
            allFeeds.forEach( feed => {
                expect(feed.url).toBeTruthy();
                expect(feed.url.length).not.toBe(0);
            }); 
        });
       
        // test that loops through each feed in allFeeds to ensure it has a name defined and name is not empty
        it('feeds are named and not empty', () => {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // the menu test suite
    describe('The menu', () => {
        
        const body = document.body;
        const menu = document.querySelector('.menu-icon-link');

        // test ensures the menu element is hidden by defualt
        it('menu is hidden by default', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        //  test ensures the menu changes visibility when the icon is clicked
        it('menu appears', () => {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    // initial entries test suite
    describe('Initial Entries', () => {
        
        // handle async
        beforeEach(done => {
            loadFeed(0, () => {
                done();
            });
        });
        
        // test ensures when loadFeed is called and completes, there is at least one .entry element within .feed container
        it('has at least one entry in the feed container', () => {
            let entries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entries).toBeGreaterThan(0);
        });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', () => {

        // handle async
        let initialFeed;
        beforeEach(done => {
            loadFeed(0, () => {
                initialFeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, () => {
                    done();
                });
            });
        });

        // test ensures when a new feed is loaded by loadFeed that the content changes.
        it('changes content on new feed load', () => {
            let newFeed = document.querySelector('.feed').innerHTML;
            expect(initialFeed).not.toBe(newFeed);
        });
    });    
})());