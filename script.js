const adminGrid = document.getElementById('admin-grid');

const renderAdminCards = (data) => {
    adminGrid.innerHTML = ''; 

    data.forEach(admin => {
        const statusClass = admin.status === 'confirmed' ? 'status-confirmed' : 'status-pending';
        const statusText = admin.status === 'confirmed' ? '✔️ Verified' : '🕒 Pending';

        let contactHTML = '';
        let searchContactData = ''; 

        if (admin.contacts && admin.contacts.length > 0) {
            admin.contacts.forEach(contact => {
                const contactName = contact.name;
                const pNum = contact.phone;

                searchContactData += `${contactName.toLowerCase()} ${pNum ? pNum.toLowerCase() : ''} `;

                if (pNum) {
                    const phoneDigits = pNum.replace(/[\s\+]/g, ''); 

                    contactHTML += `
                        <p style="font-weight: 500; margin-bottom: 2px;">${contactName}</p>
                        <p class="contact-info">
                            <a href="https://wa.me/${phoneDigits}" target="_blank" style="color:var(--blue); font-weight: 600; text-decoration: none;">
                                📱 ${pNum}
                            </a>
                        </p>
                    `;
                } else {
                    contactHTML += `
                        <p style="font-weight: 500; margin-bottom: 2px;">${contactName}</p>
                        <p class="contact-info text-muted" style="margin-bottom: 8px;">Contact details pending</p>
                    `;
                }
            });
        } else if (admin.status === 'pending') {
            contactHTML = `<p class="contact-info text-muted">No contacts listed yet</p>`;
        }

        let mailHTML = '';
        if (admin.mailto) {
            mailHTML = `
                <p class="contact-info" style="margin-top: 10px; margin-bottom: 5px;">
                    <a href="mailto:${admin.mailto}" style="color:var(--orange, #f7931e); font-weight: 600; text-decoration: none;">
                        📧 Email
                    </a>
                </p>
            `;
        }

        let locationHTML = ''; 
        if (admin.location === 'pending') {
            locationHTML = `
                <p class="small text-muted" style="margin-top: 5px;">
                    <i class="fas fa-map-marker-alt"></i> Location details pending
                </p>
            `;
        } else if (admin.location === 'whatsapp') {
            locationHTML = `
                <p style="margin-top: 5px;">
                    <a href="https://chat.whatsapp.com/I5yMSaER6t93EtfgcgJneK?mode=hqrt3" target="_blank"
                        style="color:#25D366; font-weight: 600; text-decoration: none;">
                        🔗 Official Whatsapp Group
                    </a>
                </p>
            `;
        } else if (admin.location && admin.location.startsWith('http')) {
            locationHTML = `
                <p style="margin-top: 5px;">
                    <a href="${admin.location}" target="_blank"
                        style="color:var(--orange); text-decoration: none;">
                        <i class="fas fa-map-marker-alt"></i> View Location
                    </a>
                </p>
            `;
        }

        const searchData = `${admin.area.toLowerCase()} ${searchContactData} ${admin.status.toLowerCase()} ${admin.location.toLowerCase()}`;
        
        const cardHTML = `
            <div class="admin-card" data-search="${searchData}">
                <strong>🗺️ ${admin.area}</strong>
                ${contactHTML}
                ${locationHTML}
                ${mailHTML} <p class="status-badge ${statusClass}">${statusText}</p>
            </div>
        `;

        adminGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
};

// render using the global variable from data.js
renderAdminCards(ADMIN_CONTACT_DATA);

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', function () {
    const searchTerm = searchBar.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#admin-grid .admin-card');

    cards.forEach(card => {
        const searchText = card.getAttribute('data-search');

        if (searchText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Countdown Timer 
function updateCountdown() {
    // Set the target date and time. Note: '24:00:00' is equivalent to the next day at '00:00:00'
    const targetDate = new Date('2025-12-12T24:00:00').getTime(); // Changed to 00:00:00 for consistency
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Get the HTML elements
    const countdownElement = document.getElementById('countdown');
    const formContainer = document.getElementById('donation-form'); // Get the form container

    // Check if the campaign has ended
    if (distance < 0) {
        // 1. Display the 'Campaign Ended' message in the countdown area
        if (countdownElement) {
            countdownElement.innerHTML = '<strong style="grid-column: 1/-1; color: var(--red);">Campaign Ended! Thank you for your valuable contribution!</strong>';
        }

        // 2. Hide the Google Form container
        if (formContainer) {
            // A professional way is to add a class that hides the element and potentially displays a message
            formContainer.style.display = 'none'; 
            // Optional: You could insert a message here instead of the form
        }

    } else {
        // Campaign is still active: Calculate and display the countdown
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownHtml = `
            <div class="countdown-item">
                <span class="number">${days}</span>
                <span class="label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="number">${hours}</span>
                <span class="label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="number">${minutes}</span>
                <span class="label">Mins</span>
            </div>
            <div class="countdown-item">
                <span class="number">${seconds}</span>
                <span class="label">Secs</span>
            </div>
        `;

        if (countdownElement) {
            countdownElement.innerHTML = countdownHtml;
        }

        // Ensure the form is visible if it was hidden previously (e.g., on page load before first check)
        if (formContainer) {
             formContainer.style.display = ''; // Reset display style
        }
    }
}

// Initial call and set interval
updateCountdown();
setInterval(updateCountdown, 1000);

// Data to exclude for the Area Count
const EXCLUDED_AREA_NAME = "General Help";

// --- Metric Calculation Function ---
const calculateAdminMetrics = (areaData) => {
    const uniqueAdmins = new Set();
    const includedAreas = [];

    areaData.forEach(areaObject => {
        
        // **CORRECTION HERE: Use areaObject.area instead of areaObject.name**
        const areaName = areaObject.area || ''; 
        
        if (areaName.toLowerCase() !== EXCLUDED_AREA_NAME.toLowerCase()) {
            includedAreas.push(areaObject);
            const contacts = areaObject.contacts || [];
            
            contacts.forEach(admin => {
                const uniqueKey = admin.email || admin.id || admin.name; 
                
                if (uniqueKey) {
                    uniqueAdmins.add(uniqueKey);
                }
            });
        }
    });

    return {
        totalAreas: includedAreas.length, 
        totalAdmins: uniqueAdmins.size 
    };
};

const areaCountEl = document.getElementById('area-count');
const adminCountEl = document.getElementById('admin-count');

if (areaCountEl && adminCountEl) {
    const metrics = calculateAdminMetrics(ADMIN_CONTACT_DATA);

    areaCountEl.textContent = metrics.totalAreas;
    adminCountEl.textContent = metrics.totalAdmins;
} else {
    console.error("Metric display elements not found in the DOM.");
}

// --- News Data ---
let currentSlideIndex = 0;
const SLIDE_INTERVAL_MS = 6000; 

function renderNewsSlider() {
    const newsContainer = document.getElementById('news-section');
    const dotContainer = document.getElementById('slider-dots');

    if (!newsContainer || !Array.isArray(newsData) || newsData.length === 0) {
        if (newsContainer) newsContainer.innerHTML = '<p>No news updates currently available.</p>';
        return;
    }

    const sortedNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    let newsHtml = '';
    let dotHtml = '';

    sortedNews.forEach((item, index) => {
        const imageStyle = item.image ? 
            `style="background-image: url('${item.image}');"` : 
            '';
        
        const titleHtml = item.link ?
             `<h3 class="news-title"><a href="${item.link}" target="_blank">${item.title}</a></h3>` :
             `<h3 class="news-title">${item.title}</h3>`;
             
        const actionButtonHtml = item.link ?
            `<a href="${item.link}" target="_blank" class="news-read-more button-style">රු 25,000 දීමනාව ලබා ගැනීමේ අයදුම් පත්‍රය</a>` :
            '';

        const formattedDate = new Date(item.date).toLocaleDateString('en-US', { 
            year: 'numeric', month: 'short', day: 'numeric' 
        });

        newsHtml += `
            <div class="news-item slide" data-index="${index}">
                <div class="news-image-wrapper" ${imageStyle}>
                    </div>
                <div class="news-content">
                    <div class="news-meta">
                        <span class="news-date">${formattedDate}</span>
                    </div>
                    ${titleHtml}
                    <p class="news-description">${item.description}</p>
                    <div class="news-footer"> 
                        ${actionButtonHtml}  
                    </div>
                </div>
            </div>
        `;
        
        dotHtml += `<span class="dot" data-index="${index}"></span>`;
    });

    newsContainer.innerHTML = newsHtml;
    dotContainer.innerHTML = dotHtml;

    setupSlider();
}

// Privacy policy
document.addEventListener('DOMContentLoaded', renderNewsSlider);

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('privacyModal');
    const openBtn = document.getElementById('openPrivacyModal');
    const closeBtn = document.getElementById('closePrivacyModal');

    if (modal && openBtn && closeBtn) {
        openBtn.onclick = function(e) {
            e.preventDefault(); 
            modal.style.display = "block";
            document.body.style.overflow = 'hidden'; 
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; 
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        }
    }
});