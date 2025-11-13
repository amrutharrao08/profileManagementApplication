// app/page.tsx
import ProfileCard from '@/components/ProfileCard'
import { Profile } from '@/types/profile'


async function getProfiles(): Promise<Profile[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL ?? ''}/api/profiles`, {
    cache: 'no-store',
  })
  return res.json()
}


export default async function HomePage() {
  const profiles = await getProfiles()
  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Student Profiles</h1>
      </header>


      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </section>
    </main>
  )
}