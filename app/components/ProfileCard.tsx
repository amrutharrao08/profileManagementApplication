'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Profile } from '@/types/profile'


export default function ProfileCard({ profile }: { profile: Profile }) {
    return (
        <Link
            href={`/profiles/${profile.id}`}
            className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white border"
        >
            <div className="h-28 bg-linear-to-t from-sky-500 to-indigo-500" />
            <div className="-mt-10 flex justify-center">
                <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-white aspect-square object-cover shadow object-center"
                />
            </div>
            <div className="px-5 pb-5 pt-2 text-center">
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{profile.title}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{profile.shortBio}</p>
            </div>
        </Link>
    )
}