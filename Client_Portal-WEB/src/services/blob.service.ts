import {
  BlobServiceClient,
  type BlobUploadCommonResponse,
  type ContainerClient,
} from '@azure/storage-blob';

// TODO: Move these variables to Key Vaults
const containerName = 'cvs';
const storageAccountName = import.meta.env
  .VITE_AZURE_STORAGE_RESOURCE_NAME as string;
const sasToken = import.meta.env.VITE_AZURE_STORAGE_SAS_TOKEN as string;

/**
 * Get all blobs (files) inside container
 */
export const getBlobsInContainer = async (
  containerClient: ContainerClient,
): Promise<string[]> => {
  const returnedBlobUrls = [];

  for await (const blob of containerClient.listBlobsFlat()) {
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`,
    );
  }

  return returnedBlobUrls;
};

/**
 * Generate blob name, generate options based on file type and create new file inside selected container
 */
const createBlobInContainer = async (
  containerClient: ContainerClient,
  file: File,
): Promise<BlobUploadCommonResponse['_response']> => {
  const blobClient = containerClient.getBlockBlobClient(file.name);

  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  const res = await blobClient.uploadData(file, options);
  await blobClient.setMetadata({ Username: 'Admin' });

  return res._response;
};

export const uploadFileToBlob = async (
  file: File | null,
): Promise<BlobUploadCommonResponse['_response'] | null> => {
  if (file == null) return null;

  try {
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/${sasToken}`,
    );

    const containerClient = blobService.getContainerClient(containerName);

    return await createBlobInContainer(containerClient, file);
  } catch (e) {
    console.log(e);
    return null;
  }
};
