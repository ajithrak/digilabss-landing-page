import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

type LeadPayload = {
  name: string;
  email: string;
  company: string;
  budget: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidLead(value: unknown): value is LeadPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    emailPattern.test(v.email) &&
    typeof v.company === "string" &&
    v.company.trim().length > 0 &&
    typeof v.budget === "string" &&
    v.budget.trim().length > 0
  );
}

// Dummy CRM sink: logs every lead and appends it to a local JSON-lines file
// so a submission is independently verifiable during review. In production
// this would forward to a real CRM or Google Sheets webhook (see
// LEAD_WEBHOOK_URL in .env.example).
async function persistLead(lead: LeadPayload) {
  const record = { ...lead, receivedAt: new Date().toISOString() };

  // eslint-disable-next-line no-console
  console.log("[lead:new]", record);

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[lead:webhook-failed]", err);
    }
  }

  try {
    const filePath = path.join(os.tmpdir(), "digilabss-leads.jsonl");
    await fs.appendFile(filePath, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[lead:file-write-failed]", err);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  await persistLead(body);

  return NextResponse.json({ ok: true });
}
