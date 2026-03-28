import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) return

    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_1orcuvn",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_hwemm2z",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "nufWVpy63w_2mRZyk"
      )

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      formRef.current.reset()
    } catch (error) {
      console.error("Email error:", error)
      toast({
        title: "Something went wrong",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] py-16 md:py-24 px-4">
      <div className="container max-w-2xl">
        <div className="space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            Get In Touch
          </h1>
          <p className="text-muted-foreground">
            I'm currently open to new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:daryllfortunado@gmail.com"
              className="text-primary hover:underline"
            >
              daryllfortunado@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
