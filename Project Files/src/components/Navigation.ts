export function Navigation(): string {
  return `
    <nav class="navigation">
      <div class="nav-container">
        <a href="#" class="nav-logo">
          <span class="logo-icon">◆</span>
          <span class="logo-text">Economic Freedom Index</span>
        </a>
        <ul class="nav-links">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#pillars">Four Pillars</a></li>
          <li><a href="#factors">12 Factors</a></li>
          <li><a href="#rankings">Rankings</a></li>
          <li><a href="#data">Data</a></li>
          <li><a href="#trends">Trends</a></li>
        </ul>
        <button class="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `
}
