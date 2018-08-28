# Moscow museums map (My neighborhood map) 
This project for Udacity Frontend Nanodegree.

It show map with location some Moscow museums. A "hamburger" button show list of same museums. Cilck on marker show some info about chosen museum.

#### API used:
* Google maps
* Foursquare (for data)

#### Technology used:

To create project was used create-react-app.
This project use React.

#### To run project:

* Development:
  * using npm
  ```$ npm install ```
  ```$ npm start ```
  * using yarn
  ```$ yarn ```
  ```$ yarn start ```
  
Navigate to http://localhost:3000/ or wait untill browser opens the page itself.

* Production:
  * using npm
  ```$ npm install ```
  ```$ npm run build ```
  * using yarn
  ```$ yarn ```
  ```$ yarn build ```
  
* Run production server
  * using npm
  ```$ npm install -g serve```, 
  then ```$ serve -s build``` 
  and open http://localhost:5000/ to view the production build.
  * using yarn
  ```$ yarn global add serve```, 
  then ```$ serve``` 
  and open http://localhost:5000/ to view the production build.

   
  


In **production build** it includes a service worker so that the app loads from local cache on future visits.
