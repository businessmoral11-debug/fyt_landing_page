
  # Review webpage design

  This is a code bundle for Review webpage design. The original project is available at https://www.figma.com/design/kc7ni2Au4dEBUnWSohcPB5/Review-webpage-design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Newsletter (MailChimp)

The footer newsletter posts to MailChimp's classic embedded-form JSONP endpoint.
Copy `.env.example` to `.env` and set `VITE_MAILCHIMP_URL` to your audience's
embedded-form action URL (Audience → Signup forms → Embedded forms). Without it,
the form validates input but shows "Newsletter is not configured."
