export default function Header({TodoLogo}) {
  return (
    <div className="header">
      <img src={TodoLogo} className="logo" />
      <h3>Todo List</h3>
    </div>
  );
}
