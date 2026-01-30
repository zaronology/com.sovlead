import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

    if (!SLACK_WEBHOOK_URL) {
      return NextResponse.json({ message: 'Server config error: Missing Webhook' }, { status: 500 });
    }

    // formatting the "Support Needed" array into a string
    const supportList = Array.isArray(data.supportNeeded) ? data.supportNeeded.join(', ') : '';

    const slackMessage = {
      text: `New Foundry Application: ${data.fullName}`,
      blocks: [
        // --- Header ---
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🚀 New Foundry Application",
            emoji: true
          }
        },
        
        // --- Section 1: Candidate & Role ---
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${data.fullName}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*LinkedIn:*\n${data.linkedin || 'N/A'}` },
            { type: "mrkdwn", text: `*Role:*\n${data.role} ${data.roleOther ? `(${data.roleOther})` : ''}` }
          ]
        },

        // --- Section 2: Organization ---
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Org Name:*\n${data.orgName}` },
            { type: "mrkdwn", text: `*Org Type:*\n${data.orgType}` },
            { type: "mrkdwn", text: `*Company Size:*\n${data.companySize}` },
            { type: "mrkdwn", text: `*Team Size:*\n${data.teamSize}` }
          ]
        },

        { type: "divider" },

        // --- Section 3: The Pressure & Context ---
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*🔥 Biggest Pressure:*\n${data.pressure}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*📉 Consequences of Inaction:*\n${data.consequences}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*🎯 Desired Win (6 Months):*\n${data.winDefinition}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*🆘 Support Needed:*\n${supportList} ${data.supportOther ? `\n_(Other: ${data.supportOther})_` : ''}`
          }
        },

        { type: "divider" },

        // --- Section 4: Budget, Fit & Timing (New Fields Included Here) ---
        {
          type: "section",
          text: { type: "mrkdwn", text: "*💰 Fit, Budget & Timing*" }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Timeline:*\n${data.timeline}` },
            { type: "mrkdwn", text: `*Willingness to Invest:*\n${data.investment}` },
            { type: "mrkdwn", text: `*Budget Exists?*\n${data.budgetStatus}` },
            { type: "mrkdwn", text: `*Coverage Model:*\n${data.investmentCoverage}` },
            { type: "mrkdwn", text: `*Approver:*\n${data.approverRole || 'N/A'}` }
          ]
        },

        { type: "divider" },

        // --- Section 5: Meta / Source ---
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Referral Source:*\n${data.referralSource}` },
            { type: "mrkdwn", text: `*Additional Info:*\n${data.additionalInfo || 'N/A'}` }
          ]
        }
      ]
    };

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error(`Slack Gateway Error: ${response.statusText}`);
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}