"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { trackLeadSubmitted } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
};

const budgetOptions = [
  "Under $2,500/mo",
  "$2,500 – $10,000/mo",
  "$10,000 – $50,000/mo",
  "$50,000+/mo",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(values: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email.";
    if (!values.company.trim()) next.company = "Company is required.";
    if (!values.budget) next.budget = "Select a budget range.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");

      trackLeadSubmitted({
        form_name: "book_a_call",
        budget_range: form.budget,
      });

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <section id="book-a-call" className="relative px-6 py-16 sm:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[0.9fr_1.1fr] sm:gap-16 lg:gap-24">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Get started
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Book a call with the team.
          </h2>
          <p className="mt-6 max-w-sm text-lg text-muted lg:max-w-md lg:text-xl">
            Tell us where you are today. We&apos;ll reply within one business
            day with next steps, no automated sequences.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-medium">Request received.</h3>
              <p className="mt-2 text-muted">
                Thanks — someone from the team will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  error={errors.name}
                >
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="form-input"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="form-input"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Company" error={errors.company}>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="form-input"
                  autoComplete="organization"
                />
              </Field>

              <Field label="Monthly ad budget" error={errors.budget}>
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="form-input"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : "Request a call"}
              </button>

              {status === "error" ? (
                <p className="text-sm text-accent-c">
                  Something went wrong. Please try again.
                </p>
              ) : null}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-accent-c">{error}</span> : null}
    </label>
  );
}
