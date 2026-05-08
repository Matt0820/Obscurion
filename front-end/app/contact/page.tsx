'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Clock, Instagram, Send, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@obscurion.com',
    description: 'Respondemos em até 48h',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@obscurion.store',
    description: 'DM aberta para dúvidas',
  },
  {
    icon: Clock,
    title: 'Atendimento',
    value: 'Seg a Sex, 10h às 18h',
    description: 'Horário de Brasília',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-shadow border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-bone mb-4">
            Contato
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Tem alguma dúvida, sugestão ou quer fazer parte do nosso ritual? 
            Entre em contato conosco.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-xl font-semibold tracking-wide text-bone mb-6">
              Informações
            </h2>

            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card border border-ash p-6 hover:border-blood/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-blood" />
                  </div>
                  <div>
                    <h3 className="font-medium text-bone mb-1">{info.title}</h3>
                    <p className="text-blood text-sm mb-1">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ Note */}
            <div className="bg-card border border-ash p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blood" />
                </div>
                <div>
                  <h3 className="font-medium text-bone mb-1">Dúvidas Frequentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Antes de enviar sua mensagem, confira se sua dúvida já foi respondida em nossa FAQ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-ash p-6 lg:p-8">
              <h2 className="font-serif text-xl font-semibold tracking-wide text-bone mb-6">
                Envie sua Mensagem
              </h2>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-900/30 border border-green-700 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-bone mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground">
                    Recebemos sua mensagem e responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-bone mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bone mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone text-sm focus:outline-none focus:border-blood transition-colors cursor-pointer"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida sobre produto</option>
                      <option value="pedido">Acompanhamento de pedido</option>
                      <option value="troca">Troca ou devolução</option>
                      <option value="parceria">Parceria ou colaboração</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bone border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
