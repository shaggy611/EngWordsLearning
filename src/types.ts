export interface ContextTypes {
  wordPair: { eng: string; ukr: string }
  setWordPair(pairWords: { eng: string; ukr: string }): {
    pairWords?: { eng: string; ukr: string }
  }
  loader?: boolean
  setLoader(loader: boolean): boolean
}

export interface WordCardProps {
  text: string
}
