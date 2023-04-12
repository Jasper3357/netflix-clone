import Input from '@/components/input'

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black/50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full p-16 mt-2 rounded-md bg-black/70 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;