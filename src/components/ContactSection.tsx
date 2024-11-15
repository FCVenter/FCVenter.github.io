import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => (
  <section className="contact p-8 text-center">
    <h2 className="text-3xl font-semibold">Contact</h2>
    <div className="mt-4 space-y-4 text-gray-800 dark:text-white">
      <p className="flex items-center justify-center space-x-2">
        <FaPhone /> <span>+27 82 729 1986</span>
      </p>
      <p className="flex items-center justify-center space-x-2">
        <FaEnvelope /> <span>fcventer17@gmail.com</span>
      </p>
      <p className="flex items-center justify-center space-x-2">
        <FaMapMarkerAlt /> <span>Potchefstroom, South Africa</span>
      </p>
    </div>
  </section>
);

export default ContactSection;
