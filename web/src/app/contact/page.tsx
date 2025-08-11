"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  level: z.string().min(1),
  subjects: z.array(z.string()).min(1),
  message: z.string().min(5),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

const SUBJECTS = ["Mathématiques", "Sciences Physiques", "SES"];

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { subjects: [] } });

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Request failed");
      setStatus("Merci ! Nous vous avons envoyé un e‑mail de confirmation. Nous vous recontactons très vite.");
      reset();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Une erreur s’est produite";
      setStatus(message);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">S’inscrire / Contact</h1>
      <p className="mt-2 text-black/70">Remplissez ce court formulaire. Nous revenons vers vous rapidement.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Prénom</label>
            <input className="mt-1 w-full rounded-md border border-black/10 bg-white p-2 outline-none focus:ring-2 focus:ring-black/20" {...register("firstName")} />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">Le prénom est requis</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Nom</label>
            <input className="mt-1 w-full rounded-md border border-black/10 bg-white p-2 outline-none focus:ring-2 focus:ring-black/20" {...register("lastName")} />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">Le nom est requis</p>}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Niveau</label>
          <input placeholder="ex. 3e, 2de, 1re, Terminale" className="mt-1 w-full rounded-md border border-black/10 bg-white p-2 outline-none focus:ring-2 focus:ring-black/20" {...register("level")} />
          {errors.level && <p className="mt-1 text-xs text-red-600">Le niveau est requis</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Discipline(s)</label>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {SUBJECTS.map((s) => (
              <label key={s} className="flex items-center gap-2 text-sm">
                <input type="checkbox" value={s} {...register("subjects")} /> {s}
              </label>
            ))}
          </div>
          {errors.subjects && <p className="mt-1 text-xs text-red-600">Choisissez au moins une discipline</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-black/10 bg-white p-2 outline-none focus:ring-2 focus:ring-black/20" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">Un email valide est requis</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea rows={4} className="mt-1 w-full rounded-md border border-black/10 bg-white p-2 outline-none focus:ring-2 focus:ring-black/20" {...register("message")} />
          {errors.message && <p className="mt-1 text-xs text-red-600">Message requis (5 caractères min.)</p>}
        </div>

        <button disabled={isSubmitting} className="inline-flex items-center rounded-md bg-black px-5 py-3 text-white transition hover:bg-black/90 disabled:opacity-50">
          {isSubmitting ? "Envoi…" : "Envoyer"}
        </button>
        {status && <p className="text-sm text-black/70">{status}</p>}
      </form>
    </div>
  );
}
