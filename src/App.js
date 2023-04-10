import "./App.css";
import React, { useState } from "react";
import StarRating from "./star-rating/StarRating";

function App() {
  const [rating, setRating] = useState(0);

  function handleRatingChange(newRating) {
    setRating(newRating);
  }
  return (
    <div className="App">
      <body>
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">
              Hungry Hungry
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    0
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* <!-- Header--> */}
        <header className="bg-dark py-5  banner">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder fonts-style-1">
                Hungry Hungry
              </h1>
              <p className="lead fw-normal text-white-50 mb-0 fonts-style-2">
                Good food is a good mood
              </p>
            </div>
          </div>
        </header>
        {/* <!-- Section--> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute a2">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://wallpaperaccess.com/full/1739077.jpg"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Idli</h5>
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      ₹25.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute a1">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://wallpaperaccess.com/full/1739050.jpg"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <br />
                    <br />
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Masala Dosai</h5>
                      {/* <!-- Product reviews--> */}
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">
                        ₹40.00{" "}
                      </span>
                      ₹35.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute a2">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZLe1X36LOW4HryD061ozoSay-9_gZXsmCQ&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <br />
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Pongal</h5>
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">
                        ₹50.00
                      </span>
                      ₹25.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute a2">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSO78QwsmVMRpZWApWHJBxHsjsyf8amzPCg&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Full Meals</h5>
                      {/* <!-- Product reviews--> */}
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      ₹100.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute a3">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6W4Rw3PLT0kgkkolEXlwRVrK3-ztm48Tlvw&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Parotta</h5>
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">
                        ₹50.00
                      </span>
                      ₹40.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute a2">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW5HdTxhqll0if9OkyTZbBIywYYO36iAo5Q&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Crispy Fried Chicken</h5>
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      ₹200.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark  mt-auto s1" href="#">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute a4">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqk8cRkWZ-W0woXgzvKjex24ZuKHuf0X8Jqg&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <br />
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Chettinad fish Fry</h5>
                      {/* <!-- Product reviews--> */}
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">
                        ₹180.00
                      </span>
                      ₹160.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute a2">
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR3clogXOORvma-5MEf7tmZ-EWPA7amMUqQ&usqp=CAU"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      <hr />
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Chicken Nugget</h5>
                      {/* <!-- Product reviews--> */}
                      <div>
                        <StarRating onChange={handleRatingChange} />
                        <h6>Click here to rating</h6>
                      </div>
                      {/* <!-- Product price--> */}
                      ₹190.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        order now
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto s1" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; hungryhungry@gmail.com 2023
            </p>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
