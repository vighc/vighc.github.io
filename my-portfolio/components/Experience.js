// components/Experience.js
import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Work Experience</h2>
    <div>
      <h3>Riskonnect | Data Engineer</h3>
      <p>Nov-23 - Present</p>
      <ul>
        <li>Implemented end-to-end streaming pipelines between client APIs and Databricks.</li>
        <li>Utilized AWS EC2 instances to extract real-time data using Python.</li>
        <li>Leveraged Kafka streams and Apache Spark for ETL processes.</li>
        <li>Transformed data using DBT for integration with Salesforce.</li>
      </ul>
    </div>
    <div>
      <h3>TCS | Data Engineer</h3>
      <p>Aug-21 - Nov-23</p>
      <ul>
        <li>Implemented ETL processes for British Telecom using PySpark.</li>
        <li>Utilized Big Data ETL tools including DataProc, DataFlow, Spark, Airflow, and Pub/Sub.</li>
        <li>Developed BigQuery transformations using DBT.</li>
        <li>Led migration of data from Oracle to GCP.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
