
function Project() {
  const projects = [
    { name: 'Todo App', url: 'https://todo-app.com', completed: true },
    { name: 'Chat App', url: 'https://chat-app.com', completed: false },
    { name: 'Blog App', url: 'https://blog-app.com', completed: true },
    { name: 'E-commerce App', url: 'https://e-commerce-app.com', completed: false },
  ];

  return (
    <section id="project">
      <h2>Our Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.url}>{project.name}</a>
            {project.completed ? (
              <span>✅ Completed</span>
            ) : (
              <span>❌ In Progress</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Project;
