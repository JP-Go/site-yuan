import { ReactNode } from "react";

type ShowcaseProps = {
  title: string;
  alt: string;
  variant: "primary" | "secondary";
  children: ReactNode;
  id: string;
};

const wrapperClassVariants: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-white",
};

const titleClassVariants: Record<string, string> = {
  primary: "text-yuan-yellow",
  secondary: "text-primary",
};

export function Showcase({ title, variant, children, id }: ShowcaseProps) {
  const wrapperClass = `flex flex-col items-center py-20 ${wrapperClassVariants[variant]}`;
  const titleClass = `text-5xl font-bold text-center ${titleClassVariants[variant]}`;
  return (
    <div className={wrapperClass} id={id}>
      <h2 className={titleClass}>{title}</h2>
      {children}
    </div>
  );
}
