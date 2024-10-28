import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Calendar, PhoneCall, Target, ClipboardCheck, Shield, Zap, TrendingUp } from "lucide-react"

export default function Services() {
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
                Our Services
              </h1>
              <p className="text-xl text-yellow-700 mb-8">
                Discover how J-Reach can transform your lead generation and accelerate your business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-12 text-center">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cold Outbound Strategy Development",
                  description: "We craft personalized cold outbound strategies tailored to your specific industry, target audience, and business goals.",
                  icon: <Target className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Lead Generation Campaigns",
                  description: "Our team executes highly effective lead generation campaigns using our proven cold outbound methodologies.",
                  icon: <Users className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Lead Qualification and Nurturing",
                  description: "We qualify and nurture leads through our expert process, ensuring you only engage with high-potential prospects.",
                  icon: <ClipboardCheck className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Campaign Optimization",
                  description: "Continuous analysis and optimization of your campaigns to improve performance and ROI over time.",
                  icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Sales Process Integration",
                  description: "Seamless integration of qualified leads into your sales process, including direct calendar scheduling.",
                  icon: <Calendar className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Comprehensive Reporting",
                  description: "Detailed reporting and analytics to track campaign performance and demonstrate clear ROI.",
                  icon: <CheckCircle className="h-6 w-6 text-yellow-500" />,
                },
              ].map((service, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-yellow-800">
                      {service.icon}
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-beige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-12 text-center">Why Choose J-Reach?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proven Expertise",
                  description: "Our team has a track record of success in cold outbound lead generation across various industries.",
                  icon: <CheckCircle className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Customized Approach",
                  description: "We tailor our strategies to your specific business needs, ensuring maximum relevance and effectiveness.",
                  icon: <Target className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Brand Protection",
                  description: "Our methods safeguard your brand reputation while delivering high-quality leads.",
                  icon: <Shield className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Scalable Solutions",
                  description: "Our strategies are designed to scale with your business, supporting your growth at every stage.",
                  icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Rapid Implementation",
                  description: "Get your campaigns up and running quickly with our streamlined onboarding process.",
                  icon: <Zap className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Continuous Support",
                  description: "Our team provides ongoing support and optimization to ensure long-term success.",
                  icon: <PhoneCall className="h-6 w-6 text-yellow-500" />,
                },
              ].map((item, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-yellow-800">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-12 text-center">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <ol className="relative border-l border-yellow-500">
                {[
                  { title: "Strategy Development", description: "We work closely with you to understand your business and develop a tailored cold outbound strategy." },
                  { title: "Campaign Setup", description: "Our team sets up the necessary tools and systems for your lead generation campaign." },
                  { title: "Outreach Execution", description: "We execute the campaign, reaching out to potential leads using our proven methodologies." },
                  { title: "Lead Qualification", description: "Our experts qualify leads to ensure you're only speaking with high-potential prospects." },
                  { title: "Continuous Optimization", description: "We continuously analyze and optimize the campaign for improved performance." },
                  { title: "Reporting and Insights", description: "Regular reporting keeps you informed of campaign progress and provides valuable insights." },
                ].map((step, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-4 ring-4 ring-white">
                      {index + 1}
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-yellow-800">{step.title}</h3>
                    <p className="mb-4 text-base font-normal text-yellow-700">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Ready to Revolutionize Your Lead Generation?</h2>
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