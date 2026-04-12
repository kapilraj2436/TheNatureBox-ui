# The Nature Box

The Nature Box is a React + Vite storefront for premium Indian spices, with a production-ready enquiry form backed by a Node mail handler. The project is set up to run locally with Vite + Express and deploy on Vercel with a serverless API.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS
- Express
- Nodemailer
- Vercel Functions

## Project Structure

```text
.
├── api/                     # Vercel serverless functions
├── backend/                 # Local Express server and shared handlers
├── frontend/                # React frontend
├── package.json             # Root scripts for local dev and deployment
└── vercel.json              # Vercel build and routing config
```

## Local Development

### Requirements

- Node.js 20.19+ recommended
- npm

### Environment Variables

Create a root `.env` file:

```env
EMAIL_USER=your-smtp-email
EMAIL_PASS=your-smtp-password
PORT=5001
```

The frontend env files intentionally keep `VITE_API_URL` blank so requests use the same origin:

```env
VITE_API_URL=
```

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

This starts:

- frontend on `http://localhost:5173`
- backend on `http://localhost:5001`

During local development, Vite proxies `/api/*` requests to the backend server.

## Available Scripts

- `npm run dev` starts frontend and backend together
- `npm run dev:frontend` starts the Vite dev server
- `npm run dev:backend` starts the local Express server
- `npm run build` builds the frontend for production
- `npm start` runs the local production-style Express server

## Enquiry Flow

- The enquiry form submits to `/api/send-enquiry`
- In local development, Express handles the route
- On Vercel, `api/send-enquiry.js` runs as a serverless function
- Both environments use the same shared mail handler in `backend/handlers/sendEnquiry.js`

## Vercel Deployment

### Before Deploying

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Keep the project root as the repository root.
4. Add these Environment Variables in Vercel:

```env
EMAIL_USER=your-smtp-email
EMAIL_PASS=your-smtp-password
```

### Deployment Behavior

- Build command: `npm run build --prefix frontend`
- Output directory: `frontend/dist`
- API route: `/api/send-enquiry`

The frontend and enquiry API will work on the same production domain.

## Notes

- Do not commit real SMTP credentials.
- If SMTP delivery becomes unreliable on Vercel, consider switching to an HTTP email provider such as Resend, SendGrid, or SES.
- The current setup assumes a light theme across the app.
