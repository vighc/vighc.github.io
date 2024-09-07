// Placeholder for future scripts
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

function showProject(index) {
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${index * 100}%)`;
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % totalProjects;
  showProject(currentProjectIndex);
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
  showProject(currentProjectIndex);
}

console.log("Portfolio website loaded.");
