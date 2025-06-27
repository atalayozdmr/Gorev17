# Gorev17

Bu proje, bir **Expo (React Native)** frontend uygulaması ile **Express.js** backend API'sini kullanarak Supabase veritabanına bağlanan bir tam-stack ödev projesidir.

## 🔧 Proje Yapısı

Gorev17/
├── express-db/ # Backend (Node.js + Express)
└── expo-db/ # Frontend (Expo + NativeWind)

markdown
Kopyala
Düzenle

## 🗃️ Veritabanı - Supabase

### Tablolar:

- `Users`: id, name
- `Orders`: id, user_id, product_name

➡️ `Orders.user_id` → `Users.id` foreign key ile bağlıdır.

## 🔙 Backend (Express.js)

- `GET /users`: Kullanıcı listesini getirir
- `GET /products`: Kullanıcı adı ve ona ait ürünleri döner

📁 `express-db` içinde `src/routes/users.ts` ve `products.ts` dosyalarında yer alır.

## 📱 Frontend (Expo)

- `app/index.tsx`: Giriş ekranı
- `app/products.tsx`: Kullanıcı ve ürün isimlerini listeleyen ekran

📦 Veriler `axios` ile Express API'den çekilir. `FlatList` ile mobilde gösterilir.

## 🧪 Test

📱 Mobilde test için Expo Go kullanılmıştır  
💻 Web üzerinde test için `cors` middleware'i backend'e eklenmiştir.

## 🧠 Kullanılan Teknolojiler

- Expo + React Native
- Express.js + TypeScript
- Supabase (PostgreSQL)
- Axios
- NativeWind (Tailwind benzeri stil)
