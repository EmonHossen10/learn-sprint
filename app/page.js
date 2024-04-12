import Companies from "./companies";
import FreeNotes from "./freeNote";

 

export default function Home() {
  return (
    <main>
      <h2 className="text-4xl text-center py-10 text-sky-500 ">This is Home page</h2>
      <h2 className="text-4xl text-center  text-sky-500 ">Here another content is commingggggg......</h2>
      <Companies />
      <FreeNotes />
    </main>
  );
}
