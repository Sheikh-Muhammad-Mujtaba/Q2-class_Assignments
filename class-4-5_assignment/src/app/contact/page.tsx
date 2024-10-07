import Footer from '@/components/Footer';
import Header from '@/components/Nav_bar';
import ContactSection from '@/components/Contact';



export default function About() {
    return (
        <>
        <header>
            <Header />
        </header>
        <div className='mt-11 mb-14 h-screen'>
                <ContactSection />
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}