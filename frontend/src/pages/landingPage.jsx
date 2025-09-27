import React from "react";
import Logo from "../assets/icons/logo1.png";
import HeroImg from "../assets/images/hero-img.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f8ff] min-h-screen flex flex-col">
      <section
        className="bg-center bg-cover h-[100vh]"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="bg-black/80 absolute top-0 right-0 h-full w-full "></div>
        {/* Header */}
        <header className=" text-white px-4 py-4 flex items-center justify-between relative z-20 ">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="EdgeCast Logo" className="" />
            {/* <span className="font-bold text-lg">EdgeCast</span> */}
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-400">
              How It Works
            </a>
            <a href="#" className="hover:text-blue-400">
              Leaderboard
            </a>
            <a href="#" className="hover:text-blue-400">
              FAQ
            </a>
          </nav>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
          >
            Get Started
          </button>
        </header>

        {/* Hero Section */}
        <section className="relative text-white flex flex-col items-center justify-center py-16 px-4">
          <div className="absolute inset-0 z-0 pointer-events-none"></div>
          <div className="relative z-10 flex pt-7 flex-col items-center">
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-2">
              PREDICT, STAKE <br className="hidden md:block" />{" "}
              <span className="text-orange-500">& WIN</span>
            </h1>
            <p className="text-center text-base md:text-lg mb-6 max-w-xl">
              Turn the edge of your predictions into crypto rewards. Stake,
              predict, and win on the future of markets.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Started
              </button>
              <button className=" hover:bg-blue-600 border text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all">
                View active games
              </button>
            </div>
            <img src="/hero-graphic.png" alt="" className="mt-8 w-64 md:w-96" />
          </div>
        </section>
      </section>

      {/* Why Choose Edge Cast */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose Edge Cast?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#f5f8ff] rounded-lg p-6 flex flex-col items-center shadow">
            <img src="/icon-secure.svg" alt="" className="h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Instant Payouts</h3>
            <p className="text-center text-sm text-gray-600">
              Win and receive your crypto rewards instantly, no waiting.
            </p>
          </div>
          <div className="bg-[#f5f8ff] rounded-lg p-6 flex flex-col items-center shadow">
            <img src="/icon-global.svg" alt="" className="h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Low Fees</h3>
            <p className="text-center text-sm text-gray-600">
              Enjoy competitive staking fees and maximize your earnings.
            </p>
          </div>
          <div className="bg-[#f5f8ff] rounded-lg p-6 flex flex-col items-center shadow">
            <img src="/icon-anon.svg" alt="" className="h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Decentralized & Secure
            </h3>
            <p className="text-center text-sm text-gray-600">
              Your funds and predictions are safe on our decentralized platform.
            </p>
          </div>
        </div>
      </section>

      {/* Predict the Future */}
      <section className="bg-[#eaf0fa] py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Predict the Future. Win Crypto.
        </h2>
        <p className="mb-6 text-gray-700">
          Join thousands of predictors and stake your claim on the next big
          market moves.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all">
          Start Predicting
        </button>
      </section>

      {/* How To Play */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How To Play
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <span className="text-blue-500 font-bold text-2xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Connect Wallet</h3>
            <p className="text-center text-sm text-gray-600">
              Sign in securely with your crypto wallet.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <span className="text-blue-500 font-bold text-2xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Make Prediction</h3>
            <p className="text-center text-sm text-gray-600">
              Choose a market, stake your crypto, and predict the outcome.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <span className="text-blue-500 font-bold text-2xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Win & Withdraw</h3>
            <p className="text-center text-sm text-gray-600">
              If your prediction is correct, claim your winnings instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Top Predictors */}
      <section className="bg-[#eaf0fa] py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Top Predictors
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-2">Rank</th>
                <th className="py-2">User</th>
                <th className="py-2">Winnings</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, user: "0xA1B...C3D", winnings: "2.5 ETH" },
                { rank: 2, user: "0xF4E...B2A", winnings: "2.1 ETH" },
                { rank: 3, user: "0xD3C...E1F", winnings: "1.8 ETH" },
                { rank: 4, user: "0xB2A...F4E", winnings: "1.5 ETH" },
                { rank: 5, user: "0xC3D...A1B", winnings: "1.2 ETH" },
              ].map((item) => (
                <tr key={item.rank} className="border-b last:border-none">
                  <td className="py-2 font-bold">{item.rank}</td>
                  <td className="py-2">{item.user}</td>
                  <td className="py-2 text-blue-500 font-semibold">
                    {item.winnings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Ready To Make Your First Prediction?
        </h2>
        <p className="mb-6 text-gray-700">
          Sign up now and start winning crypto rewards!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#181c2b] text-white py-8 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="EdgeCast Logo" className="h-6 w-6" />
            <span className="font-bold text-lg">EdgeCast</span>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <img src="/icon-twitter.svg" alt="Twitter" className="h-5" />
            </a>
            <a href="#">
              <img src="/icon-discord.svg" alt="Discord" className="h-5" />
            </a>
            <a href="#">
              <img src="/icon-telegram.svg" alt="Telegram" className="h-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} EdgeCast. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
