Test for a company done over the weekend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Test

This was the test
Schedule a single-page application that checks the new zonky.cz market every 5 minutes and
lists them.
The list of loans will include an image, a name and a story limited to 20 words with a total
maximum story length of 200 characters.
The list of loans can be sorted by duration, rating, required amount and deadline.
Each of the loans can be clicked by the user to see its detail with all of the API data.
Use React to develop the application
Apply at least two tests to the application
don't forget to deploy to either your server, heroku or something available on the internet...
API can be found at: https://api.zonky.cz/loans/marketplace

## Notes

If you need to run it locally first you need to get the uplus_node server running in your local computer
If you don't want to clone the server then at the LoansActions files comment the line for localhost and
uncomment the one to my server
I did have a hard time accesing the zonky api so I created the nest route to get the data I needed for the app.
I used typescript to enforce type checking to avoid issues.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
