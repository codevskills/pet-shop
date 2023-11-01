import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <header>
          <h2 className=" text-nowrap">Pet Shop</h2>
          <p>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            accusantium?"
          </p>
          <ul class="icons">
            <ion-icon class="icon" name="logo-facebook"></ion-icon>
            <ion-icon class="icon" name="logo-instagram"></ion-icon>
            <ion-icon class="icon" name="logo-twitter"></ion-icon>
            <ion-icon class="icon" name="logo-youtube"></ion-icon>
          </ul>
        </header>
        <aside>
          <ul class="category">
            <li>
              <h3>Project</h3>
            </li>
            <li>Houses</li>
            <li>Rooms</li>
            <li>Flats</li>
            <li>Apartments</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Company</h3>
            </li>
            <li>Objective</li>
            <li>Capital</li>
            <li>Security</li>
            <li>
              <a href="/career">Career</a>
            </li>
          </ul>
          <ul class="category">
            <li>
              <h3>Movement</h3>
            </li>
            <li>Movement</li>
            <li>Support us</li>
            <li>Pricing</li>
            <li>Renting</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Help</h3>
            </li>
            <li>Privacy</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </aside>
      </footer>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Footer;
