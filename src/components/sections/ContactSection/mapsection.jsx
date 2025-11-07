const MapSection = () => {
  return (
    <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.885423705016!2d79.9758501!3d6.9249271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2570065f14367%3A0x3373219c10fe8744!2sYesho%20Intelligence%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1730998800000!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yesho Intelligence Pvt Ltd"
      ></iframe>
    </div>
  );
};

export default MapSection;
