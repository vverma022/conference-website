import { ContactForm } from '@/components/ui/contact-form';
import { useState } from 'react';

export function Footer() {
  
  return (
    <section id="contact-us">
    <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-16">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold">INTERNATIONAL CONFERENCE ON SMART AND DISTRIBUTED COMPUTING 2025</span>
            <p className="text-gray-300 text-base">
              The premier technology conference bringing together industry leaders from top universities from across the country.
            </p>
          </div>
          <div className="mt-12 xl:mt-0 xl:col-span-1 xl:col-start-3">
            <ContactForm />
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 ICSDC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
}