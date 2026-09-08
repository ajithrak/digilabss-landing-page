/**
 * Paste this into Extensions > Apps Script on the Google Sheet that should
 * receive lead submissions from the Digilabss landing page's /api/lead route.
 *
 * Setup:
 * 1. Row 1 of the sheet should have headers: Name | Email | Company | Budget | Received At
 * 2. Deploy > New deployment > type "Web app" > Execute as "Me" > Who has
 *    access "Anyone" > Deploy. Authorize when prompted.
 * 3. Copy the resulting Web app URL and set it as LEAD_WEBHOOK_URL in Vercel's
 *    project environment variables (and .env.local for local dev).
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name || "",
    data.email || "",
    data.company || "",
    data.budget || "",
    data.receivedAt || new Date().toISOString(),
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
