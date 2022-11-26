import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC4txQk25IQuH_9HGP2BCnJRpFGBTIo4IU',
  authDomain: 'blog-ef4ab.firebaseapp.com',
  projectId: 'blog-ef4ab',
  storageBucket: 'blog-ef4ab.appspot.com',
  messagingSenderId: '433151455436',
  appId: '1:433151455436:web:a19bd85dce8b90ae6d1269',
  measurementId: 'G-R1JV95SYNZ',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
