import { Navbar } from "@/components/common/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="mt-10 flex w-full justify-around p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
