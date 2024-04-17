import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { fetchUser } from "@/lib/actions/user.actions";
// import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/home")
  const userData = {
    id: user.id,
    objectId: user?.id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="mb-4 text-4xl text-[#e5e5e7]" style={{ fontWeight: 'bold' }}>Onboarding</h1>
      <p className="text-[#e5e5e7] text-base sm:text-xl mb-6 lg:text-2xl">Complete your profile now to use ZenState</p>

      <section className="mt-9 bg-slate-700 p-10">
        <AccountProfile 
          user={userData}
          btnTitle="Continue"  
        />
      </section>
    </main>
  )
}

export default Page;