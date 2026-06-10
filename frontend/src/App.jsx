import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-bio-gray">
      <header className="bg-white shadow-soft">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-bio-green">Biology E-Learning</h1>
          <div className="flex gap-4">
            <button className="btn-outline">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bio-dark mb-4">Welcome to Biology E-Learning Platform</h2>
          <p className="text-lg text-gray-600 mb-8">Study Biology online, take quizzes, and track your academic progress</p>
          <button className="btn-primary text-lg px-8 py-3">Explore Now</button>
        </section>
      </main>
    </div>
  )
}

export default App
