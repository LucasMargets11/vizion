import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { validateEmail } from '@/lib/form';

interface FormState { nombre: string; email: string; mensaje: string; servicio: string }

const WHATSAPP_NUMBER = '5491112345678'; // Reemplazar con número real

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', mensaje: '', servicio: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!form.nombre) errs.nombre = 'Requerido';
    if (!validateEmail(form.email)) errs.email = 'Email inválido';
    if (!form.mensaje) errs.mensaje = 'Requerido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const subject = encodeURIComponent('Contacto desde sitio Lumiax');
      const body = encodeURIComponent(`Nombre: ${form.nombre}\nServicio: ${form.servicio}\nMensaje: ${form.mensaje}`);
      window.location.href = `mailto:contacto@lumiax.agency?subject=${subject}&body=${body}`;
    }
  };

  const waMessage = encodeURIComponent(`Hola, soy ${form.nombre || '(Nombre)'} y me interesa ${form.servicio || 'sus servicios'}.`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-xl">
      <div>
        <label className="mb-2 block text-sm font-medium">Nombre</label>
        <Input value={form.nombre} onChange={(e) => update('nombre', e.target.value)} aria-invalid={!!errors.nombre} />
  {errors.nombre && <p className="mt-1 text-xs text-base-white/70">{errors.nombre}</p>}
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} />
  {errors.email && <p className="mt-1 text-xs text-base-white/70">{errors.email}</p>}
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Servicio de interés</label>
        <select
          className="w-full rounded-md bg-base-white/5 border border-base-white/20 px-4 py-2 text-sm text-base-white focus:border-base-white/60 focus:ring-2 focus:ring-base-white/60"
          value={form.servicio}
          onChange={(e) => update('servicio', e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>Producción</option>
            <option>Postproducción</option>
            <option>Branding audiovisual</option>
            <option>Spots</option>
            <option>Contenido / Reels</option>
            <option>Streaming</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Mensaje</label>
        <Textarea value={form.mensaje} onChange={(e) => update('mensaje', e.target.value)} aria-invalid={!!errors.mensaje} />
  {errors.mensaje && <p className="mt-1 text-xs text-base-white/70">{errors.mensaje}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button type="submit" variant="primary">Enviar</Button>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex">
          <Button type="button" variant="secondary">WhatsApp</Button>
        </a>
      </div>
    </form>
  );
};
