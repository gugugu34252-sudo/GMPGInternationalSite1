import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Get in touch with our team to discuss your medical grade products export requirements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted/30 p-8 border border-border rounded">
            <h3 className="text-xl font-bold text-foreground mb-6" data-testid="form-title">
              Send us a message
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  {...form.register("name")}
                  className="w-full"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-name">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                  className="w-full"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Please describe your requirements or questions..."
                  {...form.register("message")}
                  className="w-full resize-vertical"
                  data-testid="textarea-message"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={submitContactMutation.isPending}
                data-testid="button-submit"
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6" data-testid="contact-info-title">
                Get in touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8" data-testid="contact-info-description">
                We're here to help with your medical grade products export needs. Contact us to discuss compliance requirements, supply chain solutions, or partnership opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="contact-email">
                <div className="w-6 h-6 text-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@GMPGinternational.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="contact-address">
                <div className="w-6 h-6 text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Address</h4>
                  <p className="text-muted-foreground">International Operations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="contact-hours">
                <div className="w-6 h-6 text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CAT)</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground" data-testid="contact-note">
                All communications are confidential and we respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
