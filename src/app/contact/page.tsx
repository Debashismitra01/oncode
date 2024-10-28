"use client";

import React, { useState, FormEvent } from "react";
import styles from './page.module.css';

const Contact = () => {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("");
        setLoading(true);
        const formData = new FormData(event.currentTarget);

        // Use environment variable for the access key
        formData.append("access_key","023be67f-6c09-491c-99ea-84e7cb47430f");
        setSubmitted(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            event.currentTarget.reset(); // Show the submission confirmation
        } catch (error) {
            console.error("Submission error:", error);
            setResult("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={styles.contact} id="contact">
            {submitted ? (
                <div className={styles.overlay}>
                    <h2>We will contact You</h2>
                    <p>Your query is submitted. We will try to come with best solution for the specific and contact you. For any more query contact us at contact@oncode.in</p>
                    <a href="/">Go Back</a>
                </div>
            ) : (
                <>
                    <div className={styles.leftcontainer}>
                        <h2>Let's connect</h2>
                        <p>
                            I am available for freelance projects, open to contributing to open-source initiatives,
                            and ready to take on new work opportunities. Let's collaborate and create something amazing!
                            Feel free to reach out for any projects or contributions.
                        </p>
                    </div>
                    <form className={styles.rightcontainer} onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Enter your name" 
                            name="name" 
                            required
                        />
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email" 
                            name="email" 
                            required
                        />
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            id="message"
                            name="message" 
                            rows={5} 
                            placeholder="Enter your message"
                            required
                        ></textarea> 
                        <button className={styles.contactsubmit} disabled={loading}>
                            {loading ? "Sending..." : "Submit now"}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Contact;
