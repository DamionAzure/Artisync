const userProfile = { primaryField: '3D Art' };

const postsData = [
    { id: 1, title: "Ethereal v.04", author: "Aris", cat: "3D Art", type: "portfolio", img: "url0" },
    { id: 2, title: "Lead Designer", author: "Studio X", cat: "Concept Art", type: "casting", img: null },
    { id: 3, title: "Concrete PBR", author: "Marc", cat: "Resources", type: "resource", img: "url2" }
];

const feed = document.getElementById('main-feed');

function renderFeed() {
    postsData.forEach(post => {
        const card = document.createElement('div');
        
        // 1. Determine the Span Logic
        let spanClass = 'span-p'; // Default
        
        if (post.type === 'casting') {
            spanClass = 'span-cc';
        } else if (post.type === 'resource') {
            spanClass = 'span-r';
        } else if (post.cat === userProfile.primaryField) {
            spanClass = 'span-prominent-p'; // High priority match!
        }

        card.className = `card ${spanClass}`;
        
        // 2. Inject Content
        card.innerHTML = `
            <span class="post-data-type" hidden>${post.type}</span>
            <div class="card-media">
                ${post.img ? `<img src="${post.img}">` : '<div class="placeholder"></div>'}
            </div>
            <div class="card-info">
                <div class="author-row">
                    <span class="author-name">${post.author}</span>
                    <span class="category-tag">${post.cat}</span>
                </div>
                <h3 class="item-title">${post.title}</h3>
            </div>
        `;
        
        feed.appendChild(card);
    });
}

renderFeed();