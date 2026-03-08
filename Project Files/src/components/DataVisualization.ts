export function DataVisualization(): string {
  return `
    <section id="data" class="data-viz">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-tag">Data Analysis</span>
          <h2 class="section-title">Economic Freedom by Region</h2>
          <p class="section-description">
            Visualizing economic freedom scores across different regions and comparing 
            performance across the four pillars.
          </p>
        </div>
        
        <div class="viz-grid">
          <div class="viz-card animate-on-scroll">
            <h3 class="viz-title">Regional Comparison</h3>
            <div class="region-chart">
              <div class="region-bar">
                <span class="region-name">Asia-Pacific</span>
                <div class="bar-wrapper">
                  <div class="bar" style="width: 60.2%"></div>
                  <span class="bar-value">60.2</span>
                </div>
              </div>
              <div class="region-bar">
                <span class="region-name">Europe</span>
                <div class="bar-wrapper">
                  <div class="bar" style="width: 67.8%"></div>
                  <span class="bar-value">67.8</span>
                </div>
              </div>
              <div class="region-bar">
                <span class="region-name">Americas</span>
                <div class="bar-wrapper">
                  <div class="bar" style="width: 59.4%"></div>
                  <span class="bar-value">59.4</span>
                </div>
              </div>
              <div class="region-bar">
                <span class="region-name">Middle East</span>
                <div class="bar-wrapper">
                  <div class="bar" style="width: 56.1%"></div>
                  <span class="bar-value">56.1</span>
                </div>
              </div>
              <div class="region-bar">
                <span class="region-name">Sub-Saharan Africa</span>
                <div class="bar-wrapper">
                  <div class="bar" style="width: 54.2%"></div>
                  <span class="bar-value">54.2</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="viz-card animate-on-scroll">
            <h3 class="viz-title">Pillar Performance</h3>
            <div class="pillar-radar">
              <div class="radar-container">
                <svg viewBox="0 0 200 200" class="radar-svg">
                  <polygon points="100,20 170,70 140,160 60,160 30,70" class="radar-grid" fill="none" stroke="#e5e7eb" stroke-width="1"/>
                  <polygon points="100,20 170,70 140,160 60,160 30,70" class="radar-grid" fill="none" stroke="#e5e7eb" stroke-width="1" transform="scale(0.8) translate(25,25)"/>
                  <polygon points="100,20 170,70 140,160 60,160 30,70" class="radar-grid" fill="none" stroke="#e5e7eb" stroke-width="1" transform="scale(0.6) translate(66.7,66.7)"/>
                  <polygon points="100,20 170,70 140,160 60,160 30,70" class="radar-grid" fill="none" stroke="#e5e7eb" stroke-width="1" transform="scale(0.4) translate(150,150)"/>
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#e5e7eb" stroke-width="1"/>
                  <line x1="100" y1="100" x2="170" y2="70" stroke="#e5e7eb" stroke-width="1"/>
                  <line x1="100" y1="100" x2="140" y2="160" stroke="#e5e7eb" stroke-width="1"/>
                  <line x1="100" y1="100" x2="60" y2="160" stroke="#e5e7eb" stroke-width="1"/>
                  <line x1="100" y1="100" x2="30" y2="70" stroke="#e5e7eb" stroke-width="1"/>
                  <polygon points="100,35 155,75 130,145 70,145 45,75" class="radar-data" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                </svg>
                <div class="radar-labels">
                  <span class="radar-label" style="top: 0; left: 50%;">Rule of Law</span>
                  <span class="radar-label" style="top: 25%; right: 0;">Gov Size</span>
                  <span class="radar-label" style="bottom: 10%; right: 10%;">Regulatory</span>
                  <span class="radar-label" style="bottom: 10%; left: 10%;">Open Markets</span>
                  <span class="radar-label" style="top: 25%; left: 0;">Fiscal Health</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="viz-card wide animate-on-scroll">
            <h3 class="viz-title">Score Distribution</h3>
            <div class="distribution-chart">
              <div class="dist-bar">
                <div class="dist-fill" style="height: 15%"></div>
                <span class="dist-label">0-20</span>
                <span class="dist-count">8</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 25%"></div>
                <span class="dist-label">20-40</span>
                <span class="dist-count">22</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 45%"></div>
                <span class="dist-label">40-50</span>
                <span class="dist-count">38</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 60%"></div>
                <span class="dist-label">50-60</span>
                <span class="dist-count">52</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 75%"></div>
                <span class="dist-label">60-70</span>
                <span class="dist-count">41</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 55%"></div>
                <span class="dist-label">70-80</span>
                <span class="dist-count">18</span>
              </div>
              <div class="dist-bar">
                <div class="dist-fill" style="height: 25%"></div>
                <span class="dist-label">80-100</span>
                <span class="dist-count">5</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="correlation-section animate-on-scroll">
          <h3>Economic Freedom & Prosperity</h3>
          <div class="correlation-grid">
            <div class="correlation-item">
              <div class="correlation-icon">📈</div>
              <h4>GDP Per Capita</h4>
              <p>Countries with higher economic freedom scores consistently show higher GDP per capita.</p>
              <span class="correlation-stat">+0.78 correlation</span>
            </div>
            <div class="correlation-item">
              <div class="correlation-icon">🏥</div>
              <h4>Health Outcomes</h4>
              <p>Greater economic freedom correlates with better health outcomes and life expectancy.</p>
              <span class="correlation-stat">+0.65 correlation</span>
            </div>
            <div class="correlation-item">
              <div class="correlation-icon">🎓</div>
              <h4>Education</h4>
              <p>Economically free societies invest more in education and human capital development.</p>
              <span class="correlation-stat">+0.71 correlation</span>
            </div>
            <div class="correlation-item">
              <div class="correlation-icon">🌱</div>
              <h4>Environment</h4>
              <p>Higher economic freedom is associated with better environmental quality.</p>
              <span class="correlation-stat">+0.58 correlation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
