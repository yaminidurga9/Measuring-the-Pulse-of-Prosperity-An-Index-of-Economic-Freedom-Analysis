interface Factor {
  number: string;
  name: string;
  category: string;
  score: number;
  description: string;
  trend: 'stable' | 'improving' | 'declining';
}

export function TwelveFactors(): string {
  const factors: Factor[] = [
    {
      number: '01',
      name: 'Property Rights',
      category: 'Rule of Law',
      score: 48.5,
      description: 'The ability of individuals to accumulate private property, secured by clear laws that are fully enforced by the state.',
      trend: 'stable'
    },
    {
      number: '02',
      name: 'Government Integrity',
      category: 'Rule of Law',
      score: 44.2,
      description: 'Prevention of corruption within government institutions, including bribery, nepotism, and cronyism.',
      trend: 'declining'
    },
    {
      number: '03',
      name: 'Judicial Effectiveness',
      category: 'Rule of Law',
      score: 64.2,
      description: 'Fair and efficient judicial systems that protect individuals against arbitrary government actions.',
      trend: 'improving'
    },
    {
      number: '04',
      name: 'Government Spending',
      category: 'Government Size',
      score: 62.8,
      description: 'The burden of government expenditures, including consumption and transfer payments, as a percentage of GDP.',
      trend: 'stable'
    },
    {
      number: '05',
      name: 'Tax Burden',
      category: 'Government Size',
      score: 76.4,
      description: 'Marginal tax rates on both personal and corporate income and the overall level of taxation.',
      trend: 'improving'
    },
    {
      number: '06',
      name: 'Fiscal Health',
      category: 'Government Size',
      score: 53.1,
      description: 'Debt levels and overall fiscal sustainability, including budget deficits and public debt.',
      trend: 'declining'
    },
    {
      number: '07',
      name: 'Business Freedom',
      category: 'Regulatory Efficiency',
      score: 64.3,
      description: 'The ease of starting, operating, and closing a business, including regulatory procedures.',
      trend: 'improving'
    },
    {
      number: '08',
      name: 'Labor Freedom',
      category: 'Regulatory Efficiency',
      score: 56.8,
      description: 'The flexibility of labor regulations, including hiring, firing, and wage determination.',
      trend: 'stable'
    },
    {
      number: '09',
      name: 'Monetary Freedom',
      category: 'Regulatory Efficiency',
      score: 75.1,
      description: 'Price stability and the absence of government price controls and micromanagement.',
      trend: 'declining'
    },
    {
      number: '10',
      name: 'Trade Freedom',
      category: 'Open Markets',
      score: 74.6,
      description: 'The absence of tariffs and non-tariff barriers that affect imports and exports of goods and services.',
      trend: 'stable'
    },
    {
      number: '11',
      name: 'Investment Freedom',
      category: 'Open Markets',
      score: 52.8,
      description: 'The free flow of investment capital, both foreign and domestic, without restrictions.',
      trend: 'improving'
    },
    {
      number: '12',
      name: 'Financial Freedom',
      category: 'Open Markets',
      score: 56.9,
      description: 'The efficiency of banking and financial institutions and independence from government control.',
      trend: 'stable'
    }
  ]

  return `
    <section id="factors" class="factors">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-tag">Detailed Analysis</span>
          <h2 class="section-title">The 12 Factors</h2>
          <p class="section-description">
            Each of the 12 factors is graded on a scale of 0 to 100, with 100 representing the maximum freedom. 
            A country's overall score is derived by averaging these twelve economic freedoms.
          </p>
        </div>
        
        <div class="factors-grid">
          ${factors.map((factor, index) => `
            <div class="factor-card animate-on-scroll" style="--delay: ${index * 0.05}s">
              <div class="factor-header">
                <span class="factor-number">${factor.number}</span>
                <span class="factor-category">${factor.category}</span>
              </div>
              <h3 class="factor-name">${factor.name}</h3>
              <p class="factor-description">${factor.description}</p>
              <div class="factor-footer">
                <div class="factor-score">
                  <span class="score-value">${factor.score}</span>
                  <span class="score-label">/ 100</span>
                </div>
                <div class="factor-trend trend-${factor.trend}">
                  <span class="trend-icon">
                    ${factor.trend === 'improving' ? '↗' : factor.trend === 'declining' ? '↘' : '→'}
                  </span>
                  <span class="trend-label">${factor.trend}</span>
                </div>
              </div>
              <div class="factor-progress">
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${factor.score}%"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="factors-summary animate-on-scroll">
          <div class="summary-grid">
            <div class="summary-item">
              <span class="summary-value">61.6</span>
              <span class="summary-label">Global Average Score</span>
            </div>
            <div class="summary-item">
              <span class="summary-value">84.6</span>
              <span class="summary-label">Highest Score (Singapore)</span>
            </div>
            <div class="summary-item">
              <span class="summary-value">24.4</span>
              <span class="summary-label">Lowest Score (North Korea)</span>
            </div>
            <div class="summary-item">
              <span class="summary-value">+1.6</span>
              <span class="summary-label">Year-over-Year Change</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
