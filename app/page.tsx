import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Laptop, Palette, ShoppingCart, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2">
              Transforming Ideas into Digital Reality
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We Build Beautiful Websites<br />That Drive Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From stunning designs to powerful functionality, we create websites that help your business grow and succeed in the digital world.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web development solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Code2 className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom websites built with modern technologies and best practices
              </p>
            </Card>
            
            <Card className="p-6">
              <Palette className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Beautiful, intuitive designs that enhance user experience
              </p>
            </Card>
            
            <Card className="p-6">
              <ShoppingCart className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-muted-foreground">
                Powerful online stores that drive sales and growth
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold mb-6">
                We Deliver Excellence in Every Project
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fast Performance</h3>
                    <p className="text-muted-foreground">
                      Lightning-fast websites optimized for speed and efficiency
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Responsive Design</h3>
                    <p className="text-muted-foreground">
                      Websites that look great on all devices and screen sizes
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Support</h3>
                    <p className="text-muted-foreground">
                      Dedicated team providing ongoing support and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
                  alt="Development Process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to create something amazing. Contact us today to discuss your project.
          </p>
          <Button size="lg" variant="secondary">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}