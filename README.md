# Recipe App
___________________

# To run:
	1. npm run setup (first time only, to populate database)
    2. npm run start

# Structure
The App is a MERN app (Mongo Express, React, Node)

The server layer is a very simple express app connected to a mongo database.
It has only 3 routes to serve the client, it requries further development for error handling, authenication, security, user functionality etc.,

The client uses the React library and follows a flux structure with:
	```actions
	components
	stores```
and a dispatcher for pub/sub functionality

The idea is that each layer is only cognizant of one other layer, and ignorant of the others; i.e:
	*compononets can fire actions, and listen for changes on stores, when a store changes, the component will update
	*actions are triggered and dispatch an event
	*stores listen for events and update accordingly, any components subscribed to the store will update

The app also has a utils folder which houses the abstracted ajax calls, and a pages folder for the main pages of the App.

The pages are made up of components; this too requires further development and refactoring so the components aren't so tightly coupled with the pages.

The core functionality is the search recipe feature.

