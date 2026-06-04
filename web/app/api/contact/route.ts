import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const messages: Record<string, Record<string, string>> = {
  sr: {
    notConfigured: 'Email servis nije konfigurisan. Molimo kontaktirajte administratora.',
    sendError: 'Greška pri slanju mejla. Molimo pokušajte ponovo.',
    success: 'Poruka je uspešno poslata!',
    genericError: 'Došlo je do greške. Molimo pokušajte ponovo.',
  },
  en: {
    notConfigured: 'Email service is not configured. Please contact the administrator.',
    sendError: 'Error sending email. Please try again.',
    success: 'Message sent successfully!',
    genericError: 'An error occurred. Please try again.',
  },
  de: {
    notConfigured: 'E-Mail-Dienst nicht konfiguriert. Bitte kontaktieren Sie den Administrator.',
    sendError: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.',
    success: 'Nachricht erfolgreich gesendet!',
    genericError: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
  },
};

function t(lang: string, key: 'notConfigured' | 'sendError' | 'success' | 'genericError') {
  return messages[lang]?.[key] || messages.sr[key];
}

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
    const lang = (formData.get('lang') as string) || 'sr';

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: t(lang, 'notConfigured') },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const contactEmail = process.env.CONTACT_EMAIL || 'office@evrometal.rs';

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

    const attachments = [];
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: file.name,
        content: buffer.toString('base64'),
        content_type: file.type,
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Evrometal Kontakt <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `Kontakt: ${subject} - ${name}`,
      html: emailContent,
      reply_to: email,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: t(lang, 'sendError') },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: t(lang, 'success') },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: t('sr', 'genericError') },
      { status: 500 }
    );
  }
}
