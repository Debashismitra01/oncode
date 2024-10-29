import React, { useState } from 'react';
import './accordion.css';

interface AccordionTileProps {
  title: string;
  content: string;
}

const AccordionTile: React.FC<AccordionTileProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-tile">
      <div className="accordion-header" onClick={toggleTile}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export const Accordion: React.FC = () => {
  const tiles = [
    { title: 'Website Development', content: 'Oncode offers custom website design and development services, ensuring a fully responsive and mobile-friendly experience. We handle both frontend and backend integration for a seamless user experience.' },
    { title: 'Mobile App Development', content: 'Our team specializes in developing user-friendly mobile applications for iOS and Android, with responsive interfaces, robust backend support, and API integration.' },
    { title: 'UI/UX Design', content: 'We provide comprehensive UI/UX design services, including wireframing, prototyping, and visual design focused on enhancing the user experience. Our designs cater to both web and mobile platforms.' },
    { title: 'DevOps Solutions', content: 'Oncode provides DevOps solutions for efficient development workflows, including CI/CD pipeline automation, cloud deployment, and infrastructure as code (IaC).' },
    { title: 'AI & Machine Learning Integration', content: 'We offer custom machine learning model development and AI-based analytics, integrating advanced AI/ML features directly into applications to provide valuable insights.' },
    { title: 'Backend Development', content: 'Our backend services include API creation and management, database setup and optimization, and building secure, scalable architectures for all applications.' },
    { title: 'Cloud Native Application Development', content: 'Oncode builds cloud-native applications designed to leverage the full capabilities of cloud platforms, ensuring scalability, flexibility, and ease of deployment.' },
    { title: 'Cybersecurity Solutions', content: 'We prioritize security by offering cybersecurity solutions, including threat assessment, vulnerability scanning, and secure coding practices, ensuring data protection and compliance.' },
    { title: 'Blockchain Development', content: 'We offer blockchain development services, including smart contract creation, decentralized applications (DApps), and secure transaction management for businesses seeking blockchain solutions.' },
    { title: 'IoT Development', content: 'Oncode develops Internet of Things (IoT) solutions for smart devices, including sensor integration, data collection, and remote device management for seamless connectivity.' },
    { title: 'Maintenance & Support', content: 'We provide ongoing maintenance and support services, including regular updates, security patches, bug fixes, and performance optimization for all projects.' },

  ];

  return (
    <div className="accordion">
        <h2 className="title">Our Services</h2>
      {tiles.map((tile, index) => (
        <AccordionTile key={index} title={tile.title} content={tile.content} />
      ))}
    </div>
  );
};

export default Accordion;
