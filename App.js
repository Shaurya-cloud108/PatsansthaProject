import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file for styles

const App = () => {
    const [isMarathi, setIsMarathi] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEventsDropdown, setShowEventsDropdown] = useState(false);
    const [showLeadersDropdown, setShowLeadersDropdown] = useState(false);
    const [showDownloadsDropdown, setShowDownloadsDropdown] = useState(false);

    const toggleLanguage = () => {
        setIsMarathi(!isMarathi);
    };

    const toggleMenu = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleEventsDropdown = () => {
        setShowEventsDropdown(!showEventsDropdown);
        setShowLeadersDropdown(false);
        setShowDownloadsDropdown(false);
    };

    const toggleLeadersDropdown = () => {
        setShowLeadersDropdown(!showLeadersDropdown);
        setShowEventsDropdown(false);
        setShowDownloadsDropdown(false);
    };

    const toggleDownloadsDropdown = () => {
        setShowDownloadsDropdown(!showDownloadsDropdown);
        setShowEventsDropdown(false);
        setShowLeadersDropdown(false);
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <h1 id="header-title">नाशिक जिल्हा पदवीधर प्राथमिक शिक्षक सहकारी पटसंस्था मर्यादित, नाशिक</h1>
            </header>

            {/* Taskbar Navigation (Horizontal, Below Header) */}
            <nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className={`dropdown-content ${showDropdown ? 'show' : ''}`} id="nav-dropdown">
                    <a href="landing.html" id="nav-home">होम</a>
                    <div className="vertical-separator"></div>
                    <a href="#" id="nav-schemes">योजना</a>
                    <div className="vertical-separator"></div>
                    <a href="#" id="nav-loans">कर्ज</a>
                    <div className="vertical-separator"></div>
                    <a href="#" id="nav-services">सेवा</a>
                    <div className="vertical-separator"></div>

                    {/* Dropdown for Events */}
                    <div className="dropdown events-dropdown">
                        <a href="javascript:void(0)" onClick={toggleEventsDropdown} id="nav-events">कार्यक्रम</a>
                        <div className={`dropdown-content ${showEventsDropdown ? 'show' : ''}`}>
                            <ul>
                                <li><a href="event1.html">Event 1</a></li>
                                <li><a href="event2.html">Event 2</a></li>
                                <li><a href="event3.html">Event 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="vertical-separator"></div>

                    {/* Dropdown for Leaders */}
                    <div className="dropdown leaders-dropdown">
                        <a href="javascript:void(0)" onClick={toggleLeadersDropdown} id="nav-leaders">पदाधिकारी</a>
                        <div className={`dropdown-content ${showLeadersDropdown ? 'show' : ''}`}>
                            <ul>
                                <li><a href="leaders.html" id="nav-executive">कार्यकारी मंडळ</a></li>
                                <li><a href="taluka karyakari.html" id="nav-taluk">तालुका कार्यकारणी</a></li>
                                <li><a href="#" id="nav-leader2">Leader 2 - Political</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="vertical-separator"></div>

                    {/* Dropdown for Downloads */}
                    <div className="dropdown downloads-dropdown">
                        <a href="javascript:void(0)" onClick={toggleDownloadsDropdown} id="nav-downloads">डाउनलोड</a>
                        <div className={`dropdown-content ${showDownloadsDropdown ? 'show' : ''}`}>
                            <ul>
                                <li><a href="वार्षिक अहवाल २०२४.pdf" target="_blank" id="nav-annual-report">वार्षिक अहवाल २०२४.pdf</a></li>
                                <li><a href="report2025.pdf" target="_blank" id="nav-annual-report-2025">Annual Report 2025.pdf</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="vertical-separator"></div>

                    <a href="#" id="nav-contact">संपर्क साधा</a>

                    <div className="vertical-separator"></div>

                    {/* Language Toggle Button */}
                    <button className="toggle-button" onClick={toggleLanguage}>
                        {isMarathi ? "Switch to English" : "Switch to Marathi"}
                    </button>
                </div>
            </nav>

            <h2 id="section-title">काही क्षणचित्रे</h2>

            <div className="event-container">
                {/* Event 1 */}
                <div className="event">
                    <img src="EventsImg8.png" alt="Event 1 Image" />
                    <div className="event-text">
                        <h2 id="event1-title">सत्कार</h2>
                        <p id="event1-description">पत्रकार श्री. विजय पगारे यांच्या संस्तेतर्फे सत्कार </p>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 2 */}
                <div className="event">
                    <div className="event-text">
                        <h2 id="event2-title">सदिच्छा भेट</h2>
                        <p id="event2-description">मा. आ. सत्यजीत तांबे यांची पतसंस्थेत सदिच्छा भेट समवेत श्री. धनाईत सर व चेअरमन श्री. महारू निकम व संचालक मंडळ.</p>
                    </div>
                    <img src="EventsImg2.png" alt="Event 2 Image" />
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 3 */}
                <div className="event">
                    <img src="EventsImg3.png" alt="Event 3 Image" />
                    <div className="event-text">
                        <h2 id="event3-title">बैठक</h2>
                        <p id="event3-description">राज्यकार्यकारणी बैठक , पुणे.</p>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 4 */}
                <div className="event">
                    <div className="event-text">
                        <h2 id="event4-title">व्हा. चेअरमन पदी निवड</h2>
                        <p id="event4-description"> श्री. सगणे सर यांची व्हा. चेअरमन पदी निवड.</p>
                    </div>
                    <img src="EventsImg4.png" alt="Event 4 Image" />
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 5 */}
                <div className="event">
                    <img src="EventsImg5.png" alt="Event 5 Image" />
                    <div className="event-text">
                        <h2 id="event5-title">संचालक भेठ</h2>
                        <p id="event5-description">ग. स. बँक धुळे , यांच्या पातसंस्थेच्या संचालकांची भेठ.</p>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 6 */}
                <div className="event">
                    <div className="event-text">
                        <h2 id="event6-title">तज्ञ संचालक पदी निवड</h2>
                        <p id="event6-description">चेअरमन श्री. महारू नानाजी निकम यांची N.D.P.T नाशिक येथे तज्ञ संचालक पदी निवड.</p>
                    </div>
                    <img src="EventsImg6.png" alt="Event 6 Image" />
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 7 */}
                <div className="event">
                    <img src="EventsImg7.png" alt="Event 7 Image" />
                    <div className="event-text">
                        <h2 id="event7-title">सेवा निवृत्ती सत्कार</h2>
                        <p id="event7-description">संस्थेचे सभासद व संघटना जिल्हाध्यक्ष श्री. अंबादास अहिरे यांचा सेवा निवृत्ती निमित्त सत्कार.</p>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="separator" />

                {/* Event 8 */}
                <div className="event">
                    <div className="event-text">
                        <h2 id="event8-title">धनादेश</h2>
                        <p id="event8-description">कै. नामदेव सखाराम चौधरी (शाळा खोकरी) यांच्या वारसास संस्तेतर्फे धनादेश</p>
                    </div>
                    <img src="EventsImg1.png" alt="Event 8 Image" />
                </div>
            </div>

            <footer>
                <p>&copy; 2025 Nashik District Graduate Primary Teacher's Cooperative Credit Society Limited. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;