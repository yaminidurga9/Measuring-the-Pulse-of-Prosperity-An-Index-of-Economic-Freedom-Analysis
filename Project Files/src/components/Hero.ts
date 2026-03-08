export function Hero(): string {
  return `
    <section class="hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge animate-on-scroll">
          <span class="badge-icon">📊</span>
          <span>2022 Heritage Foundation Report</span>
        </div>
        <h1 class="hero-title animate-on-scroll">
          Measuring the Pulse of
          <span class="highlight">Prosperity</span>
        </h1>
        <p class="hero-subtitle animate-on-scroll">
          An in-depth analysis of the Index of Economic Freedom — measuring how open markets, 
          limited government, and strong institutions create pathways to human flourishing.
        </p>
        <div class="hero-stats animate-on-scroll">
          <div class="stat-item">
            <span class="stat-number">184</span>
            <span class="stat-label">Countries Ranked</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">12</span>
            <span class="stat-label">Key Factors</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">Core Pillars</span>
          </div>
        </div>
        <div class="hero-cta animate-on-scroll">
          <a href="#introduction" class="btn btn-primary">
            Explore the Index
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a href="#rankings" class="btn btn-secondary">
            View Rankings
          </a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  `
}
