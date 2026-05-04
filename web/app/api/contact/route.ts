import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File;

    // FAKE RESPONSE - privremeno dok se ne konfiguriše Resend
    console.log('=== Kontakt forma podaci ===');
    console.log('Ime:', name);
    console.log('Email:', email);
    console.log('Telefon:', phone);
    console.log('Kompanija:', company);
    console.log('Predmet:', subject);
    console.log('Poruka:', message);
    console.log('Fajl:', file?.name || 'Nema fajla');
    console.log('========================');

    // Simulacija slanja mejla (privremeno)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: 'Poruka je uspešno poslata!' },
      { status: 200 }
    );

    /*
    // RESEND IMPLEMENTACIJA - aktivirati kada bude spremno za produkciju
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email servis nije konfigurisan. Molimo kontaktirajte administratora.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const contactEmail = process.env.CONTACT_EMAIL || 'velja.jagodina@gmail.com';

    // Priprema mejla
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          Nova kontakt poruka - Evrometal
        </h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Detalji poruke:</h3>
          
          <p style="margin: 10px 0;"><strong>Ime i prezime:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone || 'Nije navedeno'}</p>
          <p style="margin: 10px 0;"><strong>Kompanija:</strong> ${company || 'Nije navedeno'}</p>
          <p style="margin: 10px 0;"><strong>Predmet:</strong> ${subject}</p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Poruka:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Ova poruka je poslata preko kontakt forme na sajtu Evrometal
          </p>
          <p style="color: #6b7280; font-size: 12px;">
            Datum: ${new Date().toLocaleString('sr-RS', { timeZone: 'Europe/Belgrade' })}
          </p>
        </div>
      </div>
    `;

    // Slanje mejla
    const { data, error } = await resend.emails.send({
      from: 'Evrometal Kontakt <noreply@evrometal.rs>',
      to: [contactEmail],
      subject: `Kontakt: ${subject} - ${name}`,
      html: emailContent,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Greška pri slanju mejla. Molimo pokušajte ponovo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Poruka je uspešno poslata!' },
      { status: 200 }
    );
    */

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Došlo je do greške. Molimo pokušajte ponovo.' },
      { status: 500 }
    );
  }
}
