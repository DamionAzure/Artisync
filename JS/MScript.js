const feedData = [
    { title: "Ethereal Displacement v.04", author: "Aris Thorne", cat: "3D Art", type: "P", img: "https://picsum.photos/seed/1/800/1000" },
    { title: "Lead Character Designer", author: "AAA Studio", cat: "Concept Art", type: "CC", desc: "Visionary needed for AAA title." },
    { title: "Brutalist Concrete PBR Pack", author: "Marc Russo", cat: "Resources", type: "R", img: "https://picsum.photos/seed/2/800/600" },
    { title: "Kinetic Branding Reel 2024", author: "Lina V.", cat: "Motion", type: "P", img: "https://picsum.photos/seed/3/800/1200" }
];

function renderFeed() {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; 

    feedData.forEach(post => {
        const item = document.createElement('div');
        
        // Only using P, R, or CC as the class
        item.classList.add('masonry-item', post.type);
        
        item.innerHTML = `
            ${post.img ? `<div class="card-media"><img src="${post.img}"></div>` : ''}
            <div class="card-info">
                ${post.type === 'CC' ? `
                    <div style="margin-bottom:8px;"><span class="job-badge">Open Call</span></div>
                    <h3 class="item-title">${post.title}</h3>
                    <p style="font-size:0.8rem; color:var(--color-text-dim); margin-top:4px;">${post.desc || ''}</p>
                    <button class="btn-apply">Apply Now</button>
                ` : `
                    <div class="author-row">
                        <span class="author-name" style="font-size:0.85rem; font-weight:600;">${post.author}</span>
                        <span class="category-tag">${post.cat}</span>
                    </div>
                    <h3 class="item-title">${post.title}</h3>
                `}
            </div>
        `;
        grid.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', renderFeed);