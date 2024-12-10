// Menü Tabanlı Uygulama

const veriler = []; // Verilerin saklandığı dizi
let devam = true; // Programın çalışmaya devam etmesini kontrol eden değişken

while (devam) {
    // Kullanıcıya menüyü göster
    console.log(`
=== MENÜ ===
1. Veri Ekle
2. Verileri Listele
3. Veri Ara
4. Çıkış
    `);

    // Kullanıcıdan seçim al
    const secim = prompt("Bir seçim yapınız (1-4):");

    switch (secim) {
        case "1": // Veri Ekle
            const yeniVeri = prompt("Eklenecek veriyi giriniz:");
            if (yeniVeri) {
                veriler.push(yeniVeri);
                console.log("Veri başarıyla eklendi!");
            } else {
                console.log("Geçersiz giriş, veri eklenemedi.");
            }
            break;

        case "2": // Verileri Listele
            if (veriler.length > 0) {
                console.log("Kayıtlı Veriler:");
                veriler.forEach((veri, index) => {
                    console.log(`${index + 1}. ${veri}`);
                });
            } else {
                console.log("Henüz eklenmiş bir veri bulunmamaktadır.");
            }
            break;

        case "3": // Veri Ara
            const aramaKriteri = prompt("Aramak istediğiniz veriyi giriniz:");
            const bulunanVeriler = veriler.filter(veri =>
                veri.toLowerCase().includes(aramaKriteri.toLowerCase())
            );

            if (bulunanVeriler.length > 0) {
                console.log("Bulunan Veriler:");
                bulunanVeriler.forEach((veri, index) => {
                    console.log(`${index + 1}. ${veri}`);
                });
            } else {
                console.log("Aradığınız kritere uygun veri bulunamadı.");
            }
            break;

        case "4": // Çıkış
            console.log("Programdan çıkılıyor. İyi günler!");
            devam = false;
            break;

        default: // Geçersiz Seçim
            console.log("Geçersiz bir seçim yaptınız. Lütfen 1-4 arasında bir değer giriniz.");
            break;
    }
}
