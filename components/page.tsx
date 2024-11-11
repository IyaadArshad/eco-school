'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useChat } from '@/hooks/useChat'
import Image from 'next/image'
import { Menu, X, Send, ChevronDown } from 'lucide-react'

export function BlockPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13111C] to-[#200010]">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-lg rounded-b-3xl'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Image
                src="/CIS_LOGO_40th_2024.png"
                alt="School Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">AI Chat</a>
                <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">AI Chat</a>
              <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-6">
            Eco-Friendly School Project
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore our innovative model of Cambridge International School Dubai, featuring sustainable energy solutions and modern facilities.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#800020] to-[#4A0010] hover:opacity-90 text-white"
              onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ask AI About Our Project
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-0 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">About The Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Created by Iyaad Mohamed Arshad from Year 10-1, this exceptional model showcases our vision for a sustainable future in education.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Model dimensions: 50cm × 125cm</li>
                  <li>• Integrated wind farm facility</li>
                  <li>• Solar panel roofing system</li>
                  <li>• Sustainable rooftop garden</li>
                  <li>• Multiple sports facilities</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#800020]/20 to-[#FFD700]/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                    <span className="text-gray-300">Eco-friendly design principles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                    <span className="text-gray-300">Renewable energy integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                    <span className="text-gray-300">Advanced water management</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Chat Section */}
      <section id="chat" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-black/30 backdrop-blur-lg border-0 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Ask AI Anything About Our Project</h2>
            <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-[#800020] text-white'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about our eco-friendly school project..."
                className="bg-white/5 border-0 focus:ring-2 ring-[#FFD700]/50 text-white"
              />
              <Button type="submit" size="icon" className="bg-[#800020] hover:bg-[#600018]">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-0 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "What sustainable features does the model include?",
                  a: "The model incorporates wind farms, solar panels, and a rooftop garden with an integrated gutter system."
                },
                {
                  q: "What are the dimensions of the model?",
                  a: "The model measures 50 cm in width and 125 cm in length."
                },
                {
                  q: "What recreational facilities are included?",
                  a: "The model features both a small and large football field representing the school's sporting facilities."
                },
                {
                  q: "How does the water management system work?",
                  a: "The rooftop garden includes an integrated gutter system that helps manage and conserve water efficiently."
                }
              ].map((faq, i) => (
                <Card key={i} className="bg-black/20 border-0 p-6 rounded-2xl">
                  <h3 className="font-semibold text-[#FFD700] mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}