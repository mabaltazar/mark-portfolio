function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Me</h2>
      <p className="text-slate-400 mb-8">Interested in collaborating or have a question? Let’s connect!</p>
      <form
        action="https://formspree.io/f/xyzjqepg" // <-- Replace this!
        method="POST"
        className="space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-slate-800 text-white rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-slate-800 text-white rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-2 bg-slate-800 text-white rounded"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
