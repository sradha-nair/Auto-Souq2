import React, { useState } from 'react';

const Index = () => {
  const [filters, setFilters] = useState({
    make: 'None',
    type: 'None',
    kmsDriven: 'None',
    city: 'None',
    keywords: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleClearFilters = () => {
    setFilters({
      make: 'None',
      type: 'None',
      kmsDriven: 'None',
      city: 'None',
      keywords: '',
    });
  };

  return (
    <div>
      <nav>
        <img src="./assets/img/autosouq_logo_with_bg.png">
        

        <div class="nav-items">
            <a href="login.html">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Contact Us</a>
        </div>

        <div id="hamburger">
            <img src="./assets/img/hamburger.svg">
        </div>
      </nav>

      <video playsInline autoPlay muted loop poster="cake.jpg">
            <source src="assets\videos\body.mp4" type="video/webm">
            Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className="landing-banner">Your search for the ideal car ends here.</div>
      </div>

      <form method="GET" action="./search.html">
        <div className="search-filters">
          <select name="make" value={filters.make} onChange={handleFilterChange}>
            <option value="None" disabled>Make</option>
            <option>Toyota</option>
            <option>Mitsubishi</option>
            <option>Nissan/option>
            <option>Hyundai</option>
            <option>Ford</option>
            <option>Honda</option>
            <option>Chevrolet</option>
            <option>Volkswagen</option>
            <option>Jeep</option>
            <option>Land Rover</option>
            <option>Audi</option>
            <option>Ferrari</option>
            <option>Mercedes-Benz</option>
            <option>Ferrari</option>
          </select>
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="None" disabled>Type</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
            <option>Truck</option>
            <option>Coupe</option>
            <option>Convertible</option>
            <option>Luxury</option>
            
          </select>
          <select name="kmsDriven" value={filters.kmsDriven} onChange={handleFilterChange}>
            <option value="None" disabled>Kilometers</option>
            <option>0-10000</option>
            <option>10001-20000</option>
            {/* Add more kms-driven options here */}
          </select>
          <select name="city" value={filters.city} onChange={handleFilterChange}>
            <option value="None" disabled>City</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
            <option>Dubai</option>
            <option>Ajman</option>
            <option>Al Ain</option>
            <option>Riyadh</option>
            <option>Jeddah</option>
            <option>Doha</option>
            <option>Muscat</option>
            <option>Kuwait City</option>
            <option>Manama</option>
            
          </select>
          <div id="clear-filters" onClick={handleClearFilters}>Clear all</div>
        </div>

        <div className="search-group">
          <input type="text" name="keywords" value={filters.keywords} onChange={handleFilterChange} placeholder="Search" />
          <input type="submit" value="&#x1f50d;" />
        </div>
      </form>
    </div>
    <footer>
    <div class="footer">
    <div class="row">
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <a href="#"><i class="fa fa-youtube"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    </div>
    
    <div class="row">
    <ul>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Our Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms & Conditions</a></li>
    </ul>
    </div>
    
    <div class="row">
    AutoSouq Copyright © 2023 AutoSouq - All rights reserved 
    </div>
    </div>
    </footer>



  );
};

export default Index;
