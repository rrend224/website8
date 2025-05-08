document.addEventListener('DOMContentLoaded', function() {
    // パララックス効果
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxSections = document.querySelectorAll('.parallax-section');
        
        parallaxSections.forEach(section => {
            section.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    });

    // ナビゲーションのスクロール固定
    const globalNav = document.querySelector('.global-nav');
    const navHeight = globalNav.offsetHeight;
    const mainHeader = document.querySelector('.main-header');
    
    // メインヘッダーのマージンを調整
    mainHeader.style.marginTop = navHeight + 'px';

    // スクロール時のナビゲーションのスタイル変更
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            globalNav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            globalNav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // ニュース画像にランダムな画像を設定
    const newsImages = [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ];
    
    document.querySelectorAll('.news-image').forEach((img, index) => {
        img.style.backgroundImage = `url(${newsImages[index]})`;
    });
});
