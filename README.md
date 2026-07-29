# Blog Application

A modern blog application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring full CRUD (Create, Read, Update, Delete) functionality. The project demonstrates the use of the Next.js App Router, Server Actions, and modern React features to build a responsive and accessible user experience.

## Features

* Create, read, update, and delete blog posts
* Responsive user interface
* Server Actions for form submissions and data mutations
* Loading and error states during form submissions using `useFormStatus`
* Optimistic user experience with `revalidatePath`
* Accessible UI built with shadcn/ui components
* Clean, reusable component architecture

## Tech Stack

* Next.js 15 (App Router)
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React
* Sonner (toast notifications)

## What I Learned

Although this is a relatively small project, it helped me gain a much deeper understanding of the Next.js App Router and how client and server code work together.

Some key concepts explored include:

* Using **Server Actions** to handle form submissions without creating custom API routes.
* Working with the **FormData** object to extract form values on the server.
* Managing submission state with **`useFormStatus`**.
* Keeping UI in sync after data mutations using **`revalidatePath`**.
* Creating route-level loading and error UI using **`loading.tsx`** and **`error.tsx`**.

## Getting Started

### Prerequisites

* Node.js 20+
* npm, pnpm, yarn, or Bun

### Installation

Clone the repository:

```bash
git clone https://github.com/ezzzinne/cw-blog.git
```

Navigate into the project:

```bash
cd cw-blog
```

Install dependencies:

```bash
npm install
```

or

```bash
bun install
```

Start the development server:

```bash
npm run dev
```

or

```bash
bun dev
```

Visit:

```text
http://localhost:3000
```

## Acknowledgements

This project was built as part of a frontend development task by the Cowrywise Frontend Skill-Based Team.

## License

This project is open source and available under the MIT License.
