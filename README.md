# Custom Components

This is a simple package I created for personal use. It contains some components that can be useful. However, to use it correctly, you will need to add the package to Tailwind's configuration. Here's how to do it:

1. **Add the package to Tailwind's configuration:**
   To ensure that the package's styles integrate properly with Tailwind, add the package route to the content paths in your Tailwind configuration file. Use the following line and replace `{packageRoute}` with the appropriate route of the package:

   ```javascript
   content: ["{packageRoute}/**/*.{js,ts,jsx,tsx}"],
   ```

2. **Further customization with CSS:**
   If for any reason you cannot add the package to Tailwind's configuration, you can still customize the styles using standard CSS. Simply import the provided CSS file in your entry file (e.g., index.js or index.ts) to apply custom styles. Note that predefined styles, such as input field borders, may not be applied correctly if not integrated with [Tailwind](https://tailwindcss.com) and [TailwindForms](https://www.npmjs.com/package/@tailwindcss/forms).
