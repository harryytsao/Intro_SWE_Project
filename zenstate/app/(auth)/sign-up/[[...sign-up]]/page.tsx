import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
 
export default function Page() {
  return (
    <div>
      <Navbar />
      <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex min-h-screen items-center justify-center pointer-events-none">
        <button className="pointer-events-auto"><SignUp /></button>
      </div>
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  );
}