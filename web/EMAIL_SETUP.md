# Konfiguracija slanja mejlova iz kontakt forme

## 1. Kreiranje Resend naloga

1. Idite na [https://resend.com](https://resend.com)
2. Kreirajte nalog ili prijavite se
3. Idite na Settings → API Keys
4. Kreirajte novi API key

## 2. Konfiguracija environment variables

Kreirajte fajl `.env.local` u root-u web foldera:

```bash
# Email configuration
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=velja.jagodina@gmail.com
```

**VAŽNO:** `.env.local` fajl je u `.gitignore` i neće biti commit-ovan!

## 3. Verifikacija domene (opciono za produkciju)

Da bi mejlovi stizali iz `noreply@evrometal.rs`, potrebno je verifikovati domen:

1. U Resend dashboardu idite na Domains
2. Dodajte domen `evrometal.rs`
3. Dodajte DNS zapise koje vam Resend pruža

## 4. Testiranje

Nakon konfiguracije `.env.local` fajla, restartujte development server:

```bash
npm run dev
```

Testirajte kontakt formu - mejlovi bi trebali da stignu na adresu definisanu u `CONTACT_EMAIL`.

## 5. Promena mejla adrese

Da biste promenili adresu na koju stižu mejlovi, jednostavno promenite:

```bash
CONTACT_EMAIL=nova.adresa@gmail.com
```

## 6. Troubleshooting

- **"Email servis nije konfigurisan"**: Proverite da li imate `RESEND_API_KEY` u `.env.local`
- **Mejl ne stiže**: Proverite spam folder, verifikujte domen u Resend-u
- **API error**: Proverite da li je API key ispravan i aktivan

## Trenutna konfiguracija za testiranje

- **Test mejl**: `velja.jagodina@gmail.com`
- **From adresa**: `noreply@evrometal.rs`
- **Servis**: Resend
