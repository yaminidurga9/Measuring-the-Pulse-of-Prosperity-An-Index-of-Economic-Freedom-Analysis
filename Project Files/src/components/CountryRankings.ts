interface Country {
  rank: number;
  name: string;
  score: number;
  change: number;
  status: 'Free' | 'Mostly Free' | 'Moderately Free' | 'Mostly Unfree' | 'Repressed';
  region: string;
}

export function CountryRankings(): string {
  const topCountries: Country[] = [
    { rank: 1, name: 'Singapore', score: 84.4, change: +0.4, status: 'Free', region: 'Asia-Pacific' },
    { rank: 2, name: 'Switzerland', score: 84.2, change: +0.2, status: 'Free', region: 'Europe' },
    { rank: 3, name: 'Ireland', score: 82.0, change: +0.5, status: 'Free', region: 'Europe' },
    { rank: 4, name: 'New Zealand', score: 80.6, change: -0.3, status: 'Free', region: 'Asia-Pacific' },
    { rank: 5, name: 'Luxembourg', score: 80.6, change: +1.2, status: 'Free', region: 'Europe' },
    { rank: 6, name: 'Taiwan', score: 80.1, change: +0.6, status: 'Free', region: 'Asia-Pacific' },
    { rank: 7, name: 'Estonia', score: 80.0, change: +0.8, status: 'Free', region: 'Europe' },
    { rank: 8, name: 'Netherlands', score: 78.3, change: -0.2, status: 'Mostly Free', region: 'Europe' },
    { rank: 9, name: 'Finland', score: 78.1, change: +0.1, status: 'Mostly Free', region: 'Europe' },
    { rank: 10, name: 'Denmark', score: 77.8, change: -0.5, status: 'Mostly Free', region: 'Europe' }
  ]

  const bottomCountries: Country[] = [
    { rank: 175, name: 'Congo, Dem. Rep.', score: 49.5, change: -1.2, status: 'Repressed', region: 'Sub-Saharan Africa' },
    { rank: 176, name: 'Zimbabwe', score: 47.1, change: +0.3, status: 'Repressed', region: 'Sub-Saharan Africa' },
    { rank: 177, name: 'Sudan', score: 46.4, change: -0.8, status: 'Repressed', region: 'Middle East' },
    { rank: 178, name: 'Afghanistan', score: 42.5, change: -2.1, status: 'Repressed', region: 'Asia-Pacific' },
    { rank: 179, name: 'Equatorial Guinea', score: 41.7, change: -0.4, status: 'Repressed', region: 'Sub-Saharan Africa' },
    { rank: 180, name: 'Eritrea', score: 39.7, change: -0.2, status: 'Repressed', region: 'Sub-Saharan Africa' },
    { rank: 181, name: 'Cuba', score: 28.1, change: -0.5, status: 'Repressed', region: 'Americas' },
    { rank: 182, name: 'Venezuela', score: 24.8, change: -1.5, status: 'Repressed', region: 'Americas' },
    { rank: 183, name: 'North Korea', score: 5.2, change: -0.3, status: 'Repressed', region: 'Asia-Pacific' },
    { rank: 184, name: 'Syria', score: 0.0, change: -3.2, status: 'Repressed', region: 'Middle East' }
  ]

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      'Free': 'status-free',
      'Mostly Free': 'status-mostly-free',
      'Moderately Free': 'status-moderately-free',
      'Mostly Unfree': 'status-mostly-unfree',
      'Repressed': 'status-repressed'
    }
    return colors[status] || ''
  }

  const renderCountryRow = (country: Country): string => `
    <tr class="country-row">
      <td class="rank">${country.rank}</td>
      <td class="name">
        <span class="country-flag">${country.name.slice(0, 2).toUpperCase()}</span>
        ${country.name}
      </td>
      <td class="score">${country.score.toFixed(1)}</td>
      <td class="change ${country.change >= 0 ? 'positive' : 'negative'}">
        ${country.change >= 0 ? '+' : ''}${country.change.toFixed(1)}
      </td>
      <td class="status">
        <span class="status-badge ${getStatusColor(country.status)}">${country.status}</span>
      </td>
      <td class="region">${country.region}</td>
    </tr>
  `

  return `
    <section id="rankings" class="rankings">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-tag">Global Rankings</span>
          <h2 class="section-title">Country Rankings 2022</h2>
          <p class="section-description">
            Countries are graded and ranked based on their economic freedom scores. 
            The higher the score, the greater the level of economic freedom.
          </p>
        </div>
        
        <div class="rankings-legend animate-on-scroll">
          <div class="legend-item">
            <span class="legend-color status-free"></span>
            <span class="legend-label">Free (80-100)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color status-mostly-free"></span>
            <span class="legend-label">Mostly Free (70-79.9)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color status-moderately-free"></span>
            <span class="legend-label">Moderately Free (60-69.9)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color status-mostly-unfree"></span>
            <span class="legend-label">Mostly Unfree (50-59.9)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color status-repressed"></span>
            <span class="legend-label">Repressed (0-49.9)</span>
          </div>
        </div>
        
        <div class="rankings-grid">
          <div class="rankings-section animate-on-scroll">
            <h3 class="rankings-title">
              <span class="title-icon">🏆</span>
              Top 10 Most Free
            </h3>
            <div class="rankings-table-wrapper">
              <table class="rankings-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Country</th>
                    <th>Score</th>
                    <th>Change</th>
                    <th>Status</th>
                    <th>Region</th>
                  </tr>
                </thead>
                <tbody>
                  ${topCountries.map(renderCountryRow).join('')}
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="rankings-section animate-on-scroll">
            <h3 class="rankings-title">
              <span class="title-icon">⚠️</span>
              Bottom 10 Least Free
            </h3>
            <div class="rankings-table-wrapper">
              <table class="rankings-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Country</th>
                    <th>Score</th>
                    <th>Change</th>
                    <th>Status</th>
                    <th>Region</th>
                  </tr>
                </thead>
                <tbody>
                  ${bottomCountries.map(renderCountryRow).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="rankings-insights animate-on-scroll">
          <h3>Key Insights</h3>
          <div class="insights-grid">
            <div class="insight-card">
              <span class="insight-number">7</span>
              <p>Countries achieved "Free" status in 2022</p>
            </div>
            <div class="insight-card">
              <span class="insight-number">61.6</span>
              <p>Global average economic freedom score</p>
            </div>
            <div class="insight-card">
              <span class="insight-number">84.4</span>
              <p>Highest score achieved by Singapore</p>
            </div>
            <div class="insight-card">
              <span class="insight-number">+1.6</span>
              <p>Global average improvement from 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
