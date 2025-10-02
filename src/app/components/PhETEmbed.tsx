export default function PhETEmbed() {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://phet.colorado.edu/sims/cheerpj/membrane-channels/latest/membrane-channels.html?simulation=membrane-channels"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
      />
    </div>
  );
}
