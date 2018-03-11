# MajorFront

Angular Front-end for major project. Create a `src/app/config.ts` file which exports a `Config` class which contains an `apiUrl` property which points to a valid url to the backend for the major-project.

An example of `src/app/config.ts` file :

```
export class Config {
  apiUrl = 'https://major-project-lsddqymvnl.now.sh';
}
```

## Requirements

1. Make sure you have the latest version of Node.js installed. You can gaet Node.js from [here](https://nodejs.org/en/).
2. Make sure you have Angular CLI. You can get Angular CLI by running `npm install -g @angular/cli`.


## Instructions to run locally

1. Download this repository and extract in a folder or clone this repo into a new folder (e.g., my-proj) by running 
  `git clone https://github.com/SharmaAayush/Major-Project.git my-proj`.
2. Run the command prompt in the root directory of the project (my-proj in our case).
3. Run the command `npm install` to install all the dependencies.
4. Run the command `ng serve --open` to start the lite-server on port 4200. To run on any specific port, just provide the `--port` flag followed by the port number. The `--open` flag will open the project in the browser automatically.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
