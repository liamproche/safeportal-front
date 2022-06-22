Pride Equlithon Launch Event

APP TITLE
-Safeplace? <--Good name, why fix it?
-Safeportal?

APP DESCRIPTION
--

TECHNOLOGIES


NOTES ON SPECIFIC PROJECT
	-Portal for LGBTQIA+ to connect
	-User profiles<--How is the front-end built?
	-Ability to make posts<--To both connect & alert
	-How the user identifies?
	-Currently using Wix platform for website


MOST URGENT NEED
	-A portal to build their own space
	-Way to report and track rights violations
	-Safe place 


THOUGHTS
	-Opt out option for messaging from platform
	-How to incorporate into existing website?
		-Build as seperate app an have website link to it
	-Deployed as TOR hidden service??
		-Could this be done by double deploying the front-end (clearnet & hidden service) and just pointing it at the same backend?
	-Concerns about collecting too much data
		-Not all data stored in one place???
		-Consent to collect data --> very clear instructions about what data is being collected
	-SECURITY!!!!!
	-Mentorship program feature???
	-Way to keep track of members who are in trouble or after they have left the program
	-Safeway international to connect with their members
		-This sounds like some sort of messaging feature... Email? WebSockets? What about encryption???
	-About connection and continued growth
		-Definitely messaging platform
	-Age demographic- Not under 18 years old --> no top-out age
	-Shelters get shutdown because of minors living in the shelter


MORE QUESTIONS
	-Profile picture??? <--- Is this a security risk? Is an avatar better?
	-How do we show the user information that is relative to them when logging in?
		-Posts by geographic region?
		-Can user search for other users. If so, what filtering?
			-Geographic region?
			-How they identify?
			-Username search?
	-Can users without an account access anything?
		-Maybe listing of emergency posts only


DATA MODELS SO FAR
	-USER
		-username (must be unique)
		-email
		-password (no validation???)
		-birthday (age)??
		-how the user identifies <-- Pronouns the user uses (providing this should be optional)
		-profile pic/avatar?
		-location (how many fields is this? home country? current location? city/state/country?)
		-Shelter/Clan?? <--maybe voluntary?

	-POST
		-title?
		-subtitle?
		-body
		-timestamp
		-upload image/video feature?
		-Emergency or not?
		-User foriegn key


	-How to differentiate between a connection post and an emergency post?


USER STORIES
	-When the user first accesses the site, they should have the options to login or create an account <---How to do this? Modals or routes?
	-The homepage when not logged in should show a list of emergency posts
	-If a user chooses create account
		-They should be taken to the form to create an account
		-The form should have a message that is 100% transparent about what data is being collected
		-When a user creates an account they should be automatically logged-in and taken to their new (blank) show page.
	-When a user logs in they should be taken to their individual portal (user-show page)
		-Which should show what? 
			-Posts of all users? 
			-Users in their geographic region? 
			-Users that they've connected with? 
			-Users posts that they're connected with? 
			-All users posts?
	-How does user find other users? Suggestions? Search?
	-User should be able to join clans?
	-Posts that are marked as an emergency should be displayed in red.

MVP
--

MATT'S AVAILIBILITY
	-Matt super open to communication
	-Matt's email
		maxwell@safeplaceinternational.org

QUESTIONS FOR MATT
	-Profile pic question
	-Should we collect birthdate?
		-This could be helpful to help people connect with others, but is a security concern if people don't want to be found
		-Optional field for age/birthdate?
		-Optional -> What are user pronouns?
		-User should be able to choose if they have a location or not


THOUGHTS ON CLANS
	-Should be user generated



QUESTIONS FOR THE GROUP
	-Nav when first accessing the site
		-This should be responsive
		-Login
		-Sign-up
		-Anything else?
	-Nav after login???
		-What goes here???
		-Create post?
		-Serch users?
		-Edit account
	-Routing for homepage/login/
		-Is the login form visible on the landing page or is this a seperate route?
	-What information are we collecting on the users?
	-User story breakdown


MVP REQUIREMENTS
		-What is the app?
			-What services does it provide?
			-What features do we want to include?
		-Are we going to deploy?


-WHAT DEVS NEED TO GET STARTED
		-Wireframes for landing page, register page, login page
		-MVP Requirements
		-React router --> Seperate login page, create account page, etc.


NOTES FROM MEETING 6/20
	-How does safeplace approve new members?
	-Incorporate App link into nav in its own tab
	

	USER
		-Country of origin


