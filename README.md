# Politik Kompass
Last Edit: 10.2024 <br>
Language: Typescript React with Vite<br>

Website: https://proud-grass-02ae08f03.5.azurestaticapps.net

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Architecture

The components used are divided into four categories:

- `UI-Elements`
- `View-Componets`
- `Container-Componets`
- `ServiceLayer`
- `Data`

Note: Some of the modules are used from other Web Apps from me like the UsedLibs Modul or the Impressum/Imprint Modules.
As a result of the use from the modules there is also one configuration file:

- `app_texts`: Contains texts such as the description, imprint text, data protection text etc.

In addition, the separation is not 100% sharp, partly because of these modules, but also because the final architecture only turned out that way during development.

`UI-Elements`
At the topmost level, UI-Elements are the fundamental building blocks of our interface. These are the atomic components that include buttons, input fields, and other basic interactive elements. They are styled and abstracted to be reusable across the application.
Examples of this are the floating button, buttons, the cards, etc.

`View-Components`
View-Components are composed of UI-Elements and form parts of the application's screens. They are responsible for presenting data and handling user interactions. These components are often reusable within different parts of the application and can communicate with Container-Components for dynamic data fetching.
A perfect example of the reuse of the individual view components is the IncomeBreakdown view or the views for adjusting the tariff/tax settings.

`Container-Components`
Container-Components serve as the data-fetching and state management layer in our architecture. They connect View-Components to the Service Layer, managing the application state and providing data to the components as necessary. They may also handle complex user interactions, form submissions, and communicate with services to send or receive data.

`Service Layer`
The Service Layer is the foundation of our application's client-side architecture. 
There is a separate encapsulated service which is responsible for calculating tax and a separate one for calculating social security contributions. The generic helper methods / hooks also belong there, such as the methods for retrieving holiday days or the hook that allows you to swipe through the app.

`Data`
Here we have the data that the application uses. In this application, for example, the questions.

## Available Scripts

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npx license-checker --json --production --out licenses.json`
Generate the JSON with the licenses of the NPM packages used. This can then replace the existing license json under /legal/usedLibs.



# Used NPM Modules
According to the command npm list You can see the deeper NPM modules used and which of these are used in the licenses.json.

<br />├── @emotion/react@11.13.3
<br />├── @emotion/styled@11.13.0
<br />├── @eslint/js@9.12.0
<br />├── @mui/material@6.1.2
<br />├── @testing-library/jest-dom@6.5.0
<br />├── @testing-library/react@16.0.1
<br />├── @types/i18next@13.0.0
<br />├── @types/jest@29.5.13
<br />├── @types/react-dom@18.3.0
<br />├── @types/react-select@5.0.1
<br />├── @types/react@18.3.11
<br />├── @vitejs/plugin-react-swc@3.7.1
<br />├── eslint-plugin-react-hooks@5.1.0-rc-fb9a90fa48-20240614
<br />├── eslint-plugin-react-refresh@0.4.12
<br />├── eslint@9.12.0
<br />├── globals@15.10.0
<br />├── i18next-browser-languagedetector@8.0.0
<br />├── i18next@23.15.2
<br />├── jest@29.7.0
<br />├── react-bootstrap@2.10.5
<br />├── react-dom@18.3.1
<br />├── react-i18next@15.0.2
<br />├── react-icons@5.3.0
<br />├── react-router-dom@6.26.2
<br />├── react-select@5.8.1
<br />├── react@18.3.1
<br />├── recharts@2.12.7
<br />├── rimraf@6.0.1
<br />├── typescript-eslint@8.8.0
<br />├── typescript@5.6.2
<br />└── vite@5.4.8