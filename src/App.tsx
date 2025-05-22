import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <div className="logo">NanAry</div>
          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Place</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="hero">
          <div className="hero-content">
            <h1>Act Online Booking<br />To Nusa Penida</h1>
            <p>Escape. Explore. Experience.</p>
          </div>
        </div>

        <div className="booking-button">
          <a href="#">Booking →</a>
        </div>
      </div>
    </div>
  );
}

export default App;
