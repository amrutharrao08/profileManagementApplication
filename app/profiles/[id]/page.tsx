import Image from "next/image";
import Link from "next/link";
// import  from "@/types/profile";
import { Profile } from "@/types/profile";

// Fetch single profile
async function getProfile(id: string): Promise<Profile> {


  const res = await fetch(`${process.env.NEXT_PUBLIC_URL ?? ""}/api/profiles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Profile not found");

  return res.json();
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = await params
  const profile = await getProfile(id);

  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Card container */}
      <div className="relative overflow-hidden rounded-2xl border bg-white">
        {/* Header banner */}
        <div className="h-40 bg-linear-to-t from-sky-500 to-indigo-500" />

        {/* Avatar */}
        <div className="-mt-14 flex justify-center">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow"
          />
        </div>

        {/* Basic Details */}
        <div className="px-6 pb-6 text-center">
          <h2 className="text-xl font-semibold">{profile.name}</h2>

          <p className="text-sm text-gray-500 mt-1">
            {profile.gender} | {profile.age} | {profile.title}
          </p>
          <p className="text-xs text-gray-400 mt-1">{profile.location}</p>

          {/* About */}
          <p className="text-sm text-gray-600 mt-4 leading-6">{profile.about}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {profile.skills?.map((s) => (
              <span
                key={s}
                className="text-xs border rounded-full px-3 py-1 bg-gray-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Case Insights & Key Projects */}
      <section className="mt-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Case Insights & Key Projects</h3>
          <span className="text-xs text-gray-500">{profile.projects?.length} items</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects?.map((prj) => (
            <div
              key={prj.id}
              className="rounded-xl overflow-hidden border bg-white"
            >
              <Image
                src={prj.thumb}
                alt={prj.title}
                width={600}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="font-medium">{prj.title}</p>
                {prj.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{prj.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Resume (YouTube Embed) */}
      {profile.videoUrl && (
        <section className="mt-10">
          <h3 className="font-semibold mb-3">Visual Resume</h3>

          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black">
            <iframe
              src={profile.videoUrl}
              title="Visual Resume"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-10">
        <div className="rounded-2xl bg-linear-to-t from-sky-500 to-indigo-500 text-white p-6 flex justify-between items-center">
          <div>
            <p className="font-semibold">Connect with {profile.name}</p>
            <p className="text-sm opacity-90">Let’s talk about opportunities & collaboration.</p>
          </div>

          <a
            href={profile.social?.linkedin ?? "#"}
            target="_blank"
            className="px-4 py-2 bg-linear-65 from-purple-500 to-pink-500 rounded-full font-medium text-sm"
          >
            Connect
          </a>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="mt-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Profiles
        </Link>
      </div>
    </main>
  );
}
