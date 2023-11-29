# ZetiUI

How to get up and running:

run npm i -f (hopefully this wont cause depenndancy issues)
I think i ran -dev --save so should have all in package.json if not just install missing dependancies with npm i <package-name> -f

the project uses typescript so ensure to install typescript. if not already in package.json

if ts.config is not available  this configuration should be ok 
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "es2015", "es2017"],
    "jsx": "react",
    "module": "commonjs",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "types": ["jest", "node"]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}

and for jest.config,js 

module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom'
  };
  

use command npn run start to run the app. if you make changes hot loading doesnt work so will need to stop the project and re-run 
to run tests run npm run test

In App.tsx you may need to change the url on line 20 to whatever the backend api is. 

Acknowledgements:

I could have had further test cases (HttpService) ect.. and re-used certain components that were common but for times sake I just created sepereate components.
if the project looks messy, this wouldnt be production ready. I would install tools like eslint ect.. 
Also not the prettiest of UI design. For times sake I kept it basic. I would have utilised sending file for download or endless scrolling with downloadable option for each invoice
