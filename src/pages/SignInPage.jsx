import { useState } from 'react';
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', { // Update backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard'; // Update with your dashboard path
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Internal server error');
    }
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInBox}>
        <div className={styles.signInLeft}>
          <h2 className={styles.signInTitle}>Welcome back!</h2>
          <p className={styles.Paragraph}>Please enter your details!</p>
          <form className={styles.signInForm} onSubmit={handleSubmit}>
            <p className={styles.InputText}>Email</p>
            <input
              className={styles.signInInput}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className={styles.InputText}>Password</p>
            <input
              className={styles.signInInput}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className={styles.signInText}>
              <a href="#" className={styles.signInLink}>Forgot Password?</a>
            </p>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.signInButton} type="submit">
              Sign in
            </button>
            <p className={styles.Terms}>
              By signing in, you agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>
            </p>
          </form>
          <p className={styles.signInTexts}>
            <b>Don’t have an account? <a href="/sign-up" className={styles.signInLink}>Sign Up</a></b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
