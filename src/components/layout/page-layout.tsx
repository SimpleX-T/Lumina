import { cn } from "@/lib/utils";
import React from "react";

export default async function PageLayout({
  title,
  className,
  children,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  className?: string
}>) {

  return (
    <div className={cn("p-6 flex flex-col gap-3", className)}>
			<h1 className="text-2xl font-semibold">{title}</h1>
			{children}
		</div>
  );
}
