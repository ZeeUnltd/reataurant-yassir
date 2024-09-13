# React + TailwindCSS + shadnc/ui Boilerplate

This is a boilerplate code that is all set to be used, routing powered by React Router.

- [shadcn/ui](https://ui.shadcn.com/docs) docs to use for future reference.
- [tailwind css](https://tailwindcss.com/docs/installation) docs to use for future reference.
  
## How to use

- Download the zip by clicking on the green `Code` button and then clicking Download.
- Extract the downloaded files in your desired location.
- Open Command Prompt in that folder or you can use VS Code's integrated terminal as well {for that you have to first open the folder in VS Code}
- run `npm install`
- run `npm install -D @types/node` in case if its not installed for some reason, if it is then ignore this step.
- Development environment is all set, you can now run the dev server by running `npm run dev`
- Now start building your application.

## Structure

Let us see how this code has been setup:

- Just like any other React App, this uses `src` folder as the root folder for our app so that our root files are separate from our app files.
- In your vite configuration file, which is in `vite.config.js` , you'll see an import alias that has been set which helps us to make the imports look clean. It looks like this.

```js
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },,
```

- If you want to configure your Tailwind CSS setup for the app, you can check the `tailwind.config.js` file.
- Please take a look at the `components.json` file which holds the configuration for our shadcn/ui library just in case you want to change something.
- Global CSS file is set to `src/index.css`. You can modify the color codes and other stuff in there to theme the application according to your need.
- `src/assets` will hold your app assets.
- `src/components` will hold all your app components both from shadcn/ui and your custom components.
- `src/lib` will hold your helper files and other config files.
- `src/pages` will hold your all the pages that the app might contain.

# Getting Started with Create React App

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
