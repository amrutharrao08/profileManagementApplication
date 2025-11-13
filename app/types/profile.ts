// types/profile.ts
export type Profile = {
    id: string
    name: string
    age: number
    gender: 'Male' | 'Female' | 'Other'
    avatar: string
    title: string
    location: string
    shortBio: string
    about: string
    skills: string[]
    projects: {
        id: string
        title: string
        thumb: string
        subtitle?: string
    }[]
    videoUrl?: string // YouTube or mp4
    social?: {
        linkedin?: string
        github?: string
        website?: string
    }
}