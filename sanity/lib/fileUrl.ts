import { SanityFileAsset, getFileAsset } from '@sanity/asset-utils'
import sanityConfig from '@/sanity.config'


export function getSanityFileUrl(sanityFile:any) {
  const fileUrl = getFileAsset(sanityFile.asset, {projectId: sanityConfig.projectId, dataset: sanityConfig.dataset})
  return fileUrl;
}