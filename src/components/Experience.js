// components/Experience.js
import SlipCard from '../components/SlipCard';

const experiences = [
  {
    logo: '/Files/risk.png',
    details: [
      'Data Engineer | Nov-23 - Present',
      'Implemented end-to-end streaming pipelines between client APIs and Databricks.',
      'Utilized AWS EC2 instances to extract real-time data using Python.',
      'Leveraged Kafka streams and Apache Spark for ETL processes.',
      'Transformed data using DBT for integration with Salesforce.',
    ],
  },
  {
    logo: '/Files/tcs.png',
    details: [
      'Data Engineer | Aug-21 - Nov-23',
      'Implemented ETL processes for British Telecom using PySpark.',
      'Utilized Big Data ETL tools including DataProc, DataFlow, Spark, Airflow, and Pub/Sub.',
      'Developed BigQuery transformations using DBT.',
      'Led migration of data from Oracle to GCP.',
    ],
  }
];

const ExperienceSection = () => (
  <section id="experience">
    <h2>Work Experience</h2>
    {experiences.map((exp, index) => (
      <SlipCard
        key={index}
        logo={exp.logo}
        title={exp.title}
        period={exp.period}
        details={exp.details}
      />
    ))}
  </section>
);

export default ExperienceSection;
