const userProfile = { primaryField: '3D Art' };

// Your Scaling Logic
function getProceduralSpan(post, userProfile) {
    const isRelational = post.cat === userProfile.primaryField; // Updated to match your data key 'cat'
    
    switch(post.type) {
        case 'portfolio':
            return isRelational ? 'span-prominent-p' : 'span-p';
        case 'resource':
            return isRelational ? 'span-prominent-r' : 'span-r';
        case 'casting':
            return isRelational ? 'span-prominent-cc' : 'span-cc';
        default:
            return 'span-p';
    }
}

const feedData = [
    { title: "Ethereal Displacement v.04", author: "Aris Thorne", cat: "3D Art", type: "portfolio", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfpA1NQWppnlgaQngPVSBz0Ukk6m1ZkN2NVuqxv6I4Nuh7nIhnDBsrhutG_uUF3i2E2ohD2HyIeyjL3ue8Teke0nP83JUn-9R_TiCOCP_7paAH59dKPGQqiEvhROmm8FN7BQIFWYN5vH3GuT6BXcFYJWzXm1XDUvOFh1gYEp1j05EgZwa4QTqDeXzV5916GZ6zpSdYCY58USEe0nxe7jdRPglBsHmKpRNDGJ9lwI6a0S-30NH_z4K0O7rb6CfEuZSaoUp8iolPObh1", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXOt-ikRT11Ad-VSsahdnK3vsLz1K2-5pGBLBMdgQigTUBR13pfwFi4lzGOCMnKznlAwx2W-foeQ0SuXiuyQe6S24GuZFU6hiaNxQzoveIoYHu07vOIPUogwYVL7NpQR7xXgMtG5JzhA8-mmcq5PHk-3Hm27ErY9xa4peXYKDr69-jkQa3xYyb6TtLZgeyGucFNqgdaLeMaoDPSEMPBtLlLElOrJ2sZPAkNDAuuw_L-7iYsPACAnY6OGx5Rxa1EoX__dl5563Jwv1" },
    { title: "Lead Character Designer", author: "AAA Studio", cat: "Concept Art", type: "casting", desc: "Looking for a stylist visionary for an unannounced AAA cyberpunk title." },
    { title: "Brutalist Concrete PBR Pack", author: "Marc Russo", cat: "Resources", type: "resource", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4NXxRnkZEosFQ90DOV20ZFAU6ce5NLNk7me0UCGDHPZcs4gMgXi0VTLPdO2IjJJ1TJzEV-Ge4T9X90lZzWV5_dHxCBLnoicPXySp7V0aTq8_Zy2NoSLKIHs3v1xqv58m4o1eKXlHBIBE3WBtvz-9jj9E3BTvlfl70nxBiycXGuJHyyLFBjSb_Oj3rl7r0aSnVXZLXRD4ZaqDtv3oSxljbcFyE6q12bWBb5BJ-FWGEMyaj85UPaylOVDzH8LHvH3R8mvDeF4Dpe40R", price: "$24.00" },
    { title: "Kinetic Branding Reel 2024", author: "Lina V.", cat: "Motion", type: "portfolio", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf7T_DsHq1ux7ysgtZ_2Xh-_HZrAqstALaEHO_ima1UQugO9y21PvPH4zW-TARqMWs829_U-fpLMvgatkMjgapaTzcI3Wv9zBHrpFVH-LjNu1f7dmmUGmU9S9mfjLItwzuhQpAn_XYiVmUOZyiS_wb-NxmtDKreX9tw7YtdsmSQlzmCj5pgVu-z5RF-YiSbyOM7bRZYy34uQVOQgOfVEZBT4vt5VYYoqr3hKmRdRqjBbmb7p3J_lZEIqDyLlhvfSY7cTV7vAiT8scU", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCORtb48AQgKLpaYGABzHwbwHOXE3fdc6mpAs61-_QG-b_DfXmmQIne1OgAQrG_VkD5ZSvkP-GE5IG_kkCuwckIH4Y_Xny-Wpzv3uwGWMl4uKrdc4F763AjmEcP36rF7G_NjQi8Tmng1XvItnRxIbzkMzGII_6BxFj2j4pNaKFrKyAQjcwYixzZ6EhPGx1sW5E-Vil-XpGrYCRiHJxlrbz2DIQ7KwHk1SRqk_19uzHLtgQYYrmsrHHtmHPuq5rj3NvApKlZPVHJlFm8" }
];

function renderFeed() {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; 

    feedData.forEach(post => {
        const item = document.createElement('div');
        
        // 1. Get the specific span class based on the logic function
        const spanClass = getProceduralSpan(post, userProfile);
        
        // 2. Apply both the generic item class and the procedural span
        item.classList.add('masonry-item', spanClass);
        
        // 3. Populate innerHTML (Changed 'card' to 'item')
        item.innerHTML = `
            <span class="data-type" hidden>${post.type}</span>
            <span class="data-cat" hidden>${post.cat}</span>
            
            <div class="card"> ${post.img ? `
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
                        <p class="job-desc">${post.desc || ''}</p>
                        <button class="btn-apply">Apply Now</button>
                    ` : `
                        <div class="author-row">
                            <span class="author-name">${post.author}</span>
                            <span class="category-tag">${post.cat}</span>
                        </div>
                        <h3 class="item-title">${post.title}</h3>
                    `}
                </div>
            </div>
        `;
        grid.appendChild(item);
    });
}

renderFeed();