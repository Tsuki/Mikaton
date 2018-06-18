// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'TsukaTsuki',
  headerLinks: [
    {link: '', name: 'home', icon: 'home'},
    {link: 'archives', name: 'archives', icon: 'archive'},
    {link: 'about', name: 'about', icon: 'user'},
    {link: 'categories', name: 'categories', icon: 'th'},
    {link: 'note', name: 'note', icon: 'archive'},
  ]
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
