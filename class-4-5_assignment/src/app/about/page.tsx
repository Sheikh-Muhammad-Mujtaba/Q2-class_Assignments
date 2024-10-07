import AboutSection from '@/components/About_Section';
import Footer from '@/components/Footer';
import Header from '@/components/Nav_bar';



export default function About() {
    return (
        <>
        <header>
            <Header />
        </header>
        <div className='mt-11'>
                <AboutSection />
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}