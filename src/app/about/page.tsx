import React from 'react';
import "./About.css"

const About: React.FC = () => {
    return (
        <div className="about_container">
            <h1 className="title">About Oncode</h1>
            <h2 className="subtitle">Our Story</h2>
            <p>
                Hey there! Welcome to Oncode! 🎉 We’re not just another tech company; we’re a bunch of coding enthusiasts on a mission to help startups in India shine online. Our adventure started over countless cups of coffee and slices of pizza 🍕, where two friends couldn’t stop chatting about the magic of coding. Fast forward to today, and here we are, building awesome websites and apps while having a blast!
            </p>
            <p>
                We’ve faced our fair share of challenges (who hasn’t in tech?), but we tackled them head-on, fueled by our passion for innovation and, of course, our love for snacks. Every project we take on is like a new adventure, and we love working closely with our clients to bring their ideas to life. Together, we’re creating something special!
            </p>

            <h2 className="subtitle">Our Values</h2>
            <ul>
                <li><strong>Integrity:</strong> We keep it real. Honesty and transparency are at the heart of everything we do because trust is key in this biz.</li>
                <li><strong>Collaboration:</strong> Teamwork makes the dream work! We believe in harnessing our collective talents to deliver amazing results together.</li>
                <li><strong>Innovation:</strong> We’re all about thinking outside the box! Our team is always on the lookout for the latest tech trends and creative solutions to keep things fresh.</li>
                <li><strong>Community:</strong> Giving back is our jam! We love connecting with local tech communities and supporting open-source projects because we believe in lifting each other up.</li>
            </ul>

            <h2 className="subtitle">Partnership Options</h2>
            <p>Looking to team up? You’ve come to the right place! Here’s how we can partner together:</p>
            <ul>
                <li><strong>Freelancer Collaborations:</strong> If you’re a talented freelancer with a knack for coding or design, let’s join forces! We love working with like-minded folks to create amazing things.</li>
                <li><strong>Strategic Partnerships:</strong> Got a startup idea? We’d love to collaborate and help you turn your vision into reality. Together, we can make magic happen!</li>
                <li><strong>Community Engagement:</strong> We’re big fans of local tech events, workshops, and hackathons! If you’re part of a community that’s all about tech, let’s connect and inspire the next generation of coders together.</li>
            </ul>

            <h2 className="subtitle">Our Ongoing Love for Open Source</h2>
            <p>
                At Oncode, open source isn’t just a trend; it’s a love affair! ❤️ We believe in the power of collaboration and the impact of sharing knowledge. Our team actively contributes to open-source projects because we want to help others succeed and foster a vibrant tech community.
            </p>
            <p>
                By giving back, we’re not just supporting the next big thing; we’re building a future where everyone can thrive in tech. So, join us in our open-source journey—let’s innovate, inspire, and create together (with some pizza and coffee along the way)!
            </p>
            <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Oncode. All rights reserved.</p>
      </footer>
        </div>
    );
};

export default About;
