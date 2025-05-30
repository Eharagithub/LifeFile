// Test Firebase Authentication
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebaseConfig';

// Function to test login with existing account
async function testExistingUserAuth(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Successfully authenticated with existing account:', userCredential.user.uid);
    console.log('User email:', userCredential.user.email);
    return userCredential.user;
  } catch (error: any) {
    console.error('Authentication error:', error.code, error.message);
    throw error;
  }
}

// Function to test creating a new account
async function testCreateUserAuth(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Successfully created new user account:', userCredential.user.uid);
    console.log('User email:', userCredential.user.email);
    return userCredential.user;
  } catch (error: any) {
    console.error('Account creation error:', error.code, error.message);
    throw error;
  }
}

// Example usage:
// To test with an existing account:
// testExistingUserAuth('test@example.com', 'password123');

// To test creating a new account:
// testCreateUserAuth('newuser@example.com', 'newpassword123');

// You can modify these functions to run them from your app or as standalone tests
export { testExistingUserAuth, testCreateUserAuth };

