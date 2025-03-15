import Candidate from "./components/Candidate";
import sample from "../../public/candidates/Abalos.png"
export default function Home() {
  return (
    <div className=" w-full">
      <Candidate name="hello" position="hello" image={sample.src} isAdded/>
    </div>
  );
}
