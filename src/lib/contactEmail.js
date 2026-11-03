// Email template for new demo requests.
// Place at: src/lib/contactEmail.js  (imported as '@/lib/contactEmail')
// Table layout + inline styles only, so it renders in Gmail, Outlook and mobile apps.

const BRAND = '#4f46e5';
const INK = '#1e1b4b';
const AMBER = '#fbbf24';
const SOFT = '#eef2ff';

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const safeUrl = (u = '') => (/^https?:\/\/\S+$/i.test(u) ? u : '');

// +91 98765 43210 -> 919876543210 (for wa.me); bare 10-digit numbers get 91 added
function waNumber(phone = '') {
  let d = phone.replace(/\D/g, '');
  if (d.length === 10) d = '91' + d;
  return d;
}

const row = (label, valueHtml) => `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${SOFT};width:120px;font-size:13px;color:#6b7280;vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${SOFT};font-size:15px;font-weight:600;color:${INK};vertical-align:top;">${valueHtml}</td>
  </tr>`;

const button = (href, label, bg, color, border) => `
  <td style="padding:0 8px 8px 0;">
    <a href="${esc(href)}" style="display:inline-block;background:${bg};color:${color};text-decoration:none;font-weight:600;font-size:14px;line-height:1;padding:12px 18px;border-radius:10px;border:1px solid ${border};">${label}</a>
  </td>`;

export function buildLeadEmail(lead) {
  const when = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const subject = `New PureBook demo request – ${lead.hotelName} (${lead.city})`;
  const site = safeUrl(lead.website);
  const wa = waNumber(lead.phone);
  const telHref = `tel:+${wa}`;

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${esc(lead.name)} from ${esc(lead.hotelName)}, ${esc(lead.city)} wants a PureBook demo.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;">
    <tr><td align="center" style="padding:28px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e2e8f0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">

        <!-- brand strip -->
        <tr><td style="height:5px;background:${BRAND};line-height:5px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="height:3px;background:${AMBER};line-height:3px;font-size:0;">&nbsp;</td></tr>

        <!-- header -->
        <tr><td style="background:${INK};padding:28px 32px;">
          <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">Pure<span style="color:#a5b4fc;">Book</span></div>
          <div style="margin-top:18px;font-size:13px;color:#a5b4fc;">New demo request</div>
          <div style="margin-top:4px;font-size:26px;line-height:1.25;font-weight:800;color:#ffffff;">${esc(lead.hotelName)}</div>
          <div style="margin-top:6px;font-size:14px;color:#c7d2fe;">${esc(lead.city)} &nbsp;•&nbsp; ${esc(lead.rooms)} rooms</div>
        </td></tr>

        <!-- details -->
        <tr><td style="padding:8px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Contact', esc(lead.name))}
            ${row('Phone', `<a href="${esc(telHref)}" style="color:${BRAND};text-decoration:none;">${esc(lead.phone)}</a>`)}
            ${row('Email', `<a href="mailto:${esc(lead.email)}" style="color:${BRAND};text-decoration:none;">${esc(lead.email)}</a>`)}
            ${row('Website', site ? `<a href="${esc(site)}" style="color:${BRAND};text-decoration:none;">${esc(site)}</a>` : '<span style="color:#94a3b8;font-weight:400;">Not provided</span>')}
          </table>
        </td></tr>

        <!-- message -->
        <tr><td style="padding:22px 32px 0;">
          <div style="font-size:13px;color:#6b7280;margin-bottom:8px;">Message</div>
          <div style="background:${SOFT};border-left:4px solid ${BRAND};border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.6;color:${INK};">
            ${lead.message ? esc(lead.message).replace(/\n/g, '<br/>') : '<span style="color:#94a3b8;">No message</span>'}
          </div>
        </td></tr>

        <!-- actions -->
        <tr><td style="padding:26px 32px 8px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            ${button(`https://wa.me/${wa}`, 'WhatsApp', '#16a34a', '#ffffff', '#16a34a')}
            ${button(telHref, 'Call', BRAND, '#ffffff', BRAND)}
            ${button(`mailto:${lead.email}?subject=${encodeURIComponent('Your PureBook demo')}`, 'Reply by email', '#ffffff', BRAND, '#c7d2fe')}
          </tr></table>
        </td></tr>

        <!-- footer -->
        <tr><td style="padding:20px 32px 28px;">
          <div style="border-top:1px solid #e2e8f0;padding-top:16px;font-size:12px;line-height:1.6;color:#94a3b8;">
            Received ${esc(when)} (IST) from the purebook.in contact form.<br/>
            Reply to this email to answer ${esc(lead.name)} directly.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    'New PureBook demo request',
    '',
    `Hotel:   ${lead.hotelName}`,
    `City:    ${lead.city}`,
    `Rooms:   ${lead.rooms}`,
    `Contact: ${lead.name}`,
    `Phone:   ${lead.phone}`,
    `Email:   ${lead.email}`,
    `Website: ${site || 'Not provided'}`,
    '',
    'Message:',
    lead.message || 'No message',
    '',
    `WhatsApp: https://wa.me/${wa}`,
    `Received ${when} (IST)`,
  ].join('\n');

  return { subject, html, text };
}