# System Requirements

## Functional Requirements
1. Parse job application pages using a Chrome extension.
2. Automatically fill job application forms with predictions.
3. Track job applications in Google Sheets.
4. Manage user data and application details via a dashboard.
## Non-Functional Requirements
1. **Performance**: Forms should be filled in under 2 seconds.
2. **Scalability**: Support up to 50,000 applications.
3. **Security**: Encrypt sensitive user data and comply with GDPR.
4. **Usability**: Provide a user-friendly interface for end-users.
## Assumptions
- Users provide valid input (e.g., email, resume path).
- The system operates primarily on Chromium-based browsers.
## Constraints
- Must stay within AWS free tier limits.
- Requires browser-specific permissions for the Chrome extension.