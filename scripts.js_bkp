let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

// Function to update the visibility of projects
function showProject(index) {
  projects.forEach((project, i) => {
    project.classList.remove('active'); // Remove 'active' class from all projects
    if (i === index) {
      project.classList.add('active');  // Add 'active' class only to the current project
    }
  });
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % totalProjects; // Increment project index
  showProject(currentProjectIndex);
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects; // Decrement project index
  showProject(currentProjectIndex);
}

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextProject();
  } else if (event.key === 'ArrowLeft') {
    prevProject();
  }
});

// Show the first project initially
showProject(currentProjectIndex);

console.log("Portfolio website loaded.");
