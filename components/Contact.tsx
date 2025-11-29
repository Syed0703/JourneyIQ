'use clinet'
import { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(form.name == "" || form.email == "" || form.message == ""){
      setMessage("Fill up all the fields")
    }
    else{
      setMessage("Message sent successfully !")
      setTimeout(() => {
        setMessage("");
      },1000)
    }

  };

  return (
    <section id="contact" className="w-full py-20 bg-white border-b-2 border-gray-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">📩 Lets Plan Together</h2>
        <p className="text-gray-600 mb-8">
          Have questions or want a custom trip plan? Reach out to us.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 text-left"
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition cursor-pointer"
          >
            Send Message
          </button>
          <p className="text-red-700 text-center">{message}</p>
        </form>
      </div>
    </section>
  );

}

export default Contact
