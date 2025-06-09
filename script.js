// Fungsi untuk menambahkan produk ke keranjang
function addToCart( event, name, price) {
    event.preventDefault()
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Cek apakah produk sudah ada di keranjang
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} berhasil ditambahkan ke keranjang!`);
}

// Fungsi untuk mengupdate tampilan jumlah item di ikon keranjang
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = totalCount;
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCartCount);

//fungsi buat detail produk
function showProductDetail(image, title, hargaDiskon, hargaAsli, deskripsi, addToCartFunc) {
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = 'Rp. ' + hargaDiskon.toLocaleString();
    document.getElementById('popup-original-price').textContent = 'Rp. ' + hargaAsli.toLocaleString();
    document.getElementById('popup-description').textContent = deskripsi;

    const btn = document.getElementById('popup-cart-btn');
    btn.onclick = function () {
        addToCartFunc();
        closePopup();
    };

    document.getElementById('product-detail-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('product-detail-popup').style.display = 'none';
}