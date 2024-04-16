import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { fetchUser } from "@/lib/actions/user.actions";
// import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  // const user = await currentUser();
  // if (!user) return null;

  // const userInfo = await fetchUser(user.id);
  // if (user?.onboarded) redirect("/home")
  return (
    <main>
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Complete your profile now to use ZenState.</p>
    </main>
  )
}

export default Page;