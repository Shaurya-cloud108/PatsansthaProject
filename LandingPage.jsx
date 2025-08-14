import React from "react";

function LandingPage() {
  // Close dropdown if clicking outside
  const closeDropdown = (event) => {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  };

  // Toggle Dropdown on Click
  const toggleDropdown = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
  };

  React.useEffect(() => {
    // Add event listener for dropdown close
    document.addEventListener("click", closeDropdown);

    // Check if the user has been redirected in the current session
    const hasRedirected = sessionStorage.getItem("hasRedirected");
    if (!hasRedirected) {
      sessionStorage.setItem("hasRedirected", "true");
      setTimeout(() => {
        window.location.href = "signup.html"; // Redirect to sign-up page
      }, 2000); // Delay of 2 seconds before redirection
    }

    return () => {
      // Clean up the event listener
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1>
          नाशिक जिल्हा पदवीधर प्राथमिक शिक्षक सहकारी पटसंस्था मर्यादित, नाशिक
        </h1>
      </header>

      {/* Taskbar Navigation */}
      <nav style={navStyle}>
        <a href="#">Home</a>
        <a href="#">Schemes</a>
        <a href="#">Loans</a>
        <a href="#">Services</a>

        {/* Dropdown for Downloads */}
        <div className="dropdown" style={{ position: "relative", display: "inline-block" }}>
          <a href="javascript:void(0)" onClick={toggleDropdown}>
            Downloads
          </a>
          <div className="dropdown-content" style={dropdownContentStyle}>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li style={dropdownItemStyle}>
                <a href="वार्षिक अहवाल २०२४.pdf" target="_blank" rel="noreferrer">
                  वार्षिक अहवाल २०२४.pdf
                </a>
              </li>
              {/* Add more PDF files as needed */}
            </ul>
          </div>
        </div>

        <a href="#">Contact Us</a>
      </nav>

      {/* Main Content Section */}
      <div style={mainContentStyle}>
        <section className="hero-section" style={heroSectionStyle}>
          <h2>
            Welcome to the "Nashik District Graduate Primary Teacher's Cooperative
            Credit Society Limited, Nashik".
          </h2>
          <p>Connect, Learn, and Grow with Fellow Teachers.</p>
        </section>
      </div>
    </div>
  );
}

// Inline styles
const headerStyle = {
  backgroundColor: "rgb(244, 99, 123)",
  color: "rgb(255, 255, 0)",
  padding: "15px 30px",
  textAlign: "center",
};

const navStyle = {
  backgroundColor: "#000",
  padding: "10px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const dropdownContentStyle = {
  display: "none",
  position: "absolute",
  backgroundColor: "#f1f1f1",
  minWidth: "160px",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  borderRadius: "4px",
  zIndex: 1,
};

const dropdownItemStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const mainContentStyle = {
  padding: "20px",
  marginTop: "20px",
};

const heroSectionStyle = {
  textAlign: "center",
  padding: "80px 20px",
  backgroundColor: "#fff",
};

export default LandingPage;
