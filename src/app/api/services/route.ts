import { NextResponse } from 'next/server'
import { services } from '../../data/sampleData'

export async function GET() {
  return NextResponse.json(services)
}
