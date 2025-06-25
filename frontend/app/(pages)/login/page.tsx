import LoginForm from "@/app/components/pages/dashboard/LoginForm";

export default function LoginPage() {
  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto lg:pt-40">
      <div className="flex flex-col gap-8 md:flex-row">
        <header className="w-full md:w-1/2">
          <h1 className="text-4xl font-semibold text-center md:text-5xl md:text-start">
            Log in
          </h1>
          <p className="mt-4 text-center md:text-start">
            Access the Duct Daddy Blog CMS.
          </p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}