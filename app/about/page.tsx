import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
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
                About J-Reach
              </h1>
              <p className="text-xl text-yellow-700 mb-8">
                Revolutionizing lead generation through cold outbound mastery
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-yellow-800 mb-8">Our Story</h2>
              <p className="text-lg text-yellow-700 mb-6">
                J-Reach was founded with a simple yet powerful vision: to revolutionize the way businesses generate leads. We recognized the limitations and risks associated with traditional lead generation methods, particularly paid advertising, and set out to create a more effective, sustainable, and reputation-friendly approach.
              </p>
              <p className="text-lg text-yellow-700 mb-6">
                Our journey began with a deep dive into the world of cold outbound strategies. We studied, experimented, and refined our techniques, always with the goal of delivering consistent, high-quality leads to our clients. Through countless iterations and real-world applications, we developed our unique methodology that now forms the core of J-Reach's services.
              </p>
              <p className="text-lg text-yellow-700 mb-6">
                Today, J-Reach stands as a leader in the field of cold outbound lead generation. We've helped businesses across various industries transform their growth trajectories, providing them with a steady stream of qualified leads without the risks associated with traditional methods.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-beige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push the boundaries of what's possible in lead generation, staying ahead of industry trends and leveraging cutting-edge strategies.",
                },
                {
                  title: "Integrity",
                  description: "We believe in transparent, ethical practices that protect our clients' reputations and build long-term trust with prospects.",
                },
                {
                  title: "Results-Driven",
                  description: "Our focus is always on delivering measurable, impactful results that drive real business growth for our clients.",
                },
                {
                  title: "Customization",
                  description: "We understand that every business is unique, and we tailor our strategies to fit each client's specific needs and goals.",
                },
                {
                  title: "Continuous Improvement",
                  description: "We're never satisfied with the status quo. We continuously refine and optimize our processes to ensure the best possible outcomes.",
                },
                {
                  title: "Client Success",
                  description: "Our clients' success is our success. We're committed to being true partners in our clients' growth journeys.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Ready to Transform Your Lead Generation?</h2>
            <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
              Experience the J-Reach difference and unlock a new level of growth for your business.
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