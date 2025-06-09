<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST['nama'];
  $alamat = $_POST['alamat'];
  $nohp = $_POST['nohp'];
  $cart = json_decode($_POST['cart'], true);

  echo "<h1>Terima Kasih, $nama!</h1>";
  echo "<p>Pesanan Anda:</p>";
  echo "<ul>";
  $total = 0;
  foreach($cart as $item){
    echo "<li>".$item['name']." - Rp ".number_format($item['price'],0,",",".")."</li>";
    $total += $item['price'];
  }
  echo "</ul>";
  echo "<h3>Total: Rp ".number_format($total,0,",",".")."</h3>";
  echo "<p>Pesanan akan dikirim ke: $alamat</p>";
  echo "<p>Kontak: $nohp</p>";

  // Setelah selesai, bersihkan keranjang
  echo "<script>localStorage.removeItem('cart');</script>";
}
?>