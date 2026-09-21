const config = window.VESTA_SITE_CONFIG || {};

document.querySelectorAll('[data-legal-entity]').forEach((node) => {
  node.textContent = config.legalEntity || 'Vesta';
});
document.querySelectorAll('[data-publisher-address]').forEach((node) => {
  node.textContent = config.address || 'Publisher address required before public release';
});
document.querySelectorAll('[data-privacy-email]').forEach((node) => {
  const email = config.privacyEmail || 'privacy@your-domain.example';
  node.textContent = email;
  if (node.tagName === 'A') {
    const query = node.getAttribute('href')?.split('?')[1];
    node.href = `mailto:${email}${query ? `?${query}` : ''}`;
  }
});
document.querySelectorAll('[data-support-email]').forEach((node) => {
  const email = config.supportEmail || 'support@your-domain.example';
  node.textContent = email;
  if (node.tagName === 'A') {
    const query = node.getAttribute('href')?.split('?')[1];
    node.href = `mailto:${email}${query ? `?${query}` : ''}`;
  }
});

const needsPublisherDetails = [config.privacyEmail, config.supportEmail].some(
  (value) => !value || value.endsWith('.example'),
);
if (needsPublisherDetails) {
  document.querySelectorAll('[data-draft-notice]').forEach((node) => {
    node.hidden = false;
  });
}
