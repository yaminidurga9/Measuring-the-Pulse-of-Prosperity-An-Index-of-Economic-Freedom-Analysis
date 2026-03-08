interface TrendData {
  year: number;
  global: number;
  europe: number;
  americas: number;
  asia: number;
  africa: number;
}

export function HistoricalTrends(): string {
  const trendData: TrendData[] = [
    { year: 2015, global: 60.3, europe: 66.8, americas: 58.9, asia: 59.2, africa: 53.1 },
    { year: 2016, global: 60.5, europe: 67.1, americas: 59.1, asia: 59.4, africa: 53.3 },
    { year: 2017, global: 60.9, europe: 67.5, americas: 59.5, asia: 59.8, africa: 53.6 },
    { year: 2018, global: 61.1, europe: 67.6, americas: 59.6, asia: 60.0, africa: 53.8 },
    { year: 2019, global: 60.8, europe: 67.2, americas: 59.3, asia: 59.7, africa: 53.5 },
    { year: 2020, global: 59.6, europe: 66.1, americas: 58.2, asia: 58.5, africa: 52.4 },
    { year: 2021, global: 60.0, europe: 66.5, americas: 58.6, asia: 58.9, africa: 52.8 },
    { year: 2022, global: 61.6, europe: 67.8, americas: 59.4, asia: 60.2, africa: 54.2 }
  ]

  const milestones = [
    {
      year: '1995',
      title: 'Index Inception',
      description: 'The Heritage Foundation and The Wall Street Journal publish the first Index of Economic Freedom.'
    },
    {
      year: '2008',
      title: 'Financial Crisis Impact',
      description: 'Global economic freedom declines as governments intervene heavily in markets worldwide.'
    },
    {
      year: '2015',
      title: 'Digital Economy Rise',
      description: 'Technological advancement drives improvements in business freedom across developed nations.'
    },
    {
      year: '2020',
      title: 'Pandemic Response',
      description: 'COVID-19 pandemic leads to unprecedented government intervention and temporary decline in economic freedom.'
    },
    {
      year: '2022',
      title: 'Recovery & Growth',
      description: 'Global economic freedom rebounds strongly with the highest average score since 2008.'
    }
  ]

  const maxValue = 70
  const minValue = 50
  const range = maxValue - minValue
  
  const getY = (value: number): number => 100 - ((value - minValue) / range) * 100

  const createPath = (key: keyof TrendData): string => {
    return trendData.map((d, i) => {
      const x = (i / (trendData.length - 1)) * 100
      const y = getY(d[key] as number)
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')
  }

  return `
    <section id="trends" class="trends">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-tag">Historical Analysis</span>
          <h2 class="section-title">Economic Freedom Over Time</h2>
          <p class="section-description">
            Tracking the evolution of economic freedom across regions from 2015 to 2022, 
            highlighting key trends and recovery patterns.
          </p>
        </div>
        
        <div class="trends-chart animate-on-scroll">
          <h3 class="chart-title">Regional Trends (2015-2022)</h3>
          <div class="chart-container">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="trend-svg">
              <defs>
                <linearGradient id="globalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
                </linearGradient>
              </defs>
              
              <line x1="0" y1="0" x2="100" y2="0" stroke="#e5e7eb" stroke-width="0.2"/>
              <line x1="0" y1="25" x2="100" y2="25" stroke="#e5e7eb" stroke-width="0.2"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" stroke-width="0.2"/>
              <line x1="0" y1="75" x2="100" y2="75" stroke="#e5e7eb" stroke-width="0.2"/>
              <line x1="0" y1="100" x2="100" y2="100" stroke="#e5e7eb" stroke-width="0.2"/>
              
              <path d="${createPath('global')}" fill="none" stroke="#3b82f6" stroke-width="1"/>
              <path d="${createPath('europe')}" fill="none" stroke="#10b981" stroke-width="1"/>
              <path d="${createPath('americas')}" fill="none" stroke="#f59e0b" stroke-width="1"/>
              <path d="${createPath('asia')}" fill="none" stroke="#8b5cf6" stroke-width="1"/>
              <path d="${createPath('africa')}" fill="none" stroke="#ef4444" stroke-width="1"/>
            </svg>
            
            <div class="chart-labels-y">
              <span>70</span>
              <span>65</span>
              <span>60</span>
              <span>55</span>
              <span>50</span>
            </div>
            
            <div class="chart-labels-x">
              ${trendData.map(d => `<span>${d.year}</span>`).join('')}
            </div>
          </div>
          
          <div class="chart-legend">
            <div class="legend-item">
              <span class="legend-line" style="background: #3b82f6;"></span>
              <span>Global Average</span>
            </div>
            <div class="legend-item">
              <span class="legend-line" style="background: #10b981;"></span>
              <span>Europe</span>
            </div>
            <div class="legend-item">
              <span class="legend-line" style="background: #f59e0b;"></span>
              <span>Americas</span>
            </div>
            <div class="legend-item">
              <span class="legend-line" style="background: #8b5cf6;"></span>
              <span>Asia-Pacific</span>
            </div>
            <div class="legend-item">
              <span class="legend-line" style="background: #ef4444;"></span>
              <span>Sub-Saharan Africa</span>
            </div>
          </div>
        </div>
        
        <div class="milestones-section animate-on-scroll">
          <h3 class="milestones-title">Key Milestones</h3>
          <div class="milestones-timeline">
            ${milestones.map((milestone, index) => `
              <div class="milestone-item" style="--delay: ${index * 0.1}s">
                <div class="milestone-year">${milestone.year}</div>
                <div class="milestone-content">
                  <h4>${milestone.title}</h4>
                  <p>${milestone.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="trends-insights animate-on-scroll">
          <h3>Key Findings</h3>
          <div class="insights-list">
            <div class="insight-item">
              <div class="insight-icon">📊</div>
              <div class="insight-content">
                <h4>Resilient Recovery</h4>
                <p>Despite the 2020 pandemic-induced decline, global economic freedom recovered to reach its highest level since 2008 by 2022.</p>
              </div>
            </div>
            <div class="insight-item">
              <div class="insight-icon">🌍</div>
              <div class="insight-content">
                <h4>Regional Divergence</h4>
                <p>Europe maintains the highest regional average, while Sub-Saharan Africa shows the most significant improvement potential.</p>
              </div>
            </div>
            <div class="insight-item">
              <div class="insight-icon">📈</div>
              <div class="insight-content">
                <h4>Consistent Growth</h4>
                <p>Over the past decade, 137 countries have improved their economic freedom scores, demonstrating a global trend toward liberalization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
