import { NextResponse } from 'next/server'
import { companies } from '../../data/sampleData'

export async function GET() {
  return NextResponse.json(companies)
}
