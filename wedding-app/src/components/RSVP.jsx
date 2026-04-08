import { useState, useCallback, useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import { submitRSVP } from '../firebase';

const AVAILABLE_EVENTS = ['Mehndi', 'Haldi', 'Sangeet', 'Wedding'];

export default function RSVP() {
  const ref = useReveal();
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    response: 'Gladly Accept',
    events: [],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [toast, setToast] = useState(null);
  const formDataRef = useRef(formData);
  useEffect(() => { formDataRef.current = formData; }, [formData]);

  const openEnvelope = useCallback(() => {
    if (!envelopeOpen) {
      setEnvelopeOpen(true);
    }
  }, [envelopeOpen]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleEventToggle = useCallback((eventName) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(eventName)
        ? prev.events.filter((e) => e !== eventName)
        : [...prev.events, eventName],
    }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.response === 'Gladly Accept' && formData.events.length === 0) {
      newErrors.events = 'Please select at least one event';
    }
    return newErrors;
  }, [formData]);

  const showToast = useCallback((message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      await submitRSVP(formDataRef.current);

      setStatus('success');
      showToast('Your RSVP has been received! We look forward to celebrating with you.', 'success');
      setFormData({ name: '', email: '', response: 'Gladly Accept', events: [], message: '' });
    } catch {
      setStatus('error');
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  }, [validate, showToast]);

  return (
    <section ref={ref} className="py-32 px-6 bg-teal-bright relative overflow-hidden" id="rsvp" aria-label="RSVP">
      <div className="absolute inset-0 sacred-geometry-pattern opacity-10" aria-hidden="true" />
      <div className="max-w-4xl mx-auto envelope-container relative z-10 reveal">
        <div
          className={`envelope-wrapper shadow-2xl border-t-[8px] border-saffron rounded-b-lg ${envelopeOpen ? 'envelope-open' : ''}`}
        >
          <div className="envelope-flap" aria-hidden="true" />
          <button
            className="wax-seal"
            onClick={openEnvelope}
            aria-label="Open RSVP envelope"
          >
            S&amp;S
          </button>

          <div className="form-content p-8 md:p-24 relative z-10 bg-white">
            <div className="text-center mb-16 space-y-6">
              <h2 className="font-cursive text-6xl md:text-8xl text-teal-bright normal-case leading-none">
                Confirm Your Attendance
              </h2>
              <p className="font-body text-lg text-earth-brown/70 max-w-lg mx-auto font-medium tracking-wide">
                It would be our greatest honor to have you share in our joy. Please let us know if you can join our celebration.
              </p>
              <div className="pt-6 border-b border-saffron/30 pb-4 inline-block">
                <p className="text-[12px] tracking-[0.4em] uppercase text-warm-orange font-black">
                  Kindly respond by October 15, 2026
                </p>
              </div>
            </div>

            {status === 'success' ? (
              <div className="text-center space-y-8 py-12">
                <span className="material-symbols-outlined text-saffron text-8xl" aria-hidden="true">celebration</span>
                <h3 className="font-headline text-3xl text-earth-brown font-black uppercase">Thank You!</h3>
                <p className="text-earth-brown/70 text-lg max-w-md mx-auto">
                  Your response has been recorded. We can&apos;t wait to celebrate with you!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-warm-orange text-white font-bold text-sm tracking-[0.3em] uppercase hover:bg-teal-bright transition-all duration-500"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-3 group">
                    <label htmlFor="rsvp-name" className="text-[11px] tracking-[0.3em] uppercase text-teal-bright/60 group-focus-within:text-warm-orange transition-colors font-black">
                      Full Name *
                    </label>
                    <input
                      id="rsvp-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.name ? 'border-red-400' : 'border-teal-bright/10'} focus:ring-0 focus:border-warm-orange transition-all py-4 px-0 placeholder:text-teal-bright/20 text-earth-brown font-bold outline-none`}
                      placeholder="Your Name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-3 group">
                    <label htmlFor="rsvp-email" className="text-[11px] tracking-[0.3em] uppercase text-teal-bright/60 group-focus-within:text-warm-orange transition-colors font-black">
                      Email *
                    </label>
                    <input
                      id="rsvp-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-400' : 'border-teal-bright/10'} focus:ring-0 focus:border-warm-orange transition-all py-4 px-0 placeholder:text-teal-bright/20 text-earth-brown font-bold outline-none`}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label htmlFor="rsvp-response" className="text-[11px] tracking-[0.3em] uppercase text-teal-bright/60 group-focus-within:text-warm-orange transition-colors font-black">
                    Response
                  </label>
                  <select
                    id="rsvp-response"
                    name="response"
                    value={formData.response}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2 border-teal-bright/10 focus:ring-0 focus:border-warm-orange transition-all py-4 px-0 text-earth-brown font-bold outline-none"
                  >
                    <option>Gladly Accept</option>
                    <option>Regretfully Decline</option>
                  </select>
                </div>

                {formData.response === 'Gladly Accept' && (
                  <div className="space-y-8">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-teal-bright/60 font-black">
                      Events Attending *
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {AVAILABLE_EVENTS.map((eventName) => (
                        <label
                          key={eventName}
                          className={`flex items-center gap-4 cursor-pointer p-4 border transition-all rounded-md ${
                            formData.events.includes(eventName)
                              ? 'border-warm-orange bg-warm-orange/5'
                              : 'border-teal-bright/10 hover:border-warm-orange hover:bg-off-white'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.events.includes(eventName)}
                            onChange={() => handleEventToggle(eventName)}
                            className="rounded-full border-2 border-saffron text-warm-orange focus:ring-warm-orange h-5 w-5"
                            aria-label={`Attend ${eventName}`}
                          />
                          <span className="text-xs uppercase tracking-[0.2em] font-black text-earth-brown">
                            {eventName}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.events && <p className="text-red-500 text-xs">{errors.events}</p>}
                  </div>
                )}

                <div className="space-y-3 group">
                  <label htmlFor="rsvp-message" className="text-[11px] tracking-[0.3em] uppercase text-teal-bright/60 group-focus-within:text-warm-orange transition-colors font-black">
                    Message (Optional)
                  </label>
                  <textarea
                    id="rsvp-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-transparent border-0 border-b-2 border-teal-bright/10 focus:ring-0 focus:border-warm-orange transition-all py-4 px-0 placeholder:text-teal-bright/20 text-earth-brown font-bold outline-none resize-none"
                    placeholder="Any dietary restrictions or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-8 bg-warm-orange text-white font-body text-sm tracking-[0.5em] uppercase font-black hover:bg-teal-bright transition-all duration-700 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Your Blessing'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-lg shadow-2xl toast-enter max-w-md text-center ${
            toast.type === 'success'
              ? 'bg-dark-teal text-white'
              : 'bg-red-600 text-white'
          }`}
          role="alert"
          aria-live="polite"
        >
          <p className="text-sm font-bold tracking-wide">{toast.message}</p>
        </div>
      )}
    </section>
  );
}
