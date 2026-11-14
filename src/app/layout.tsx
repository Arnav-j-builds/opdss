import "./styles.css";
export const metadata = { title: "OPDSS | Clinical workspace", description: "Outpatient clinical record workspace" };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
