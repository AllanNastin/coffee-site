import "./App.css";
import "./landing.css";
import "./Components/CSS/text.css";
import "./Components/CSS/flex.css";

function App() {
  return (
    <div className="App App-header container">
      {/* div for opening time information */}
      <div className="opening-time item">
        <h2>Opening Times</h2>
        <p>Monday - Friday: 7am - 5pm</p>
        <p>Saturday: 8am - 4pm</p>
        <p>Sunday: 9am - 3pm</p>
      </div>
      {/* div for contact information */}
      <div className="contact-info item">
        <h2>Contact Us</h2>
        <p>Phone: 01234 567890</p>
        <p>Email: example@example.com</p>
      </div>
      {/* div for location information */}
      {/* Sample Menu */}
      <div className="menu item">
        <h2>Sample Menu</h2>
        <p>Sample Item 1</p>
        <p>Sample Item 2</p>
        <p>Sample Item 3</p>
        <p>Sample Item 4</p>
      </div>
      <div className="location item">
        <h2>Location</h2>
        <p>123 Example Street</p>
        <p>Example Town</p>
        <p>Example County</p>
        <p>Example Postcode</p>
        <p>We are located next to the Spire</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.406300953082!2d-6.262108412233317!3d53.35063036875858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e85cf628fd3%3A0x9f8bdda6cb473d3c!2sInsomnia%20Coffee%20Company!5e0!3m2!1sen!2sie!4v1675608206382!5m2!1sen!2sie"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
