export function getPathDetails(link?: string, pathname?: string) {
  // used in buttons
  const basePath = link?.split("#")[0];
  const sectionId = link?.split("#")[1];

  const isSamePath = pathname === basePath;
  const scrollToElement = isSamePath ? `section[id='${sectionId}']` : undefined;

  return { isSamePath, scrollToElement };
}
