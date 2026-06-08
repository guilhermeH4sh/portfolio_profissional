import { HeroLanding } from "@/components/ui/hero-1";
import type { HeroLandingProps } from "@/components/ui/hero-1";

export default function Demo() {
  // Example with all customization props
  const heroProps: HeroLandingProps = {
    // Logo and branding
    logo: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80", // Real unsplash abstract geometric asset
      alt: "Acme Corp Logo",
      companyName: "Acme Corp"
    },
    
    // Navigation
    navigation: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Resources', href: '/resources' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    loginText: "Sign In",
    loginHref: "/login",
    
    // Hero content
    title: "Transform Your Business with AI-Powered Solutions",
    description: "Revolutionize your workflow with our cutting-edge artificial intelligence platform",
    
    // Announcement banner
    announcementBanner: {
      text: "🎉 New feature release!",
      linkText: "Check out our AI Assistant",
      linkHref: "/features/ai-assistant"
    },
    
    // Call to action buttons
    callToActions: [
      { 
        text: "Start Free Trial", 
        href: "/signup", 
        variant: "primary" 
      },
      { 
        text: "Watch Demo", 
        href: "/demo", 
        variant: "secondary" 
      }
    ],
    
    // Styling options
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.35 0.12 240)", // Modern Navy Blue
      to: "oklch(0.60 0.18 200)"    // Electric Blue / Cyan
    },
    
    // Additional customization
    className: "min-h-screen"
  }

  return (
    <div>
      <HeroLanding {...heroProps} />
    </div>
  )
}
