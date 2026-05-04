"use client";

import { useState } from "react";
import { dictionary, type Lang } from "@/lib/i18n";

type ContactFormProps = {
  lang: Lang;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  file: File | null;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  file?: string;
};

export function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    file: null,
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const t = dictionary[lang];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = lang === "sr" ? "Ime je obavezno" : 
                      lang === "en" ? "Name is required" : 
                      "Name ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === "sr" ? "Email je obavezan" : 
                       lang === "en" ? "Email is required" : 
                       "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === "sr" ? "Email nije validan" : 
                       lang === "en" ? "Email is invalid" : 
                       "E-Mail ist ungültig";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = lang === "sr" ? "Predmet je obavezan" : 
                         lang === "en" ? "Subject is required" : 
                         "Betreff ist erforderlich";
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === "sr" ? "Poruka je obavezna" : 
                         lang === "en" ? "Message is required" : 
                         "Nachricht ist erforderlich";
    }

    if (formData.file && formData.file.size > 5 * 1024 * 1024) {
      newErrors.file = lang === "sr" ? "Fajl ne sme biti veći od 5MB" : 
                       lang === "en" ? "File must be smaller than 5MB" : 
                       "Datei muss kleiner als 5MB sein";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
    if (errors.file) {
      setErrors(prev => ({ ...prev, file: undefined }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: undefined }));
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-sm border border-green-500/20 bg-green-500/5 p-8 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-green-500/10 p-4">
          <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">
          {lang === "sr" ? "Poruka uspešno poslata!" : 
           lang === "en" ? "Message sent successfully!" : 
           "Nachricht erfolgreich gesendet!"}
        </h3>
        <p className="mt-2 text-sm text-white/60">
          {lang === "sr" ? "Kontaktiraćemo vas uskoro." : 
           lang === "en" ? "We'll contact you soon." : 
           "Wir werden Sie bald kontaktieren."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80">
            {lang === "sr" ? "Ime i prezime *" : 
             lang === "en" ? "Full name *" : 
             "Vollständiger Name *"}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-sm border bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20 ${
              errors.name ? "border-red-500/40" : "border-white/10"
            }`}
            placeholder={lang === "sr" ? "Unesite ime i prezime" : 
                        lang === "en" ? "Enter your full name" : 
                        "Geben Sie Ihren vollständigen Namen ein"}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80">
            {lang === "sr" ? "Email *" : 
             lang === "en" ? "Email *" : 
             "E-Mail *"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-sm border bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20 ${
              errors.email ? "border-red-500/40" : "border-white/10"
            }`}
            placeholder={lang === "sr" ? "vas@email.com" : 
                        lang === "en" ? "your@email.com" : 
                        "ihre@email.de"}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80">
            {lang === "sr" ? "Telefon" : 
             lang === "en" ? "Phone" : 
             "Telefon"}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-sm border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20"
            placeholder={lang === "sr" ? "+381 11 123 456" : 
                        lang === "en" ? "+1 (555) 123-456" : 
                        "+49 123 456 789"}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80">
            {lang === "sr" ? "Kompanija" : 
             lang === "en" ? "Company" : 
             "Unternehmen"}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-sm border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20"
            placeholder={lang === "sr" ? "Naziv kompanije" : 
                        lang === "en" ? "Company name" : 
                        "Unternehmensname"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/80">
          {lang === "sr" ? "Predmet *" : 
           lang === "en" ? "Subject *" : 
           "Betreff *"}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`mt-2 block w-full rounded-sm border bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20 ${
            errors.subject ? "border-red-500/40" : "border-white/10"
          }`}
          placeholder={lang === "sr" ? "Unesite predmet poruke" : 
                      lang === "en" ? "Enter message subject" : 
                      "Betreff eingeben"}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          {lang === "sr" ? "Poruka *" : 
           lang === "en" ? "Message *" : 
           "Nachricht *"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className={`mt-2 block w-full rounded-sm border bg-white/[0.045] px-4 py-2.5 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-200/20 resize-none ${
            errors.message ? "border-red-500/40" : "border-white/10"
          }`}
          placeholder={lang === "sr" ? "Unesite vašu poruku..." : 
                      lang === "en" ? "Enter your message..." : 
                      "Geben Sie Ihre Nachricht ein..."}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          {lang === "sr" ? "Dokument (opciono)" : 
           lang === "en" ? "Document (optional)" : 
           "Dokument (optional)"}
        </label>
        <div
          className={`relative rounded-sm border-2 border-dashed transition-colors ${
            dragActive
              ? "border-amber-200/60 bg-amber-200/5"
              : errors.file
              ? "border-red-500/40 bg-red-500/5"
              : "border-white/20 bg-white/[0.02] hover:border-white/30"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="absolute inset-0 cursor-pointer opacity-0"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <div className="p-8 text-center">
            {formData.file ? (
              <div className="flex items-center justify-center gap-3">
                <svg className="h-8 w-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">{formData.file.name}</p>
                  <p className="text-xs text-white/60">
                    {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                  className="rounded-sm p-1 text-white/40 hover:text-white hover:bg-white/10"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <svg className="mx-auto h-12 w-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-4 text-sm text-white/60">
                  {lang === "sr" ? "Prevucite dokument ovde ili kliknite da izaberete" : 
                   lang === "en" ? "Drag and drop a document here, or click to select" : 
                   "Dokument hier ablegen oder klicken zum Auswählen"}
                </p>
                <p className="mt-1 text-xs text-white/40">
                  {lang === "sr" ? "PDF, DOC, DOCX, JPG, PNG (max 5MB)" : 
                   lang === "en" ? "PDF, DOC, DOCX, JPG, PNG (max 5MB)" : 
                   "PDF, DOC, DOCX, JPG, PNG (max 5MB)"}
                </p>
              </>
            )}
          </div>
        </div>
        {errors.file && <p className="mt-1 text-xs text-red-400">{errors.file}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {lang === "sr" ? "Slanje..." : 
               lang === "en" ? "Sending..." : 
               "Wird gesendet..."}
            </>
          ) : (
            <>
              {lang === "sr" ? "Pošalji poruku" : 
               lang === "en" ? "Send message" : 
               "Nachricht senden"}
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              subject: "",
              message: "",
              file: null,
            });
            setErrors({});
          }}
          className="inline-flex justify-center rounded-sm border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/6"
        >
          {lang === "sr" ? "Poništi" : 
           lang === "en" ? "Clear" : 
           "Löschen"}
        </button>
      </div>
    </form>
  );
}
