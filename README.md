# README

TO DO:
* all
* Implement click outside of modal closes it
* quantity for cart add
* you can enter text for price in listing create
* edit review


<!-- --- -->

FIXED BUGS:
* Creating a listing was not working. Traced every step of the redux cycle. Problem was there was not a create view. Rather than make a whole new create view, I just reused the show view in the listings controller. I had also set the work for stock to quantity in the controller.  

<!-- --- -->

QUESTIONS:
* help
* turn off rails server
* Implement click outside of modal closes it
* do something once ajax completes (pushing to history)
* Snap to top of page or wherever
* Weird listings amount in chrome debugger (150 x null)

* multiple images

<!-- --- -->

TO RUN:
* npm install
* bundle install
* bundle exec rails db:drop db:setup

* rails server
* webpack --watch

* Navigate to http://localhost:3000

<!-- --- -->

PUSHING TO HEROKU:
* git push heroku master

* (seeding heroku database)
* heroku run rake db:migrate (if pending migrations)
* heroku run rake db:seed

* heroku reset (if problems)

<!-- --- -->

Helpful Websites:

* http://www.color-hex.com/
* https://www.hexcolortool.com/
* https://fonts.google.com/
* http://itsalwayssunny.wikia.com/wiki/Category:Items
