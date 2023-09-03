export const getHostName = (fullUrl: string) => {
  const url = new URL(fullUrl);
  const domain = url.hostname;

  return domain.split(".").length > 2 ? domain.slice(domain.indexOf(".") + 1) : domain;
};
