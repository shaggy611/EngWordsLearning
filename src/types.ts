export interface ContextTypes {
  wordPair: { eng: string; ukr: string }
  setWordPair(pairWords: { eng: string; ukr: string }): {
    pairWords?: { eng: string; ukr: string }
  }
  loader?: boolean
  setLoader(loader: boolean): boolean
  learnLanguage: string
  setLearnLanguage(learnLanguage: string): string
  blured: boolean
  setBlured(blured: boolean): boolean
}

export interface WordCardProps {
  text: string
  bluredFirst?: boolean
}
