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
                    <a href="https://chat.whatsapp.com/B6SDrjsTXwM6vekx9zZmRX?mode=hqrt3" target="_blank"
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
    const targetDate = new Date('2025-12-15T20:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

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

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = countdownHtml;

        if (distance < 0) {
            countdownElement.innerHTML = '<p style="grid-column: 1/-1; color: var(--red);">🎉 Campaign Ended!</p>';
        }
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// script.js (Simplified & Corrected Logic Flow)

// ... (Your Existing Code for adminGrid, renderAdminCards, searchBar, etc.)

// --- Metric Calculation Function ---
const calculateAdminMetrics = (data) => {
    const totalAreaCount = data.length;
    let totalAdminCount = 0;

    data.forEach(areaObject => {
        // We are counting the number of contacts/admins in each area object
        totalAdminCount += areaObject.contacts ? areaObject.contacts.length : 0;
    });

    return {
        totalAreas: totalAreaCount,
        totalAdmins: totalAdminCount
    };
};

renderAdminCards(ADMIN_CONTACT_DATA); 

const areaCountEl = document.getElementById('area-count');
const adminCountEl = document.getElementById('admin-count');

if (areaCountEl && adminCountEl) {
    const metrics = calculateAdminMetrics(ADMIN_CONTACT_DATA);

    areaCountEl.textContent = metrics.totalAreas;
    adminCountEl.textContent = metrics.totalAdmins;
} else {
    console.error("Metric display elements not found in the DOM.");
}