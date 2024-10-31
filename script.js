// Menambahkan event listener untuk menyesuaikan tampilan saat layar diubah ukurannya
window.addEventListener('resize', adjustLayout);

// Fungsi untuk menyesuaikan tata letak berdasarkan lebar layar
function adjustLayout() {
    const screenWidth = window.innerWidth;
    const profileImg = document.querySelector('.profile-img');
    const mainTitle = document.querySelector('.main-title');

    if (screenWidth < 768) {
        profileImg.style.width = '40%';
        mainTitle.style.fontSize = '40px';
    } else if (screenWidth < 480) {
        profileImg.style.width = '50%';
        mainTitle.style.fontSize = '30px';
    } else {
        profileImg.style.width = '20%';
        mainTitle.style.fontSize = '70px';
    }
}

// Memanggil fungsi pertama kali untuk menyesuaikan saat halaman dimuat
adjustLayout();