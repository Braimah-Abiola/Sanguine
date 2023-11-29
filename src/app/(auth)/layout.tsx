import BlackFridayBanner from "@/components/landing/banner/black-friday";
import Footer from "@/components/landing/navigation/footer";
import Navbar from "@/components/landing/navigation/navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-full bg-white">
        <BlackFridayBanner />
        <Navbar />
      </div>
      <main className="w-full flex justify-center min-h-[90vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default AuthLayout;
