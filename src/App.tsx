import QRCodeImage from "./assets/images/image-qr-code.png";

function App() {
  return (
    <main className="flex items-center justify-center w-screen min-h-screen">
      <section className="flex flex-col px-4 pt-4 pb-10 max-w-80 bg-pure-white rounded-[20px] gap-6 shadow-xl">
        <div className="rounded-[10px]">
          <img
            className="rounded-[10px] h-auto max-w-full"
            src={QRCodeImage}
            alt="scannable qr code"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 text-center">
          <h4 className="text-lg font-bold text-dark-slate">
            Improve your front-end skills by building projects
          </h4>
          <p className="text-base tracking-wide text-light-slate">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
