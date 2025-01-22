import React from 'react';
import { Bot, ArrowRight, Sparkles, Zap, Shield, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8" />
            <span className="text-xl font-bold">Agent X</span>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Join Waitlist
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Your AI Agent Workforce
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Deploy autonomous AI agents to handle your routine tasks. Scale your operations without scaling your team.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center mx-auto">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Agent X?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Autonomous Operations"
              description="Our agents work independently, handling tasks without constant supervision."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Lightning Fast"
              description="Agents complete tasks in seconds, operating 24/7 without breaks."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure & Reliable"
              description="Enterprise-grade security with guaranteed uptime and data protection."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to scale with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Agent X to automate their operations.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="w-6 h-6" />
              <span className="font-bold">Agent X</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;