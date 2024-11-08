import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Nav_bar";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col">
        <Header />
        <div className="mt-10 py-4 mb-28"> 
          <ContactSection />
        </div>
        <footer><Footer /></footer>
      </main>
    );
    
}