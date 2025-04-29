"use client";

import { Textarea } from "@/components/ui/textarea";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
// import Link from "next/link";
import {
  // ArrowRight,
  Award,
  CheckCircle,
  Clock,
  // FileCheck,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import LocationForm from "@/components/LocationForm";
import VisaPage from "@/components/VisaPage";
// import ScrollVideoSection from "@/components/ScrollVideoSection";
import VisaRequirements from "@/components/VisaRequirements";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <iframe
              width="100%"
              height="90%"
              src="https://api.maptiler.com/maps/01968028-fe24-7126-843b-898c898552a4/?key=94rjjo3TaispXT6nJxTT#1.0/0.00000/0.00000"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-black" />
          </div>

          <div className="relative z-10 text-center mb-5 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
                Simplify Your Global Journey
              </h1>
              {/* <p className="text-xl md:text-2xl text-amber-100/80 mb-8">
                Streamlined, hassle-free visa and passport solutions with a
                luxury experience
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4 items-center mt-20">
                <LocationForm />
                <a href="/pages/detailspage">
                  <Button
                    className="bg-gradient-to-r from-amber-400 to-amber-600 backdrop-blur-lg hover:bg-amber-600/50 border border-amber-500/20 px-8 py-6 rounded-xl text-lg sm:ml-4"
                    size="lg"
                  >
                    Check Visa
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-2 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Government Authorized",
                text: "Official partner for visa services",
              },
              {
                icon: Users,
                title: "50k+ Clients",
                text: "Trusted by professionals worldwide",
              },
              {
                icon: Award,
                title: "98% Success",
                text: "Premium approval rate",
              },
              {
                icon: Clock,
                title: "Express Processing",
                text: "As fast as 24 hours",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-lg border border-amber-500/10 p-8 rounded-2xl hover:border-amber-500/30 transition-all"
              >
                <item.icon className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-semibold text-amber-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-100/60">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visa Services */}
        <section className="bg-black">
          <VisaPage />
        </section>

        <section className="py-20 px-4 max-w-7xl mx-auto">
          {/* <div className="max-w-7xl mx-auto text-center"></div> */}
          <VisaRequirements />
        </section>

        {/* Visa Requirements */}
        {/* <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
              Visa Requirements
            </h2>
            <ScrollVideoSection />
          </div>
        </section> */}

        {/* Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
                Premium Services
              </h2>
              <p className="text-xl text-amber-100/60 max-w-2xl mx-auto">
                Bespoke visa and passport solutions tailored to your exclusive
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent backdrop-blur-lg border border-amber-500/10 p-8 transition-all group-hover:border-amber-500/30">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-amber-100">
                      Global Visa Solutions
                    </h3>
                    <p className="text-amber-100/60">
                      Premium handling for tourist, business, and diplomatic
                      visas across 150+ countries
                    </p>
                    <ul className="space-y-3">
                      {[
                        "24h Processing",
                        "Dedicated Manager",
                        "VIP Lounge Access",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-amber-100/80"
                        >
                          <CheckCircle className="h-5 w-5 text-amber-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Tourist Visa",
                  "Business Visa",
                  "Passport Services",
                  "Consultation",
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-amber-500/30 to-transparent backdrop-blur-lg border border-amber-500/10 p-6 rounded-xl hover:border-amber-500/30 transition-all"
                  >
                    <h3 className="text-xl font-semibold text-amber-100 mb-3">
                      {service}
                    </h3>
                    <p className="text-amber-100/60 text-sm">
                      Premium processing with dedicated support
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
                Effortless Process
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-amber-500/30 to-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                {["Application", "Verification", "Delivery"].map((step, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-6",
                        "hover:bg-amber-500/10 transition-colors"
                      )}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-amber-100 mb-3">
                      {step}
                    </h3>
                    <p className="text-amber-100/60">
                      Premium handling with expert review
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 ">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-amber-500/30 to-transparent backdrop-blur-lg border border-amber-500/10 rounded-2xl p-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
                Why Choose Our Premium Services
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/luxury.jpg"
                  alt="Luxury office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        Personalized Consultation
                      </h3>
                      <p className="text-amber-100/60">
                        Dedicated visa experts to guide you through every step
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        Premium Lounge Experience
                      </h3>
                      <p className="text-amber-100/60">
                        Luxury waiting areas with refreshments and amenities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        Expedited Processing
                      </h3>
                      <p className="text-amber-100/60">
                        Fast-track options for urgent visa and passport needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        24/7 Support
                      </h3>
                      <p className="text-amber-100/60">
                        Round-the-clock assistance for all your queries
                      </p>
                    </div>
                  </li>
                </ul>
                <Button
                  className="bg-gradient-to-r from-amber-400 to-amber-600 backdrop-blur-lg hover:bg-amber-600/50 border border-amber-500/20 px-8 py-6 rounded-xl text-sm"
                  size="lg"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-500/5 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-amber-100/60 max-w-2xl mx-auto">
                Hear from our satisfied clients about their premium experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  initials: "RA",
                  name: "Rahul Agarwal",
                  role: "Business Executive, Delhi",
                  content:
                    "The premium service was worth every penny. My business visa was processed in record time, and the staff was incredibly professional and attentive.",
                },
                {
                  initials: "SP",
                  name: "Sanjana Patel",
                  role: "Travel Enthusiast, Mumbai",
                  content:
                    "I was amazed by the luxury experience. The lounge was comfortable, and my tourist visa was processed without any hassle. Highly recommended!",
                },
                {
                  initials: "VK",
                  name: "Vikram Kumar",
                  role: "CEO, Bangalore",
                  content:
                    "Their passport renewal service is exceptional. The attention to detail and personalized approach made the entire process smooth and stress-free.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-500/30 to-transparent backdrop-blur-lg border border-amber-500/10 p-8 rounded-2xl hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center text-amber-400 font-bold text-lg mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-amber-100/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-100/80">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=" bg-gradient-to-br from-amber-500/5 to-black mb-10">
          <div className="max-w-7xl mx-auto py-20 px-4 bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-lg border border-amber-500/10 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-amber-100/60">
                  Contact our premium visa and passport services team for
                  personalized assistance
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        Our Locations
                      </h3>
                      <p className="text-amber-100/60">
                        K-2/12 13 Peepal Chowk, Mohan Garden Uttam Nagar,
                        <br />
                        Near Reliance Fresh, New Delhi, Delhi – 110059
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-amber-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">
                        Contact Numbers
                      </h3>
                      <p className="text-amber-100/60">
                        Premium Support: +91 9999390696
                        <br />
                        General Inquiries: +91 9009908809
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/5 to-transparent backdrop-blur-lg border border-amber-500/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-amber-100 mb-6">
                  Request a Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-amber-100">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-amber-100">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-100">
                      Email
                    </Label>
                    <Input
                      id="email"
                      className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-amber-100">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-amber-100">
                      Service Interested In
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="service"
                        className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-amber-500/20 text-amber-100">
                        <SelectItem
                          value="tourist"
                          className="hover:bg-amber-500/10"
                        >
                          Tourist Visa
                        </SelectItem>
                        <SelectItem
                          value="business"
                          className="hover:bg-amber-500/10"
                        >
                          Business Visa
                        </SelectItem>
                        <SelectItem
                          value="student"
                          className="hover:bg-amber-500/10"
                        >
                          Student Visa
                        </SelectItem>
                        <SelectItem
                          value="work"
                          className="hover:bg-amber-500/10"
                        >
                          Work Visa
                        </SelectItem>
                        <SelectItem
                          value="passport"
                          className="hover:bg-amber-500/10"
                        >
                          Passport Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-amber-100">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      className="bg-black/20 border-amber-500/20 text-amber-100 placeholder-amber-100/50 min-h-[120px]"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-600 backdrop-blur-lg hover:bg-amber-600/50 border border-amber-500/20 px-8 py-6 rounded-xl text-lg mt-4"
                    size="lg"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-amber-500/10 to-black/20 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-amber-100 mb-6">
                Ready for Elite Service?
              </h2>
              <p className="text-xl text-amber-100/60 mb-8 max-w-2xl mx-auto">
                Experience visa processing redefined with our premium concierge
                service
              </p>
              <Button
                className="bg-amber-600/30 backdrop-blur-lg hover:bg-amber-600/50 border border-amber-500/20 px-8 py-6 rounded-xl text-lg"
                size="lg"
              >
                Begin Premium Application
              </Button>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
