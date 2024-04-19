import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`

  await resend.emails.send({
    from: 'no-reply@skailar.com',
    to: email,
    subject: "Confirm Your Email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`

  await resend.emails.send({
    from: 'no-reply@skailar.com',
    to: email,
    subject: "Reset your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
  });
}

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'no-reply@skailar.com',
    to: email,
    subject: "Skailar - 2FA Code",
    html: `<p>Your 2FA Code is ${token}</p>`
  });
}