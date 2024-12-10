# Menü Tabanlı Uygulama

---

## **Projenin Amacı**  
Kullanıcı etkileşimli bir uygulama tasarlayarak belirli bir menü üzerinden işlemler yapılmasını sağlamak. Bu proje, kullanıcıların seçim yaparak çeşitli işlemleri gerçekleştirebileceği bir yapı oluşturmayı hedefler.

---

## **Kullanılacak Anahtar Kelimeler ve Değişkenler**

### **Anahtar Kelimeler:**
- `let`, `const`: Değişken tanımlama için.
- `switch-case`: Kullanıcı seçimine göre farklı işlemler yapmak için.
- `while`: Kullanıcının çıkış yapana kadar işlemleri tekrarlayabilmesi için.
- `console.log`: Bilgi ve yönlendirme mesajları göstermek için.
- `prompt`: Kullanıcıdan veri almak için.
- `break`: Belirli bir işlem sonrasında menüden çıkmak için.

### **Değişkenler:**
- `secim`: Kullanıcının menüden yaptığı seçimi tutar.
- `veriler`: İşlem yapılacak verilerin saklandığı dizi veya nesne.
- `devam`: Uygulamanın çalışmaya devam edip etmeyeceğini kontrol eden boolean değişken.

---

## **İzlenecek Adımlar**

### 1. **Uygulama Menüsünü Oluşturma:**  
- Kullanıcıya seçeneklerin listelendiği bir menü göster.
- Menü, işlemler arasında seçim yapılmasını sağlar (örneğin: 1- Veri Ekle, 2- Verileri Listele, 3- Veri Ara, 4- Çıkış).

### 2. **Kullanıcı Seçimini Alma:**  
- Kullanıcıdan bir giriş al (örneğin: `prompt` ile).
- Kullanıcının girdiği değeri bir değişkende sakla.

### 3. **Menü Seçeneklerini İşleme:**  
- Kullanıcının girdiği seçime göre `switch-case` yapısını kullan.
- Her bir seçenek için ayrı bir işlem gerçekleştir:
  - **Veri Ekle:** Yeni veri almak için kullanıcıdan bilgi al ve bir diziye ekle.
  - **Verileri Listele:** Saklanan tüm verileri kullanıcıya göster.
  - **Veri Ara:** Kullanıcıdan arama kriteri al ve dizi içinden bu kritere uyan verileri bulup göster.
  - **Çıkış:** Programdan çıkmak için döngüyü sonlandır.

### 4. **Sürekli Çalışabilirlik Sağlama:**  
- Uygulamayı bir `while` döngüsü içine al.
- Kullanıcı çıkış yapana kadar menüyü tekrar göster.

### 5. **Hatalı Girdiler için Kontrol:**  
- Kullanıcının geçersiz bir seçim yapması durumunda bir hata mesajı göster ve menüyü tekrar başlat.

### 6. **Uygulama Çıkışı:**  
- Kullanıcı çıkış seçeneğini seçtiğinde programı sonlandır ve bir veda mesajı göster.

---

## **Örnek Menü Formatı (Kullanıcıya Gösterilecek):**

