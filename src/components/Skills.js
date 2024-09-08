import React from 'react';

const skillsData = [
  { category: 'Language', name: 'Python', rating: '★★★★☆' },
  { category: 'Language', name: 'SQL', rating: '★★★★☆' },
  { category: 'Language', name: 'Bash', rating: '★★★☆☆' },
  { category: 'Cloud', name: 'Google Cloud Platform(GCP)', rating: '★★★★☆' },
  { category: 'Cloud', name: 'Amazon Web Services(AWS)', rating: '★★★★☆' },
  { category: 'Tools/Frameworks', name: 'Apache Spark', rating: '★★★★☆' },
  { category: 'Tools/Frameworks', name: 'DBT', rating: '★★★☆☆' },
  { category: 'Tools/Frameworks', name: 'Airflow', rating: '★★★★☆' },
  { category: 'Tools/Frameworks', name: 'Databricks', rating: '★★★★☆' },
  { category: 'Tools/Frameworks', name: 'Kafka', rating: '★★★☆☆' },
  { category: 'Tools/Frameworks', name: 'Terraform', rating: '★★★★☆' },
  { category: 'Tools/Frameworks', name: 'SSIS', rating: '★★★☆☆' },
];

const Skills = () => {
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section>
      <h2>Skills</h2>
      {Object.keys(groupedSkills).map((category, index) => (
        <div key={index} className="skill-category">
          <h4>{category}:&nbsp;</h4>
          <div className="skill-list">
            {groupedSkills[category].map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.name}
                <div className="skill-popup">
                  <img src={`/Files/skill_logos/${skill.name}.png`} alt={skill.name} />
                  <br />
                  {skill.rating}
                </div>
                {index < groupedSkills[category].length - 1 && ', '}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
