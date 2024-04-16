import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'
import { dark } from "@clerk/themes"
import Navbar from "@/components/Navbar"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export const metadata  = {
    title: 'ZenState',
    description: 'A productivity and social accountability application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout ({
    children
} : {
    children: React.ReactNode
}) {
    return (
    <ClerkProvider
        appearance={{
            baseTheme: dark,
        }}
    >
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}
