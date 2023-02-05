import "./App.css";
import "./landing.css";
import "./Components/CSS/text.css";
import logo from "./images/coffee-cup.png";


function App() {
  return (
    <div className="App App-header">
      {/* div for opening time information */}
      <div className="opening-time">
        <h2>Opening Times</h2>
        <p>Monday - Friday: 7am - 5pm</p>
        <p>Saturday: 8am - 4pm</p>
        <p>Sunday: 9am - 3pm</p>
      </div>
      {/* div for contact information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Phone: 01234 567890</p>
        <p>Email: example@example.com</p>
      </div>
      {/* div for location information */}
      <div className="location">
        <h2>Location</h2>
        <p>123 Example Street</p>
        <p>Example Town</p>
        <p>Example County</p>
        <p>Example Postcode</p>
        <p>We are located next to the Spire</p>
      </div>
      {/* Sample Menu */}
      <div className="menu">
        <h2>Menu</h2>
        <p>Sample Menu</p>
        <ul>
          <li>Sample Item 1</li>
          <li>Sample Item 2</li>
          <li>Sample Item 3</li>
          <li>Sample Item 4</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
