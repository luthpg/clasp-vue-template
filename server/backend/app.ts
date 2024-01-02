/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/**
 * HTML内でページ読み込み時にパラメータ読み込みする場合は、以下で対応
 * ```js
 * const serverParameters = JSON.parse('<?!= parameters ?>');
 * ```
 */
function doGet(webAppParams: WebAppParams) {
  const fileName = 'hosting/index';
  const title = 'WebApp';
  const faviconImageDriveFileId = '';
  return convertPage_(
    fileName,
    {
      webAppParams,
      url: ScriptApp.getService().getUrl(),
      user: Session.getActiveUser().getEmail(),
    },
    title,
    faviconImageDriveFileId
  );
}

function convertPage_(
  pageName: string,
  parameters?: object,
  siteTitle: string = 'WebApp',
  faviconImageDriveFileId?: string
) {
  const htmlTemplate = HtmlService.createTemplateFromFile(pageName);
  if (typeof parameters === 'object') htmlTemplate['parameters'] = JSON.stringify(parameters);
  const htmlOutput = htmlTemplate.evaluate();
  htmlOutput.addMetaTag(
    'viewport',
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
  );
  if (typeof siteTitle === 'string' && siteTitle !== '') htmlOutput.setTitle(siteTitle);
  if (typeof faviconImageDriveFileId === 'string' && faviconImageDriveFileId !== '')
    htmlOutput.setFaviconUrl(`https://drive.google.com/uc?id=${faviconImageDriveFileId}&.png`);
  return htmlOutput;
}
