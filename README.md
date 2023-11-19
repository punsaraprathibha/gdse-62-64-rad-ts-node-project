1. Firstly show running as the default way.
2. Then execute the command `tsc --init` to initialize tsconfig.json file
3. Previously we've used a trick to compile and run the ts code using script now we're going to do it in a separate way.
4. Create 2 folders `server` and `dist`. Then move `app.js` to `server folder`
5. Please uncomment the `outDir` property and put `"./dist""`
6. Just run `tsc` command in the console and see whether `.js` file is created inside `dist` folder.
7. Then run `npm i @types/node -D` to add `fs` file sync as dependency and show js code generated for ES version.
8. Change the `"module": "ES2022"` and see the result
9. Always we have to run `tsc` and then `node dist/app.js` so let's define a script for this `"start": "tsc && node dist/app.js"`
10. However, we have a simplified way to do this as well
11. Then please use ` npm install ts-node -D` to install ts-node.
12. Then replace start script to `"start": "ts-node server/app.ts"`
13. So, you'll not need the dist directory any more