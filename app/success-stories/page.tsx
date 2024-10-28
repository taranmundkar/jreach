import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-beige-50">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                alt="J-reach logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-yellow-800 hover:text-yellow-600 font-medium">Home</Link>
              <Link href="/about" className="text-yellow-800 hover:text-yellow-600 font-medium">About</Link>
              <Link href="/services" className="text-yellow-800 hover:text-yellow-600 font-medium">Services</Link>
              <Link href="/contact" className="text-yellow-800 hover:text-yellow-600 font-medium">Contact</Link>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="bg-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-yellow-700 mb-8">
                Discover how J-Reach has transformed businesses through our cold outbound mastery
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: "TechInnovate Solutions",
                  industry: "AI Sector",
                  challenge: "Struggling to generate quality leads",
                  solution: "Partnered with J-Reach for cold outbound lead generation",
                  result: "300% increase in qualified leads within the first three months",
                },
                {
                  company: "Global Logistics Pro",
                  industry: "Logistics",
                  challenge: "Looking to expand into new markets",
                  solution: "J-Reach developed a comprehensive lead generation campaign",
                  result: "250% increase in lead volume and improved lead quality",
                },
                {
                  company: "FinTech Pioneers",
                  industry: "Financial Technology",
                  challenge: "High customer acquisition costs through traditional channels",
                  solution: "Implemented J-Reach's targeted cold outbound strategy",
                  result: "Reduced customer acquisition costs by 40% while doubling new client onboarding",
                },
                {
                  company: "EcoSmart Solutions",
                  industry: "Green Technology",
                  challenge: "Difficulty reaching decision-makers in large corporations",
                  solution: "Utilized J-Reach's personalized outreach techniques",
                  result: "Secured meetings with C-level executives at 5 Fortune 500 companies within 2 months",
                },
              ].map((story, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">{story.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">Industry: {story.industry}</p>
                    <p className="mb-2"><span className="font-semibold">Challenge:</span> {story.challenge}</p>
                    <p className="mb-2"><span className="font-semibold">Solution:</span> {story.solution}</p>
                    <p><span className="font-semibold">Result:</span> {story.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-beige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "J-Reach transformed our lead generation process. Their expertise in cold outbound strategies has been a game-changer for our business growth.",
                  author: "Sarah Johnson",
                  position: "CEO, TechInnovate Solutions",
                },
                {
                  quote: "The results we've seen with J-Reach have far exceeded our expectations. They've opened doors we couldn't have imagined.",
                  author: "Michael Chen",
                  position: "Marketing Director, Global Logistics Pro",
                },
                {
                  quote: "J-Reach's approach to lead generation is truly unique. They've helped us reach decision-makers we've been trying to connect with for years.",
                  author: "Emily Rodriguez",
                  position: "Sales Manager, FinTech Pioneers",
                },
                {
                  quote: "Working with J-Reach has been a pleasure. Their team is professional, responsive, and most importantly, they deliver results.",
                  author: "David Thompson",
                  position: "Founder, EcoSmart Solutions",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-yellow-700">{testimonial.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
              Join the ranks of businesses that have transformed their growth trajectory with J-Reach's cold outbound mastery.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Link href="/schedule-call">Schedule Your Strategy Call Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-beige-100 text-yellow-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                alt="J-reach logo"
                width={40}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-yellow-700 hover:text-yellow-600">Home</Link></li>
                <li><Link href="/about" className="text-yellow-700 hover:text-yellow-600">About</Link></li>
                <li><Link href="/services" className="text-yellow-700 hover:text-yellow-600">Services</Link></li>
                <li><Link href="/contact" className="text-yellow-700 hover:text-yellow-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-yellow-700">Email: junte@j-reach.com</p>
              <p className="text-sm text-yellow-700">Phone: +1 (833) 470-0525</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-yellow-700 hover:text-yellow-600">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-yellow-700 hover:text-yellow-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-yellow-300 text-center">
            <p className="text-sm text-yellow-700">
              &copy; {new Date().getFullYear()} J-Reach. All rights reserved. | <Link href="/privacy-policy" className="hover:text-yellow-600 ml-2">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-yellow-600 ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}