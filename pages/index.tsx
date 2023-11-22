import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { getWords } from "./services/getWord";
import { useEffect } from "react";
import Keyboard from "./components/Keyboard/Keyboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isError, isLoading } = useQuery({
    queryFn: getWords,
    queryKey: ["words"],
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="bg-primary-600">He</div>
      <div className="bg-secondary-700">He</div>
      <div className="bg-neutral-600">fdgd</div>
      <Keyboard />
    </main>
  );
}
