# اپ قدیمی فاکتور / صورتحساب (React CRA)

این پوشه build استاتیک اپ React قبلی را نگه می‌دارد و از مسیرهای `/factor` و `/bill` در Next.js سرو می‌شود.

## ساختار

- `index.html` — shell اپ (مسیر assets با prefix `/legacy/static/`)
- `../public/legacy/static/` — JS، CSS و فونت‌های build

## به‌روزرسانی از پروژه قدیمی

```bash
npm run sync:legacy
```

## حالت میکروسرویس (اختیاری)

اگر اپ legacy جدا deploy شود، متغیر محیطی `LEGACY_APP_URL` را تنظیم کنید (مثلاً `http://localhost:3001`).
Next.js درخواست‌های `/factor` و `/bill` را به آن سرویس proxy می‌کند.

```bash
# ترمینال ۱ — اپ legacy
npx serve ../hyperoffice-old -l 3001

# ترمینال ۲ — Next.js
LEGACY_APP_URL=http://localhost:3001 npm run dev
```

بدون `LEGACY_APP_URL`، همان build embed شده از `public/legacy/` سرو می‌شود.
