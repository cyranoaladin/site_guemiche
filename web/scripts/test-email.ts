import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config({ path: '.env.local' });

async function main() {
  const host = process.env.EMAIL_HOST as string;
  const port = Number(process.env.EMAIL_PORT || 465);
  const secure = String(process.env.EMAIL_SECURE || 'true') === 'true';
  const user = process.env.EMAIL_USER as string;
  const pass = process.env.EMAIL_PASS as string;
  const admin = process.env.ADMIN_EMAIL || user;
  if (!host || !user || !pass) throw new Error('Missing SMTP env');

  const transport = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  const info = await transport.sendMail({
    from: `BrightTutoring <${user}>`,
    to: admin,
    subject: 'Test email from BrightTutoring',
    text: 'This is a test email confirming SMTP configuration works.',
  });
  // eslint-disable-next-line no-console
  console.log('Email sent:', { messageId: info.messageId });
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error('Test failed:', e.message || e);
  process.exit(1);
});
