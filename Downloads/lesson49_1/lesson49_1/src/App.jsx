import UserProfile from "./components/UserProfile.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>HW 49.1 – Тестування асинхронної логіки</h1>
      <p className="muted">
        Компонент робить GET-запит до jsonplaceholder і показує loading / data / error.
        Тести мокають fetch, щоб не залежати від API.
      </p>
      <div className="card">
        <UserProfile />
      </div>
    </div>
  );
}
