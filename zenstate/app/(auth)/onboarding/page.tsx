import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import WeekForm from "@/components/weeklypoints/weeklypoints";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import Stopwatch from "@/components/timer/Stopwatch";


export default function onboarding() {
  return (
    <div>
        <NavbarUser />
      <BackgroundGradientAnimation>
      <div style={{ position: 'absolute', top: '5px', left: '50px', zIndex: 999 }}>
          <Stopwatch />
        </div>

        <div style={{ position: 'absolute', bottom: '200px', left: '20px', zIndex: 999 }}>
          <WeekForm />
        </div>
        <div style={{ position: 'absolute', bottom: '250px', right: '80px', zIndex: 999 }}>
          <Leaderboard />
        </div>
       
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  )
}

// async function Page() {
//     return (
//         <main>
//             <h1 className="head-text">Onboarding</h1>
//         </main>
//     )
// }

// export default Page;
