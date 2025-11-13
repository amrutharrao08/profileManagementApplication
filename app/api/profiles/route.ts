import { NextResponse } from 'next/server'
import profiles from '@/data/profiles'


export async function GET() {
// For the cards page we can send the list. If you want to return a subset, map it here.
return NextResponse.json(profiles)
}