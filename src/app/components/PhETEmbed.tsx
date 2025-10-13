export default function PhETEmbed() {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://phet.colorado.edu/sims/html/neuron/latest/neuron_en.html"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
      />
    </div>
  );
}
