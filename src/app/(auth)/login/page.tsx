'use client'

import { Button } from "@/components/button";

export default function LoginPage() {
  return (
    <div className="bg-[#121113] p-50">
      <h1>Login Page</h1>
			<Button variant="primary">Primário/Disabled</Button>
			<Button variant="secondary">Primário/Disabled</Button>
    </div>
  );
}