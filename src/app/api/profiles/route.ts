import { NextResponse } from 'next/server'
import { profiles } from '../../data/sampleData'

export async function GET() {
  return NextResponse.json(profiles)
}
