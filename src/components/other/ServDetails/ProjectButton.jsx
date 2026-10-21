export default function ProjectButton({ children = "Start your project", className = "" }) {
  return (
    <a className={`project-button ${className}`} href="#contact">
      {children}
    </a>
  );
}