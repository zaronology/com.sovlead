import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message, token } = await request.json();

    // 1. Verify with Cloudflare
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json({ message: "Bot detected." }, { status: 400 });
    }

    // 1. Validate Environment Variable
    const webhookUrl = process.env.SLACK_WEBHOOK_URL_CONTACT;
    if (!webhookUrl) {
      console.error("Missing SLACK_WEBHOOK_URL_CONTACT env variable");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    // 2. Format Payload for Slack
    const slackPayload = {
      text: `*New Contact Form Submission*`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Contact Inquiry",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`,
            },
            {
              type: "mrkdwn",
              text: `*Subject:*\n${subject}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`,
          },
        },
        {
          type: "divider",
        },
      ],
    };

    // 3. Send to Slack (Server-to-Server)
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      throw new Error(`Slack API responded with status ${slackRes.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
