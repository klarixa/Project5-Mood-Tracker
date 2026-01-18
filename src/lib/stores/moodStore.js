// ============================================
// MOCK MOOD STORE - Working WITHOUT Firebase
// ============================================
// ✅ This allows students to see results immediately (<30 seconds)
// ⚠️ TODO Phase 2: Replace with Firebase Firestore integration
//
// Learning approach:
// 1. First: Learn Svelte patterns with working mock data
// 2. Then: Add Firebase integration (your TODO)

import { writable } from 'svelte/store';

// ✅ WORKING: Mock mood data (simulates Firebase)
const mockMoods = [
  {
    id: 1,
    mood: 'amazing',
    note: 'Had an amazing day at school! Learned so much.',
    timestamp: new Date('2024-01-15T14:30:00'),
    userEmail: 'demo@example.com'
  },
  {
    id: 2,
    mood: 'happy',
    note: 'Finished my project ahead of schedule!',
    timestamp: new Date('2024-01-14T10:15:00'),
    userEmail: 'demo@example.com'
  },
  {
    id: 3,
    mood: 'okay',
    note: 'Just a regular day, nothing special.',
    timestamp: new Date('2024-01-13T16:45:00'),
    userEmail: 'demo@example.com'
  },
  {
    id: 4,
    mood: 'sad',
    note: 'Feeling a bit down today, but tomorrow will be better.',
    timestamp: new Date('2024-01-12T09:20:00'),
    userEmail: 'demo@example.com'
  }
];

// Create writable store with mock data
export const moods = writable(mockMoods);

// ✅ WORKING: Add mood function
export function addMood(moodValue, noteText) {
  moods.update(items => [
    {
      id: Date.now(), // Use timestamp as unique ID
      mood: moodValue,
      note: noteText.trim() || '',
      timestamp: new Date(),
      userEmail: 'demo@example.com'
    },
    ...items // Add new mood at the beginning
  ]);
}

// ✅ WORKING: Delete mood function
export function deleteMood(id) {
  moods.update(items => items.filter(item => item.id !== id));
}

// ✅ WORKING: Helper function to get mood configuration
export function getMoodConfig(moodValue) {
  const moodOptions = [
    { value: 'amazing', emoji: '😄', label: 'Amazing', color: '#48bb78' },
    { value: 'happy', emoji: '😊', label: 'Happy', color: '#38b2ac' },
    { value: 'okay', emoji: '😐', label: 'Okay', color: '#ecc94b' },
    { value: 'sad', emoji: '😢', label: 'Sad', color: '#ed8936' },
    { value: 'terrible', emoji: '😭', label: 'Terrible', color: '#f56565' }
  ];

  return moodOptions.find(m => m.value === moodValue) || moodOptions[2]; // Default to 'okay'
}

// ✅ WORKING: Format timestamp nicely
export function formatTimestamp(timestamp) {
  if (!timestamp) return 'Just now';

  // Calculate time difference
  const now = new Date();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Return appropriate format
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  // For older entries, show full date
  return timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// ⚠️ TODO Phase 2: Replace Mock Store with Firebase Firestore
//
// When you're ready to add Firebase integration:
// 1. Import Firestore functions: collection, addDoc, query, where, orderBy, onSnapshot, deleteDoc
// 2. Replace addMood() to use addDoc() with Firestore
// 3. Set up onSnapshot() listener for real-time updates
// 4. Replace deleteMood() to use deleteDoc()
// 5. Filter moods by userId: where('userId', '==', user.uid)
//
// Firebase Integration Guide:
// - Collection name: 'moods'
// - Document structure: { userId, mood, note, timestamp }
// - Use Timestamp.now() for timestamp field
// - Always include userId for user-specific filtering
//
// Documentation:
// - Firestore CRUD: https://firebase.google.com/docs/firestore/quickstart
// - Real-time updates: https://firebase.google.com/docs/firestore/query-data/listen
