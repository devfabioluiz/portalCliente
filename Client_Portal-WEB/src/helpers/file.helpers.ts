export const getFileName: (fileUrl: string) => string | undefined = (
  fileUrl,
) => {
  const decodedURL = decodeURI(fileUrl);

  return decodedURL.split('/').pop();
};

export const downloadFile = (fileUrl: string): void => {
  void fetch(fileUrl)
    .then(async (response) => await response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', getFileName(fileUrl) as string);

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link.remove();
    });
};
