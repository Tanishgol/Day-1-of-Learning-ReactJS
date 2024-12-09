import { Navbar, Nav } from 'react-bootstrap';
import NavLogo from './assets/blinkit-logo.png';
import BabyCare from './assets/babycare.jpeg';
import PetCare from './assets/Pet-Care.jpeg';
import pharmacy from './assets/pharmacy.jpeg';
import attaRiceDal from './assets/Images/Atta-Rice-Dal.png';
import babyCare from './assets/Images/BabyCare.png';
import bakeryBiscuits from './assets/Images/Bakery-Biscuits.png';
import breakfastInstantFood from './assets/Images/Breakfast-Instant-Food.png';
import chickenMeatFish from './assets/Images/Chicken-Meat-Fish.png';
import cleaningEssentials from './assets/Images/Cleaing-Essentials.png';
import coldDrinkJuice from './assets/Images/Cold-Drink-Juice.png';
import dairyBreadEggs from './assets/Images/Dairy-Bread-Eggs.png';
import fruitsVegetables from './assets/Images/Fruits-Vegetables.png';
import masalaOil from './assets/Images/Masala-Oil.png';
import organicHealthyLiving from './assets/Images/Organic-Healthy-Living.png';
import paanCorner from './assets/Images/Paan-Corner.jpg';
import personalCare from './assets/Images/Personal-Care.png';
import petCare from './assets/Images/Pet-Care.png';
import pharmaWellness from './assets/Images/Pharma-Wellness.png';
import saucesSpreads from './assets/Images/Sauces-Spreads.png';
import snacksMunchies from './assets/Images/Snacks-Munchies.png';
import sweetTooth from './assets/Images/SweetTooth.png';
import teaCoffeeHealthDrink from './assets/Images/Tea-Coffee-Health-Drink.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <section className="bg-color-#004080">
        <div className="container-flui">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img src={NavLogo} alt="Blinkit Logo" width={"75"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="me-auto text-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <form className="d-flex">
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control me-2"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </section>
      <section className="container mt-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={BabyCare} alt="Image of BabyCare" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={PetCare} alt="Image of PetCare" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={pharmacy} alt="Image of Pharmacy" />
          </div>
        </div>
      </section>
      <section className="container mt-4">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={attaRiceDal} alt="Atta Rice Dal" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={bakeryBiscuits} alt="Bakery Biscuits" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={breakfastInstantFood} alt="Breakfast Instant Food" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={chickenMeatFish} alt="Chicken Meat Fish" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={babyCare} alt="Baby Care" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={cleaningEssentials} alt="Cleaning Essentials" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={coldDrinkJuice} alt="Cold Drink Juice" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={dairyBreadEggs} alt="Dairy Bread Eggs" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={fruitsVegetables} alt="Fruits Vegetables" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={masalaOil} alt="Masala Oil" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={organicHealthyLiving} alt="Organic Healthy Living" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={paanCorner} alt="Paan Corner" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={personalCare} alt="Personal Care" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={petCare} alt="Pet Care" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={pharmaWellness} alt="Pharma Wellness" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={saucesSpreads} alt="Sauces Spreads" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={snacksMunchies} alt="Snacks Munchies" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={sweetTooth} alt="Sweet Tooth" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-flex justify-content-center">
            <img className="img-fluid" src={teaCoffeeHealthDrink} alt="Tea Coffee Health Drink" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;