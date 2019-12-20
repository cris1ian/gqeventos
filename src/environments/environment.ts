// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // WS_URL: 'http://localhost:3001/api/v1',
  WS_URL: "http://ec2-18-231-125-85.sa-east-1.compute.amazonaws.com:3001/api/v1",
  S3_URL: "http://gqclientes.s3.sa-east-1.amazonaws.com"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
