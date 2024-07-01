import React from 'react';
 
const MainLanding= () => {
  return (
    <div className="landing-page font-sans">
      {/* Header */}
      <header className="bg-[#4A154B] py-6">
      <nav className="container mx-auto flex justify-between items-center px-40">
  <div className="flex items-center space-x-6">
  <img src="logo.png" alt="Slack Logo" className="h-10 w-auto" /> 
    <ul className="flex space-x-8">
      <li><a className="text-white font-medium" href="#features">Features</a></li>
      <li><a className="text-white font-medium" href="#pricing">Pricing</a></li>
      <li><a className="text-white font-medium" href="#contact">Contact</a></li>
      <li><a className="text-white font-medium" href="#solution">Solution</a></li>
      <li><a className="text-white font-medium" href="#resources">Resources</a></li>
      
    </ul>
  </div>
  <div className="flex items-center space-x-6">
    <button className="text-white border text-md font-medium border-white bg-[#4A154B] px-10 py-2 rounded">LOG IN</button>
    <button className="bg-white text-[#4A154B] font-medium text-md px-10 py-2 rounded">CREATE A NEW WORKSPACE</button>
  </div>
</nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-[#4A154B] text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Slack </h1>
          <p className="text-lg md:text-xl mb-6">Where teams collaborate efficiently and effectively.</p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-lg text-lg">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-item p-6 border rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Real-time Messaging</h3>
              <p className="text-lg">Communicate with your team in real-time with instant messaging.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-item p-6 border rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Channel Organization</h3>
              <p className="text-lg">Organize conversations into channels for different projects and topics.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-item p-6 border rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">File Sharing</h3>
              <p className="text-lg">Share files and documents seamlessly within your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="flex justify-center space-x-8">
            {/* Free Plan */}
            <div className="price-plan-item p-6 border rounded-lg shadow-lg text-center bg-white flex-1">
              <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
              <p className="text-4xl font-bold mb-4">$0</p>
              <p className="text-lg">Basic features for small teams.</p>
            </div>
            {/* Pro Plan */}
            <div className="price-plan-item p-6 border rounded-lg shadow-lg text-center bg-white flex-1">
              <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-4xl font-bold mb-4">$15</p>
              <p className="text-lg">Advanced features for growing teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg">Email: support@slackclone.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-purple-900 text-white py-6 text-center">
        <p>&copy; 2024 Slack Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLanding;
