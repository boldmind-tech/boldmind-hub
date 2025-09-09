"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  MessageSquare,
  Video,
  User,
  FileText,
  TrendingUp,
  Shield,
  Palette,
  ShoppingCart,
  Zap,
  BarChart3,
  CheckCircle,
  Wrench,
  Clock,
} from "lucide-react";

const productIcons = {
  "AI Receptionist": MessageSquare,
  "Social Media Content Factory": Video,
  "Professional Credibility Hubs": User,
  "AI Business Planning": FileText,
  "Financial Forecasting": TrendingUp,
  "Investor Readiness Suite": Shield,
  "Branding & Design Tools": Palette,
  "Digital Storefronts": ShoppingCart,
  "Marketing Automation": Zap,
  "Analytics Dashboard": BarChart3,
};

const statusIcons = {
  deployed: CheckCircle,
  development: Wrench,
  planning: Clock,
};

type PlanAIProductCardProps = {
  iconKey: keyof typeof productIcons;
  name: string;
  description: string;
  status: "deployed" | "development" | "planning";
  href?: string;
  disabled?: boolean;
};

const statusColors = {
  deployed: "bg-green-100 text-green-800 border-green-200",
  development: "bg-yellow-100 text-yellow-800 border-yellow-200",
  planning: "bg-blue-100 text-blue-800 border-blue-200",
};

export function PlanAIProductCard({
  iconKey,
  name,
  description,
  status,
  href,
  disabled = false,
}: PlanAIProductCardProps) {
  const Icon = productIcons[iconKey] || Brain;
  const StatusIcon = statusIcons[status] || Clock;
  const statusColor = statusColors[status];

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-md transition-all",
        disabled && "opacity-60 pointer-events-none"
      )}
      style={{
        borderImage: "linear-gradient(120deg, #00008B 40%, #FFC107 100%) 1",
        borderWidth: 2,
      }}
    >
      {/* Animated Top Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 0] }}
        transition={{ duration: 0.35 }}
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner group-hover:bg-secondary/20"
      >
        <Icon className="h-7 w-7" />
      </motion.div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="font-heading text-xl font-bold text-card-foreground">{name}</h3>
        <Badge
          variant="outline"
          className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold",
            statusColor
          )}
        >
          <StatusIcon className="h-3 w-3" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <p className="mb-5 font-body text-muted-foreground text-sm min-h-[56px]">{description}</p>

      <div className="flex justify-between items-end">
        <Button
          asChild
          size="sm"
          className="group/btn px-3 bg-primary text-primary-foreground hover:bg-secondary hover:text-primary transition-colors"
          variant="ghost"
        >
          <a href={href || "#"} tabIndex={disabled ? -1 : 0}>
            <span className="mr-2">Learn more</span>
            <ArrowRight className="inline h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/30 transition-all"></div>
    </motion.div>
  );
}
