// 1. Navbar ስክሮል ሲደረግ ከለር እንዲቀይር
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.background = '#000';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 8%';
    }
});

// 2. ቪዲዮ እንዲከፈት (ለጊዜው Alert ብቻ)
function openVideo(url) {
    if(url === '#') {
        alert("ቪዲዮው ገና አልተጫነም!");
    } else {
        // እዚህ ጋር ወደ ዩቲዩብ ሊንክ እንዲሄድ ማድረግ ትችላለህ
        window.open(url, '_blank');
    }
}