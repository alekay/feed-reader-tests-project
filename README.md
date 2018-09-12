# Description
This project is a web-based application that reads RSS feeds using Jasmine.

## The Scenario
The original developer of this application clearly saw the value in testing, they had already included Jasmine and started writing the first test suite. The developer left the company in the middle of writing the test suites that need to be completed (by me).

## How to run the application
- Open the index.html
- Tests are in the feedreader.js file
- Tests that are green have passed, red have failed

## Tests
1. Make sure allFeeds variable has been defined and is not empty.
2. Loop through each feed to determine if the URLs are defined and not empty.
3. Loop through each feed and determine that each feed has a name and is not empty.
4. Ensure menu element is hidden by default.
5. Validate functionality of menu toggle.
6. Make sure each feed has at least one entry.
7. Make sure loadFeed() loads new content.

## Contribute
If you would like to contribute to this project please feel free to make a pull request or fork and propose a file change.