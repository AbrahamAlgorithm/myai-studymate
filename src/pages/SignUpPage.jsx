import styles from './SignUpPage.module.css';

const SignUpPage = () => {
    return (
        <div className={styles.signUpContainer}>
            <div className={styles.signUpBox}>
                <div className={styles.signUpLeft}></div>
                <div className={styles.signUpRight}>
                    <h2 className={styles.signUpTitle}>Join us today!</h2>
                    <p className={styles.Paragraph}>Create an account with us first</p>
                    <form className={styles.signUpForm}>
                        <p className={styles.InputText}>Fullname</p>
                        <input className={styles.signUpInput} type="text" placeholder="Fullname" />
                        <p className={styles.InputText}>Email</p>
                        <input className={styles.signUpInput} type="text" placeholder="Email Address" />
                        <p className={styles.InputText}>Username</p>
                        <input className={styles.signUpInput} type="text" placeholder="Your Username" />
                        <p className={styles.InputText}>Password</p>
                        <input className={styles.signUpInput} type="password" placeholder="Password" />
                        <p className={styles.InputText}>Signup as</p>
                        <input className={styles.signUpInput} type="text" placeholder="User" />
                        <button className={styles.signUpButton} type="submit">Sign up</button>
                    </form>
                    <p className={styles.Terms}>
                        By creating an account, you agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>
                    </p>
                    <p className={styles.signUpTexts}>
                        <b>Already have an account? <a href="/sign-in" className={styles.signUpLink}>Sign In</a></b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
