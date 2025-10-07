# Firebase Setup Guide for Quantum Hackathon Registration

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project (e.g., "quantum-hackathon-pakistan")
4. Follow the setup steps (you can disable Google Analytics for this project)

## Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" (we'll set up security rules later)
4. Select a location (choose one closest to your users, e.g., asia-south1 for Pakistan)

## Step 3: Get Your Firebase Config

1. Go to Project Settings (gear icon in the left sidebar)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app with a name (e.g., "quantum-hackathon-web")
5. Copy the Firebase configuration object

## Step 4: Environment Variables ✅ CONFIGURED

The Firebase configuration has already been set up in `/workspaces/QUANTUM-hackathon/.env.local` with your project details:

- **Project ID**: quantum-hackathon-7694e
- **App ID**: 1:838964989873:web:c6e94237f3f41abe68b790
- **Analytics**: G-9BNX13T2B7

The configuration is ready to use!

## Step 5: Set up Firestore Security Rules

In Firebase Console, go to Firestore Database > Rules and replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to registrations collection
    match /registrations/{document} {
      allow read, write: if true; // For development only
      // In production, you should implement proper authentication
      // allow read: if request.auth != null && request.auth.token.admin == true;
      // allow write: if request.auth != null;
    }
  }
}
```

⚠️ **Important**: The above rules allow public access for development. In production, implement proper authentication.

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/register`
3. Fill out and submit the registration form
4. Check your Firestore console to see if the data was saved
5. Go to `http://localhost:3000/admin` to view the admin dashboard

## Features Included

### Registration Form (`/register`)
- Complete form matching the NILOP research assistantship structure
- Personal information, contact details, academic qualifications
- Additional quantum hackathon specific fields
- Form validation and submission to Firestore
- Success/error status messages
- Responsive design with quantum theme

### Admin Dashboard (`/admin`)
- View all registrations with filtering (all, pending, approved, rejected)
- Detailed view of individual registrations
- Approve/reject/delete registrations
- Export registrations to CSV
- Real-time statistics
- Status management

### Data Structure
Each registration includes:
- Personal info (name, father's name, CNIC, etc.)
- Contact details (email, mobile, address)
- Academic qualifications (multiple degrees supported)
- Experience details (programming, quantum knowledge)
- Application-specific fields (motivation, team preference)
- Metadata (submission timestamp, status)

## Accessing the Data

### Through Admin Dashboard
- Navigate to `/admin` to view and manage registrations
- Filter by status, export data, manage applications

### Direct Database Access
- Go to Firebase Console > Firestore Database
- Browse the `registrations` collection
- Each document represents one registration with all form data

### Programmatic Access
You can also query the data programmatically:

```javascript
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Get all registrations
const querySnapshot = await getDocs(collection(db, 'registrations'));

// Get approved registrations only
const approvedQuery = query(
  collection(db, 'registrations'), 
  where('status', '==', 'approved')
);
const approvedDocs = await getDocs(approvedQuery);
```

## Security Considerations

1. **Authentication**: In production, add Firebase Authentication
2. **Security Rules**: Implement proper Firestore security rules
3. **Admin Protection**: Protect the admin dashboard with authentication
4. **Environment Variables**: Keep your Firebase config secure
5. **Data Validation**: Add server-side validation for form submissions

## Next Steps

1. Set up Firebase Authentication for admin access
2. Implement email notifications for registration confirmations
3. Add file upload capability for documents/transcripts
4. Create automated backup systems
5. Set up monitoring and analytics