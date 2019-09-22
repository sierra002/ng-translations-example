# ng-translations-example [Demo](https://nahtanoj-hz.github.io/ng-translations-example/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5 and it is an example for [Angular i18n](https://angular.io/guide/i18n#internationalization-i18n)

## Useful tips and notes
1. Generating the project  
```zsh
$ ng new translations --minimal --style scss -S -p jhz --routing true
```  
2. Setting a translation for an html element
```html
<span class="hero--details--label"
i18n="site hero name|the label for the hero name@@heroName">Name</span>
```
3. Generate the base translation file
```zsh
$ ng xi18n --output-path src/locale
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).  

