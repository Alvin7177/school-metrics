export function wireframeGlobe(className = "globe") {
  return `
    <svg class="${className}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `;
}

export function titleBackground() {
  return `<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />`;
}

export function goButtonBg() {
  return `<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />`;
}

export function gradeThemeClass(grade) {
  return `grade-theme-${grade}`;
}

export function phoneScreen(content, extraClass = "") {
  return `<div class="phone-screen ${extraClass}">${content}</div>`;
}

export function screenFooter(text) {
  return `<p class="screen-footer">${text}</p>`;
}

export function backToMainLink(action = "main") {
  return `<button type="button" class="link-btn" data-action="${action}">메인화면으로</button>`;
}
