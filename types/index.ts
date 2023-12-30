declare interface WebAppParams {
  queryString: string;
  /**
   * query parameter (single value)
   */
  parameter: { [key: string]: string };
  /**
   * query parameters (values)
   */
  parameters: { [key: string]: string[] };
  contentLength: number;
  /**
   * url path (after exec/* | dev/*)
   */
  pathInfo?: string;
  contentPath: string;
}
declare interface OnOpenParams {
  Spreadsheet: {
    source: GoogleAppsScript.Spreadsheet.Spreadsheet;
    range: GoogleAppsScript.Spreadsheet.Range;
    user: string;
    authMode: 'NONE' | 'CUSTOM_FUNCTION' | 'LIMITED' | 'FULL';
  };
}

interface GoogleScriptRun {
  withSuccessHandler: <T = any>(callback: (returnValue?: T, userObject?: any) => void) => GoogleScriptRun;
  withFailureHandler: (callback: (e: Error, userObject?: any) => void) => GoogleScriptRun;
  withUserObject: (userObject: any) => GoogleScriptRun;
  [key: string]: (...arg: any[]) => GoogleScriptRun;
}

type GoogleScriptHistoryFunction = (stateObject: object, params: object, hash: string) => void;
declare const google: {
  script: {
    run: GoogleScriptRun;
    url: { getLocation: (callback: Function) => void };
    history: {
      push: GoogleScriptHistoryFunction;
      replace: GoogleScriptHistoryFunction;
      setChangeHandler: (
        callback: (e: {
          state: object;
          location: {
            hash: string;
            parameter: { [key: string]: string };
            parameters: { [key: string]: string[] };
          };
        }) => void
      ) => void;
    };
  };
};

