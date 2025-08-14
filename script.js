// Toggle Navbar visibility
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// Toggle Dropdown for Events
function toggleEventsDropdown() {
    var eventsDropdown = document.querySelector('#nav-events ~ .dropdown-content');
    var leadersDropdown = document.querySelector('#nav-leaders ~ .dropdown-content');
    var downloadsDropdown = document.querySelector('#nav-downloads ~ .dropdown-content');

    // Toggle the events dropdown
    eventsDropdown.classList.toggle('show');

    // Close other dropdowns if they are open
    if (leadersDropdown.classList.contains('show')) {
        leadersDropdown.classList.remove('show');
    }
    if (downloadsDropdown.classList.contains('show')) {
        downloadsDropdown.classList.remove('show');
    }
}

// Toggle Dropdown for Leaders
function toggleLeadersDropdown() {
    var leadersDropdown = document.querySelector('#nav-leaders ~ .dropdown-content');
    var downloadsDropdown = document.querySelector('#nav-downloads ~ .dropdown-content');
    var eventsDropdown = document.querySelector('#nav-events ~ .dropdown-content');

    // Toggle the leaders dropdown
    leadersDropdown.classList.toggle('show');

    // Close other dropdowns if they are open
    if (downloadsDropdown.classList.contains('show')) {
        downloadsDropdown.classList.remove('show');
    }
    if (eventsDropdown.classList.contains('show')) {
        eventsDropdown.classList.remove('show');
    }
}

// Toggle Dropdown for Downloads
function toggleDownloadsDropdown() {
    var downloadsDropdown = document.querySelector('#nav-downloads ~ .dropdown-content');
    var leadersDropdown = document.querySelector('#nav-leaders ~ .dropdown-content');
    var eventsDropdown = document.querySelector('#nav-events ~ .dropdown-content');

    // Toggle the downloads dropdown
    downloadsDropdown.classList.toggle('show');

    // Close other dropdowns if they are open
    if (leadersDropdown.classList.contains('show')) {
        leadersDropdown.classList.remove('show');
    }
    if (eventsDropdown.classList.contains('show')) {
        eventsDropdown.classList.remove('show');
    }
}

// Close dropdown if clicked outside
document.addEventListener('click', function (event) {
    var leadersDropdown = document.querySelector('#nav-leaders ~ .dropdown-content');
    var downloadsDropdown = document.querySelector('#nav-downloads ~ .dropdown-content');
    var eventsDropdown = document.querySelector('#nav-events ~ .dropdown-content');

    if (!leadersDropdown.contains(event.target) && !event.target.matches('#nav-leaders')) {
        leadersDropdown.classList.remove('show');
    }
    if (!eventsDropdown.contains(event.target) && !event.target.matches('#nav-events')) {
        eventsDropdown.classList.remove('show');
    }
    if (!downloadsDropdown.contains(event.target) && !event.target.matches('#nav-downloads')) {
        downloadsDropdown.classList.remove('show');
    }
});


const talukaData = {
    "Nashik - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person A", contact: "1234567890" },
        { srNo: 2, name: "Person B", contact: "0987654321" },
        { srNo: 3, name: "Person B", contact: "0987654321" }
    ],
    "Malegaon - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person C", contact: "1111111111" },
        { srNo: 2, name: "Person D", contact: "2222222222" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Igatpuri - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Baglan - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Kalwan - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Surgana - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Deola - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Nandgaon - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Chandvad - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Dindori - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Peth - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Trimbakeshwar - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Niphad - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Yeola - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
    "Sinnar - कार्यकारणी पदाधिकारी": [
        { srNo: 1, name: "Person E", contact: "3333333333" },
        { srNo: 2, name: "Person F", contact: "4444444444" },
        { srNo: 2, name: "Person B", contact: "0987654321" }
    ],
};

const modal = document.getElementById("modal");
const talukaNameElement = document.getElementById("taluka-name");
const talukaDataElement = document.getElementById("taluka-data");

document.querySelectorAll(".taluka").forEach(taluka => {
    taluka.addEventListener("click", () => {
        const talukaName = taluka.dataset.taluka;
        talukaNameElement.textContent = talukaName;
        talukaDataElement.innerHTML = talukaData[talukaName]
            .map(data => `
                <tr>
                    <td>${data.srNo}</td>
                    <td>${data.name}</td>
                    <td>${data.contact}</td>
                </tr>
            `).join("");
        modal.style.display = "flex";
    });
});

function closeModal() {
    modal.style.display = "none";
}

document.querySelectorAll('.taluka').forEach(taluka => {
    taluka.addEventListener('mouseover', (e) => {
        const mapContainer = document.querySelector('.map-container');
        const shadowOffset = 20; // Set the intensity of the shadow effect

        // Calculate the mouse position relative to the map container
        const mapRect = mapContainer.getBoundingClientRect();
        const mouseX = e.clientX - mapRect.left;
        const mouseY = e.clientY - mapRect.top;

        // Adjust shadow based on mouse position
        const shadowX = (mouseX - mapRect.width / 2) / mapRect.width * shadowOffset;
        const shadowY = (mouseY - mapRect.height / 2) / mapRect.height * shadowOffset;

        // Set dynamic text shadow based on mouse position
        taluka.style.textShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.6)`;
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const mapInfoSection = document.getElementById('map-info');
    const sectionPosition = mapInfoSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Trigger when section is 80% in view

    if (sectionPosition < screenPosition) {
        mapInfoSection.classList.add('show');
        document.querySelector('.map-section').classList.add('show'); // Add show class
        document.querySelector('.info-section').classList.add('show'); // Add show class
    } else {
        document.querySelector('.map-section').classList.remove('show'); // Remove show class
        document.querySelector('.info-section').classList.remove('show'); // Remove show class
    }
});

// Check if the user has already been redirected in the session
if (!sessionStorage.getItem('redirected')) {
    // Redirect to the sign-in page after 30 seconds if not redirected already
    setTimeout(function() {
        sessionStorage.setItem('redirected', 'true');
        window.location.href = 'signup.html'; // Replace 'signup.html' with your actual sign-in page
    }, 30000);
}