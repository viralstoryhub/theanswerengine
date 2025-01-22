import React from 'react';
import { Bot, ArrowRight, Sparkles, Zap, Shield, Check, Brain, Database, Globe, Network, Fingerprint, Settings, Lock, Lightbulb } from 'lucide-react';

// Keep existing interfaces

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Header */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
        <nav className="container flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold gradient-text">Answer Engine AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
              The Future of AI-Powered Answers
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get instant, accurate answers to your questions with our advanced AI engine. Experience the next generation of information retrieval.
            </p>
            <button className="button-primary flex items-center justify-center mx-auto">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card p-8 animate-float">
              <h3 className="text-4xl font-bold mb-2 gradient-text">10ms</h3>
              <p className="text-gray-400">Average Response Time</p>
            </div>
            <div className="card p-8 animate-float [animation-delay:200ms]">
              <h3 className="text-4xl font-bold mb-2 gradient-text">99.9%</h3>
              <p className="text-gray-400">Accuracy Rate</p>
            </div>
            <div className="card p-8 animate-float [animation-delay:400ms]">
              <h3 className="text-4xl font-bold mb-2 gradient-text">1B+</h3>
              <p className="text-gray-400">Questions Answered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose Answer Engine?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Understanding</h3>
              <p className="text-gray-400">Advanced natural language processing for accurate comprehension of queries.</p>
            </div>
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-400">Get answers in milliseconds with our optimized response system.</p>
            </div>
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliable & Accurate</h3>
              <p className="text-gray-400">Enterprise-grade accuracy with continuous learning and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* Unique AI Features Section - Cyber Grid */}
      <section className="py-20 relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a5560_1px,transparent_1px),linear-gradient(to_bottom,#4a5560_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              AI Core Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge capabilities powering intelligent interactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Neural Processing Unit */}
            <div className="cyber-card group border border-cyan-400/20 hover:border-cyan-400/40">
              <div className="cyber-glow"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-cyan-900/30 border border-cyan-400/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Neural Processing</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400"></div>
                    Context-aware analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400"></div>
                    Semantic understanding
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400"></div>
                    Multi-language support
                  </li>
                </ul>
              </div>
            </div>

            {/* Knowledge Graph Engine */}
            <div className="cyber-card group border border-purple-400/20 hover:border-purple-400/40">
              <div className="cyber-glow"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-purple-900/30 border border-purple-400/20 flex items-center justify-center">
                  <Database className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Knowledge Engine</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400"></div>
                    Real-time verification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400"></div>
                    Dynamic graphs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400"></div>
                    Source analysis
                  </li>
                </ul>
              </div>
            </div>

            {/* Adaptive Response System */}
            <div className="cyber-card group border border-pink-400/20 hover:border-pink-400/40">
              <div className="cyber-glow"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-pink-900/30 border border-pink-400/20 flex items-center justify-center">
                  <Settings className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Adaptive Response</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400"></div>
                    Context-based formatting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400"></div>
                    Multi-format support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400"></div>
                    Dynamic complexity adjustment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative z-10 mt-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 gradient-text">AI Cognitive Core</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced neural architectures enabling human-like understanding
            </p>
          </div>
          
          {/* Hexagonal Grid Container */}
          <div className="relative h-[600px] w-full">
            {/* Central Hexagon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Orbiting Hexagon 1 */}
              <div className="absolute animate-orbit [animation-delay:-7s]">
                <div className="hexagon bg-gradient-to-br from-blue-500/80 to-purple-600/80">
                  <div className="hex-inner bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 hover:bg-black/50 transition-all">
                    <Brain className="w-8 h-8 text-blue-400 mb-2" />
                    <h4 className="font-bold text-sm">NLU Core</h4>
                  </div>
                </div>
              </div>
              <div className="hexagon bg-gradient-to-br from-purple-600 to-blue-500 p-1 animate-pulse">
                {/* Orbiting Hexagon 1 */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit [animation-delay:-7s]">
                  <div className="hexagon-sm bg-gradient-to-br from-blue-500/80 to-purple-600/80">
                    <div className="hex-inner bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 hover:bg-black/50 transition-all">
                      <Brain className="w-8 h-8 text-blue-400 mb-2" />
                      <h4 className="font-bold text-sm">NLU Core</h4>
                    </div>
                  </div>
                </div>
                <div className="hex-inner bg-black flex items-center justify-center flex-col p-8">
                  <Brain className="w-16 h-16 text-purple-300 mb-4" />
                  <h3 className="text-2xl font-bold">Neural Core</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Unique AI Features</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Discover our innovative AI capabilities that set us apart from traditional solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Knowledge Synthesis */}
            <div className="card p-8 bg-accent/20 border border-accent hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Natural Language Understanding</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent-content" />
                    <span>Context-aware processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent-content" />
                    <span>Sentiment analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent-content" />
                    <span>Intent recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent-content" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent-content" />
                    <span>Semantic understanding</span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Adaptive Learning System */}
            <div className="card p-8 bg-warning/20 border border-warning hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="bg-warning w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Response System</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-warning-content" />
                    <span>Context-based formatting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-warning-content" />
                    <span>Personalized output style</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-warning-content" />
                    <span>Multi-format support (text, code, data)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-warning-content" />
                    <span>Dynamic complexity adjustment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-warning-content" />
                    <span>Interactive clarification system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Advanced Processing Features */}
            <div className="card p-8 bg-primary/10 border border-primary hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Processing Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Natural Language Understanding</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Context-aware processing</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Sentiment analysis</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Intent recognition</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Semantic understanding</span>
                  </li>
                </ul>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Knowledge Processing</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Real-time fact verification</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Cross-reference checking</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Source credibility assessment</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Dynamic knowledge graph building</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Automated learning from interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intelligent Response System */}
            <div className="card p-8 bg-secondary/10 border border-secondary hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Response System</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Adaptive Response Generation</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Context-based formatting</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Personalized output style</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Multi-format support (text, code, data)</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Dynamic complexity adjustment</span>
                  </li>
                  <li className="ml-6 flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span>Interactive clarification system</span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Advanced Security Features */}
            <div className="card p-8 bg-accent/10 border border-accent hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Processing Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Context-aware processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Sentiment analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Intent recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Semantic understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Experience the Power of AI</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Revolutionary AI technology for instant, accurate answers to your questions.
              </p>
              <button className="button-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-primary" />
                <span className="font-bold gradient-text">Answer Engine</span>
              </div>
              <p className="text-gray-400">
                The next generation of AI-powered information retrieval.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-400">
            <p>&copy; 2024 The Answer Engine AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
