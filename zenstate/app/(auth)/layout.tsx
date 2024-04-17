import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'

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
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-slate-800`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}