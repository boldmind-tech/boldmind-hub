import { google } from "googleapis";
import fs from "fs";

// ---- EDIT THESE ----
const KEY_FILE = "./service-account.json"; // your service account key
const PROPERTY_ID = "504410103";    // e. 123456789
// Per stream settings
const STREAM_SETTINGS = [
  {
    domain: "boldmind.ng",
    dataStreamId: "STREAM_ID_HUB", // find via list call below
    searchQueryParameter: "q,search",
    uriQueryParameter: "type,cat",
  },
  {
    domain: "amebogist.ng",
    dataStreamId: "STREAM_ID_AMEBO",
    searchQueryParameter: "s,q,search",
    uriQueryParameter: "cat,tag",
  },
  {
    domain: "educenter.com.ng",
    dataStreamId: "STREAM_ID_EDU",
    searchQueryParameter: "q,query,subject,topic",
    uriQueryParameter: "level,course",
  },
];

async function main() {
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/analytics.edit"],
    credentials: JSON.parse(fs.readFileSync(KEY_FILE, "utf8")),
  });
  const analyticsadmin = google.analyticsadmin({ version: "v1beta", auth });

  // Helper to list streams (run once to get IDs)
  const { data: listResp } = await analyticsadmin.properties.dataStreams.list({
    parent: `properties/${PROPERTY_ID}`,
  });
  console.log("Streams:", (listResp.dataStreams || []).map(s => ({
    id: s.name?.split("/").pop(),
    displayName: s.displayName,
    url: s.webStreamData?.defaultUri
  })));

  for (const s of STREAM_SETTINGS) {
    const name = `properties/${PROPERTY_ID}/dataStreams/${s.dataStreamId}/enhancedMeasurementSettings`;
    const body = {
      name,
      streamEnabled: true,
      scrollsEnabled: true,
      outboundClicksEnabled: true,
      siteSearchEnabled: true,
      videoEngagementEnabled: true,
      fileDownloadsEnabled: true,
      pageChangesEnabled: true,
      formInteractionsEnabled: true,
      searchQueryParameter: s.searchQueryParameter,
      uriQueryParameter: s.uriQueryParameter,
    };
    const updateMask = Object.keys(body)
      .filter(k => !["name"].includes(k))
      .join(",");

    const { data } = await analyticsadmin.properties.dataStreams.enhancedMeasurementSettings.patch({
      name,
      updateMask,
      requestBody: body,
    });
    console.log(`Updated ${s.domain}:`, data);
  }
}

main().catch(err => {
  console.error(err?.response?.data || err);
  process.exit(1);
});
