import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const d = await request.json();
  let score = 0;
  score += d.age >= 75 ? 2 : d.age >= 60 ? 1 : 0;
  score += d.female ? 1 : 0; score += d.poorMobility ? 2 : 0; score += d.previousCardiacSurgery ? 3 : 0;
  score += d.criticalPreopState ? 3 : 0; score += d.activeEndocarditis ? 3 : 0; score += d.urgent ? 2 : 0;
  return NextResponse.json({ score, risk: score >= 6 ? "higher" : score >= 3 ? "intermediate" : "lower", disclaimer: "Screening aid only. Verify inputs and use the current official EuroSCORE II calculator for clinical decisions." });
}
