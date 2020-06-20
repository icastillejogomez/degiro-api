export type ReportType = {
  id: number,
  type: string,
  description: string,
  stampCreated: string,
  uri: string,
}

export type AccountReportsType = ReportType[]