export const assetPath = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, '')}`;
