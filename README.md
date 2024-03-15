# POWERTIK

<hr>

## Powertik Framework by Ali Eslamdoust

installation:

1. install chokidar using the command "npm i chokidar"
2. downlload all the necessary files (powertik.zip)
3. place all the files inside the zip next to index.html (in the main directory)
4. add this to package.json: "scripts": { "powertik": "node watch-pt.js" },
5. correct the urls inside: powertik-files.js
6. run powertik framework by runing this command in your terminal: (npm run powertik)
7. now you can link main.css to your html file

perks:

- lighter css file for the final project
- adding dark mode to your project way easier than pure js
- adding hover to elements without leaving html
- detects live changes
- you can add/remove your favorite keywords for css inside powertik.js
- sizes are in pixel and are infinite, for example "p-354" is equal to "padding: 354px;"

### Updates:

v1.1.0 changes:

- added responsive mode with simple customization inside powertik-files.js, you can see more about that in our help center
- fixed some bugs

v1.0.3 changes:

- visual changes
- now you can add gradients using "gradient" keyword
- now you can add your custom css shortcut in powertik-files.js
- now you can add blur using "blur-" prefix ( " blur-50 " = " backdrop-filter: blur(50px) " )
- fixed some bugs

v1.0.2 changes:

- easier installation and guide

v1.0.1 changes:

- write **dark mode** easier with using "dark:" keyword at the start of your class names like this: dark:text-white
- now you can add **hover** mode for elements using "hover:"
- added more css shortcuts for ease of use.
- changes in file linking and installation for ease of use
- ability to use css variables with writing "$"
- resolved detected bugs
