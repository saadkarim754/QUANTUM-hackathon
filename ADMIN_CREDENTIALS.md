# Admin Access Credentials

## Login Information

**Admin Login URL**: `http://localhost:3000/admin-login`

### Credentials
- **Username**: `quantumadmin`
- **Password**: `QH2026_Admin!@#`

## How to Access

1. **From Homepage**: Scroll down to the footer and click the "🔐 Admin" button
2. **Direct URL**: Navigate to `/admin-login`
3. **Enter credentials** above to access the admin dashboard
4. **Manage registrations** from the protected admin panel

## Features Available

### Admin Dashboard (`/admin`)
- View all hackathon registrations
- Filter by status (pending, approved, rejected)
- Detailed view of each registration
- Approve/reject applications
- Delete registrations if needed
- Export all data to CSV
- Real-time statistics

### Security Features
- **Protected Routes**: Admin dashboard is only accessible after login
- **Session Persistence**: Login state persists across browser sessions
- **Automatic Redirect**: Unauthorized access redirects to login page
- **Logout Functionality**: Secure logout clears session

## Admin Panel Location

The admin login button is located in the website footer:
- Styled as a subtle button with lock icon
- Positioned next to "Contact Us" and "Partner With Us"
- Only visible to those who know to look for it

## Important Notes

⚠️ **Security Reminder**: Change these credentials before deploying to production!

🔒 **Access Control**: Only share these credentials with authorized personnel

📊 **Data Management**: All registration data is stored securely in Firestore

🚪 **Session Management**: Always logout when finished using the admin panel