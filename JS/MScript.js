const userProfile = { primaryField: '3D Art' };

const feedData = [
    { title: "Ethereal Displacement v.04", author: "Aris Thorne", cat: "3D Art", type: "portfolio", img: "https://picsum.photos/400/600", avatar: "https://i.pravatar.cc/150?u=1" },
    { title: "Lead Character Designer", author: "AAA Studio", cat: "Concept Art", type: "casting", desc: "Looking for a stylist visionary for an unannounced AAA cyberpunk title.", img: null },
    { title: "Brutalist Concrete PBR Pack", author: "Marc Russo", cat: "Resources", type: "resource", img: "https://picsum.photos/400/300", price: "$24.00" },
    { title: "Kinetic Branding Reel 2024", author: "Lina V.", cat: "Motion Design", type: "portfolio", img: "https://picsum.photos/400/500", avatar: "https://i.pravatar.cc/150?u=2" },
    { title: "Lead Character Voice Acting", author: "Galunggong Corporation", cat: "Voice Acting", type: "casting", desc: "N/A", img: null },
    { title: "Material Brushes Highlights 2023", author: "Lon H.", cat: "3D Art", type: "portfolio", img: "https://picsum.photos/500/700", avatar: "https://i.pravatar.cc/150?u=3" },
    { title: "QA Position", author: "BumpyRoads Studio", cat: "Misc", type: "casting", desc: "Pls", img: null },
];

// 1. The Dynamic Resizer (The "Shrink to Fit" engine)
function resizeGridItem(item) {
    const grid = document.getElementById('main-feed');
    if (!grid) return;

    // Get the grid row height (10px) and gap (24px) from your CSS
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-gap'));
    
    // Measure total height of internal content
    const contentHeight = item.querySelector('.card-info').offsetHeight + 
                         (item.querySelector('.card-media')?.offsetHeight || 0);

    // Calculate how many spans are needed
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    
    item.style.gridRowEnd = `span ${rowSpan}`;
}

// 2. The Main Render Function
function renderFeed() {
    const grid = document.getElementById('main-feed');
    if (!grid) return;
    
    grid.innerHTML = ''; 

    feedData.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Build the HTML
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

        // 3. Trigger Resize
        const img = card.querySelector('img');
        if (img) {
            // Wait for image to load to get its actual height
            img.addEventListener('load', () => resizeGridItem(card));
        } else {
            // No image (like Casting Calls), resize immediately
            resizeGridItem(card);
        }
    });
}

// 4. Initialize and handle window resizing
document.addEventListener('DOMContentLoaded', renderFeed);
window.addEventListener('resize', () => {
    document.querySelectorAll('.card').forEach(resizeGridItem);
});