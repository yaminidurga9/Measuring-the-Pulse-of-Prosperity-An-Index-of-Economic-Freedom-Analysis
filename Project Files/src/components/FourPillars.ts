interface Factor {
  name: string;
  desc: string;
}

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  factors: Factor[];
  icon: string;
  color: string;
  score: string;
}

export function FourPillars(): string {
  const pillars: Pillar[] = [
    {
      id: 'rule-of-law',
      title: 'Rule of Law',
      subtitle: 'Property Rights, Government Integrity, Judicial Effectiveness',
      description: 'The Rule of Law pillar measures the extent to which a country\'s legal system protects private property rights and the enforcement of contracts. It assesses the likelihood of property seizure, the independence of the judiciary, and the integrity of government officials.',
      factors: [
        { name: 'Property Rights', desc: 'The ability to accumulate private property secured by clear laws' },
        { name: 'Government Integrity', desc: 'Prevention of corruption in government institutions' },
        { name: 'Judicial Effectiveness', desc: 'Fair and efficient judicial systems for dispute resolution' }
      ],
      icon: '⚖️',
      color: 'blue',
      score: 'Average: 52.3'
    },
    {
      id: 'government-size',
      title: 'Government Size',
      subtitle: 'Government Spending, Tax Burden, Fiscal Health',
      description: 'The Government Size pillar measures the burden imposed by government expenditures, taxation, and debt. Lower scores indicate higher government spending, heavier tax burdens, and deteriorating fiscal health.',
      factors: [
        { name: 'Government Spending', desc: 'Level of government expenditure as percentage of GDP' },
        { name: 'Tax Burden', desc: 'Marginal tax rates and overall tax burden on citizens' },
        { name: 'Fiscal Health', desc: 'Debt levels and overall fiscal sustainability' }
      ],
      icon: '🏛️',
      color: 'green',
      score: 'Average: 64.1'
    },
    {
      id: 'regulatory-efficiency',
      title: 'Regulatory Efficiency',
      subtitle: 'Business Freedom, Labor Freedom, Monetary Freedom',
      description: 'The Regulatory Efficiency pillar measures the ability of individuals and businesses to manage their economic activities without undue government interference. It evaluates the ease of starting and operating businesses, labor market flexibility, and price stability.',
      factors: [
        { name: 'Business Freedom', desc: 'Ease of starting, operating, and closing a business' },
        { name: 'Labor Freedom', desc: 'Flexibility in hiring, firing, and wage determination' },
        { name: 'Monetary Freedom', desc: 'Price stability and freedom from price controls' }
      ],
      icon: '📋',
      color: 'amber',
      score: 'Average: 58.7'
    },
    {
      id: 'open-markets',
      title: 'Open Markets',
      subtitle: 'Trade Freedom, Investment Freedom, Financial Freedom',
      description: 'The Open Markets pillar measures the extent to which individuals and businesses can freely trade and invest across borders. It evaluates tariff and non-tariff barriers, restrictions on foreign investment, and the efficiency of financial institutions.',
      factors: [
        { name: 'Trade Freedom', desc: 'Absence of tariffs and non-tariff trade barriers' },
        { name: 'Investment Freedom', desc: 'Freedom for both foreign and domestic investment' },
        { name: 'Financial Freedom', desc: 'Efficiency of banking and financial systems' }
      ],
      icon: '🌐',
      color: 'purple',
      score: 'Average: 61.4'
    }
  ]

  return `
    <section id="pillars" class="pillars">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-tag">The Framework</span>
          <h2 class="section-title">Four Pillars of Economic Freedom</h2>
          <p class="section-description">
            The Index measures economic freedom based on 12 quantitative and qualitative factors, 
            grouped into four broad categories that form the foundation of economic liberty.
          </p>
        </div>
        
        <div class="pillars-grid">
          ${pillars.map((pillar, index) => `
            <div class="pillar-card animate-on-scroll pillar-${pillar.color}" style="--delay: ${index * 0.1}s">
              <div class="pillar-header">
                <div class="pillar-icon">${pillar.icon}</div>
                <div class="pillar-score">${pillar.score}</div>
              </div>
              <h3 class="pillar-title">${pillar.title}</h3>
              <p class="pillar-subtitle">${pillar.subtitle}</p>
              <p class="pillar-description">${pillar.description}</p>
              
              <div class="pillar-factors">
                <h4>Key Factors</h4>
                <ul>
                  ${pillar.factors.map(factor => `
                    <li>
                      <span class="factor-name">${factor.name}</span>
                      <span class="factor-desc">${factor.desc}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="pillars-visual animate-on-scroll">
          <h3>Pillar Weight Distribution</h3>
          <div class="pillar-bars">
            <div class="pillar-bar">
              <div class="bar-label">Rule of Law</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: 25%"></div>
              </div>
              <div class="bar-value">25%</div>
            </div>
            <div class="pillar-bar">
              <div class="bar-label">Government Size</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: 25%"></div>
              </div>
              <div class="bar-value">25%</div>
            </div>
            <div class="pillar-bar">
              <div class="bar-label">Regulatory Efficiency</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: 25%"></div>
              </div>
              <div class="bar-value">25%</div>
            </div>
            <div class="pillar-bar">
              <div class="bar-label">Open Markets</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: 25%"></div>
              </div>
              <div class="bar-value">25%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
