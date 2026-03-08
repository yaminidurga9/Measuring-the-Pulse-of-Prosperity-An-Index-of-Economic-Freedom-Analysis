import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { FourPillars } from './components/FourPillars'
import { TwelveFactors } from './components/TwelveFactors'
import { CountryRankings } from './components/CountryRankings'
import { DataVisualization } from './components/DataVisualization'
import { HistoricalTrends } from './components/HistoricalTrends'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'

export function createApp(): string {
  return `
    ${Navigation()}
    <main>
      ${Hero()}
      ${Introduction()}
      ${FourPillars()}
      ${TwelveFactors()}
      ${CountryRankings()}
      ${DataVisualization()}
      ${HistoricalTrends()}
    </main>
    ${Footer()}
  `
}
