const userProfile = { primaryField: '3D Art' };

const feedData = [
    { title: "Ethereal Displacement v.04", author: "Aris Thorne", cat: "3D Art", type: "portfolio", img: "https://picsum.photos/400/600", avatar: "https://i.pravatar.cc/150?u=1" },
    { title: "Lead Character Designer", author: "AAA Studio", cat: "Concept Art", type: "casting", desc: "Looking for a stylist visionary for an unannounced AAA cyberpunk title.", img: null },
    { title: "Brutalist Concrete PBR Pack", author: "Marc Russo", cat: "Resources", type: "resource", img: "https://picsum.photos/400/300", price: "$24.00" },
    { title: "Kinetic Branding Reel 2024", author: "Lina V.", cat: "Motion Design", type: "portfolio", img: "https://picsum.photos/400/500", avatar: "https://i.pravatar.cc/150?u=2" }
];

function renderFeed() {
    const grid = document.getElementById('main-feed');
    if (!grid) return;
    
    grid.innerHTML = ''; 

    feedData.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        /* --- DYNAMIC HEIGHT CALCULATION --- */
        let spanValue = 28; // Base height
        if (post.type === 'portfolio') spanValue = 38;
        if (post.type === 'casting') spanValue = 32;
        
        // If it matches the user's interest, boost the height
        if (post.cat === userProfile.primaryField) {
            spanValue += 12; 
        }

        // Apply the span directly to the style attribute
        card.style.gridRowEnd = `span ${spanValue}`;
        
        /* --- HTML CONTENT --- */
        card.innerHTML = `
            ${post.img ? `
            <div class="card-media">
                <img src="${post.img}" alt="${post.title}">
                <div class="card-overlay">
                    <div class="overlay-actions">
                        <span class="material-symbols-outlined">favorite</span>
                        <span class="material-symbols-outlined">bookmark</span>
                    </div>
                </div>
            </div>` : ''}

            <div class="card-info">
                ${post.type === 'casting' ? `
                    <div class="job-header">
                        <span class="job-badge">Open Call</span>
                    </div>
                    <h3 class="item-title">${post.title}</h3>
                    <p class="job-description">${post.desc}</p>
                    <button class="btn-apply">Apply Now</button>
                ` : `
                    <div class="author-row">
                        <img src="${post.avatar || 'https://i.pravatar.cc/150'}" class="avatar">
                        <span class="author-name">${post.author}</span>
                        <span class="category-tag">${post.cat}</span>
                    </div>
                    <h3 class="item-title">${post.title}</h3>
                `}
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderFeed);