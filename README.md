# Address Book App

This project is an address book application created in React using TailwindCSS, MaterialUI and the API endpoints from `https://randomuser.me/`

## Summary of Assignment

I began by laying the groundwork for what I believe an address book application should look like, focusing on the main functionality with a clean, lightweight UI. 

In an address book, I ideally wanted to be able to search the desired contact's name and have the result populate the screen, so that lookup-time would be minimized. Ultimately creating a more user-friendly experience (rather than having to scroll the list of contacts to find someone's contact card). I prioritized the search feature and I also implemented a dedicated page that displays the details of a user when their contact card is clicked. This simplifies the initial application, since there isn't a logjam of information on the initial page, while keeping it simple enough to retrieve necessary information.

The app is also entirely responsive, optimized for viewing on different sized screens.

#### Future Goals for the Application

While creating the application, I thought of some features that I believe could be easily implemented that could drastically improve the overall functionality and user experience of the application. These features included:

- Autocomplete functionality for the search bar `Agile Cost: 1`
--Time Estimate: Minimal, MaterialUI has an autocompleting component that could be leveraged 
- Sorting contacts by name `Agile Cost: 1`
- Favorite contact system `Agile Cost: 2`
- Edit/Save Info on Contact Card `Agile Cost: 3-5`
--Would require database integration, as well as user-authentication for personalized contact cards 
- Standardize phone numbers `Agile Cost: 1`
--Requires minimal logic, more of a preference for cleaner UI. 

#### Robustness

Given more time, my goal would be to enhance the error handling capabilities of the application. Improved error handling would theoretically help with bug-fixes, which could ultimately minimize downtime if issues were to be found on production

I would also like to add a more diverse and pedantic test-suite. This would again ensure that defects in functionality are not overlooked while still in the development cycle. 

Technical documentation outlining project architecture and future, allowing potential team members context on the application's lifecycle, as well as short-term and long-term goals. 

---
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
