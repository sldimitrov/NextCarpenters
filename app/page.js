import GoToLink from "@/components/UI/GoToLink/GoToLink";
import "./main.css";

export default function Home() {
  return (
    <div className="h-screen mt-10 flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl">Welcome to NextCarpenters</h1>
      <h2 className="text-center text-4xl">Lets get started!</h2>
      <GoToLink href="/projects">Review Projects</GoToLink>
      <GoToLink href="/about-us" className={"w-48"}>
        Learn more About Us
      </GoToLink>
      <div className="research">scroll down to discover</div>
      <div className="line" />
    </div>
    // <main className="main">
    //   <div className="mainDiv">
    //     <h1 className="bigTitle">
    //       <span className="welcomeTexjt">Welcome</span> to our site
    //     </h1>
    //   </div>
    // </main>
  );
}
