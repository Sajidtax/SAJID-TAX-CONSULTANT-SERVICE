# Security Policy

## Reporting Security Issues

If you discover any security vulnerabilities or concerns related to **Sajid Tax Consultant Service**, please contact us directly:

- **Email:** workwithsajid@zohomail.in
- **Phone:** +91 77620 67143

Please do not open public issues for security vulnerabilities. All reports will be reviewed promptly.

## Security Measures in Place

1. **No Sensitive Data / Secrets:** No API keys, database credentials, or secret tokens are stored in the codebase or client bundle.
2. **Client-Side Sanitization:** All form inputs are sanitized to prevent script injection (XSS) and malformed payloads.
3. **Safe External Links:** All external links include el="noopener noreferrer" to prevent tab-nabbing / reverse tab-jacking.
4. **Security Headers:** Essential HTTP security headers and meta tags (
osniff, strict-origin-when-cross-origin, XSS protection) are enabled.
5. **Static Client Hosting:** The website is a purely static React SPA with zero server-side attack surface on GitHub Pages.
