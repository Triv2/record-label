import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute top-0 -z-30 w-full  bg-white dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-[radial-gradient(50%_120%_at_50%_70%,hsla(0,100%,100%,0)_0,rgba(153,150,252,.5)_100%)]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
