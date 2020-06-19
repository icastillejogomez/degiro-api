export type New = {
  brief: string,
  category: string,
  content: string,
  date: string,
  htmlContent: boolean,
  id: string,
  isins: string[],
  language: string,
  pictureUrl: string,
  source: string,
  title: string,
}

type NewsResponse = {
  offset?: number,
  total?: number,
  items: New[],
}

export type NewsType = {
  latest: NewsResponse,
  top: NewsResponse,
}