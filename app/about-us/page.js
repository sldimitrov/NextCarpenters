import GoToLink from "@/components/UI/GoToLink/GoToLink";

export default function AboutUs() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl">About Us Section</h1>
      <GoToLink href="/">Home</GoToLink>
    </div>
  );
}
