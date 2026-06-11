import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DayPicker } from "react-day-picker";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { MessageCircle, Calendar, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
];

const schema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  whatsapp: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato inválido. Ex: (11) 99999-9999"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  preferred_date: z.date({ required_error: "Selecione uma data" }),
  preferred_time: z.string().min(1, "Selecione um horário"),
});

type FormData = z.infer<typeof schema>;

function maskWhatsApp(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DiagnosticModal({ open, onOpenChange }: Props) {
  const minDate = addDays(new Date(), 2);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedDate = watch("preferred_date");
  const selectedTime = watch("preferred_time");

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    const { error } = await supabase.from("clients").insert({
      name: data.name,
      email: data.email,
      phone: data.whatsapp,
      company: data.company ?? null,
      scheduled_date: format(data.preferred_date, "yyyy-MM-dd"),
      scheduled_time: data.preferred_time,
      pipeline_stage: "prospeccao",
      source: "landing_page",
    });
    setSubmitting(false);

    if (error) {
      toast.error("Erro ao enviar. Tente novamente.");
      console.error(error);
      return;
    }

    toast.success("Solicitação recebida! Entraremos em contato via WhatsApp em breve.");
    reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!submitting) { reset(); onOpenChange(v); } }}>
      <DialogContent className="max-w-2xl w-full border border-white/10 bg-[hsl(0,0%,5%)] p-0 overflow-hidden overflow-y-auto max-h-[90vh]">
        {/* Gold accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-white">
              Agendar Diagnóstico
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1">
              Preencha os dados abaixo. Nossa equipe confirmará o horário via WhatsApp.
            </DialogDescription>
          </DialogHeader>

          {/* Info banner */}
          <div className="mt-5 flex gap-3 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3">
            <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nossa equipe entrará em contato via{" "}
              <span className="text-primary font-medium">WhatsApp</span> para um
              alinhamento pré-reunião antes de confirmar o agendamento.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            {/* Name + company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Nome *</label>
                <Input
                  {...register("name")}
                  placeholder="Seu nome completo"
                  className="bg-white/5 border-white/10 focus-visible:ring-primary text-white placeholder:text-white/30"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Empresa</label>
                <Input
                  {...register("company")}
                  placeholder="Nome da sua empresa"
                  className="bg-white/5 border-white/10 focus-visible:ring-primary text-white placeholder:text-white/30"
                />
              </div>
            </div>

            {/* WhatsApp + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">WhatsApp *</label>
                <Input
                  {...register("whatsapp")}
                  placeholder="(11) 99999-9999"
                  onChange={(e) =>
                    setValue("whatsapp", maskWhatsApp(e.target.value), { shouldValidate: true })
                  }
                  className="bg-white/5 border-white/10 focus-visible:ring-primary text-white placeholder:text-white/30"
                />
                {errors.whatsapp && (
                  <p className="text-xs text-destructive">{errors.whatsapp.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">E-mail *</label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-white/5 border-white/10 focus-visible:ring-primary text-white placeholder:text-white/30"
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Calendar + time grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 pt-1">
              {/* Calendar */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  Melhor data *
                </label>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 w-fit">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(d) => {
                      setValue("preferred_date", d as Date, { shouldValidate: true });
                      setValue("preferred_time", "", { shouldValidate: false });
                    }}
                    disabled={{ before: minDate }}
                    locale={ptBR}
                    classNames={{
                      months: "flex flex-col",
                      month: "space-y-2",
                      caption: "flex justify-center relative items-center h-8",
                      caption_label: "text-sm font-medium text-white capitalize",
                      nav: "flex items-center",
                      nav_button:
                        "h-7 w-7 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors",
                      nav_button_previous: "absolute left-0",
                      nav_button_next: "absolute right-0",
                      table: "w-full border-collapse",
                      head_row: "flex",
                      head_cell:
                        "text-white/30 w-8 font-normal text-[0.7rem] text-center",
                      row: "flex w-full mt-1",
                      cell: "h-8 w-8 text-center text-sm p-0 relative",
                      day: "h-8 w-8 p-0 font-normal rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors",
                      day_selected:
                        "bg-primary text-black hover:bg-primary/90 hover:text-black font-semibold",
                      day_today: "border border-white/20 text-white",
                      day_outside: "text-white/20",
                      day_disabled:
                        "text-white/15 cursor-not-allowed hover:bg-transparent hover:text-white/15",
                      day_hidden: "invisible",
                    }}
                  />
                </div>
                {errors.preferred_date && (
                  <p className="text-xs text-destructive">{errors.preferred_date.message}</p>
                )}
              </div>

              {/* Time slots */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  Melhor horário *
                  {!selectedDate && (
                    <span className="text-xs text-white/30 font-normal">
                      — selecione uma data primeiro
                    </span>
                  )}
                </label>
                <div
                  className={cn(
                    "grid grid-cols-3 sm:grid-cols-4 gap-2 transition-opacity duration-200",
                    !selectedDate && "opacity-30 pointer-events-none",
                  )}
                >
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() =>
                        setValue("preferred_time", slot, { shouldValidate: true })
                      }
                      className={cn(
                        "rounded-lg border px-2 py-2.5 text-sm font-medium transition-all duration-150",
                        selectedTime === slot
                          ? "border-primary bg-primary/15 text-primary shadow-[0_0_12px_-4px_hsl(28_100%_50%/0.4)]"
                          : "border-white/10 bg-white/[0.04] text-white/50 hover:border-white/25 hover:text-white/80",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.preferred_time && (
                  <p className="text-xs text-destructive">{errors.preferred_time.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="hero"
                size="hero"
                disabled={submitting}
                className="w-full sm:w-auto"
              >
                {submitting ? "Enviando..." : "Solicitar Diagnóstico"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
