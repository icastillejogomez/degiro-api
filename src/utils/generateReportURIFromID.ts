// Import types
import { AccountDataType, AccountConfigType } from '../types'

// Importamos enumerados de URLs
import { DEGIRO_API_PATHS } from '../enums'
const { BASE_REPORT_DOWNLOAD_URI } = DEGIRO_API_PATHS

/**
 * Generate a download URL to the report with the `id` identifier
 * @param id Report id to generate download URL
 */
export const generateReportURIFromID = (reportId: number | string, accountData: AccountDataType, accountConfig: AccountConfigType): string => {
  return `${accountConfig.data.paUrl}${BASE_REPORT_DOWNLOAD_URI}${reportId}?sessionId=${accountConfig.data.sessionId}&intAccount=${accountData.data.intAccount}`
}