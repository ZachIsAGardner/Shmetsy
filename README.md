# README

TO DO:
* all
* styling
* Demo account
* Implement click outside of modal closes it

FIXED BUGS:
* Creating a listing was not working. Traced every step of the redux cycle. Problem was there was not a create view. Rather than make a whole new create view, I just reused the show view in the listings controller. I had also set the work for stock to quantity in the controller.  


QUESTIONS:
* help
* warning on edit refresh (good solution?)
* why controller different from before (no saving involved)
* why doesnt update immediatly on edit
* multiple images

TO RUN:
* npm install
* bundle install
* bundle exec rails db:drop db:setup

* rails server
* webpack --watch

* Navigate to http://localhost:3000

PUSHING TO HEROKU:
* git push heroku master

* (seeding heroku database)
* heroku run rake db:migrate (if pending migrations)
* heroku run rake db:seed

Helpful Websites:

http://www.color-hex.com/
https://www.hexcolortool.com/
https://fonts.google.com/
http://itsalwayssunny.wikia.com/wiki/Category:Items
